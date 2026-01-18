import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const { state, code } = getQuery(event)
  if (!code || !state) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Missing authorisation code.',
    })
  }

  if (state !== getCookie(event, 'state')) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Potential cross-site request forgery detected.',
    })
  }

  const config = useRuntimeConfig(event)
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true })

  const accessTokenResponse = await $fetch<{ access_token: string }>('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: config.discord.clientId,
      client_secret: config.discord.clientSecret,
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: joinURL(url.origin, '/oauth/discord'),
    }).toString(),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })

  const { access_token } = accessTokenResponse;

  if (!access_token) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Authorisation code invalid.',
    })
  }

  const user = await $fetch<{ id: string }>('https://discord.com/api/users/@me', {
    headers: {
      'user-agent': 'DiscordBot  (http://localhost:3000, 0.1)',
      'Authorization': `Bearer ${access_token}`,
    },
  })

  const session = await getUserSession(event)

  session.data.discordId = user.id

  const baseUrl = `https://discord.com/api/guilds/${config.discord.guildId}/members/${user.id}`

  // makes sure the user is in the guild
  if (!session.data.guildMemberAdded) {
    await $fetch(baseUrl, {
      method: 'PUT',
      body: {
        access_token,
      },
      headers: {
        'Authorization': `Bot ${config.discord.botToken}`,
        'user-agent': 'DiscordBot  (http://localhost:3000, 0.1)',
      },
    })

    session.data.guildMemberAdded = true
  }

  if (event.context.canUnlockSoundsterBadge && config.discord.soundsterRoleId) {
    await $fetch(baseUrl + `/roles/${config.discord.soundsterRoleId}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bot ${config.discord.botToken}`,
          'user-agent': 'DiscordBot  (http://localhost:3000, 0.1)',
        },
      },
    ).catch(err => {
      console.log(err)
    }).finally(() => {
      session.data.soundsterRoleAdded = true
    })
  }

  if (event.context.canUnlockUIProBadge && config.discord.soundsterRoleId) {
    await $fetch(baseUrl + `/roles/${config.discord.moduleMaintainerRoleId}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bot ${config.discord.botToken}`,
          'user-agent': 'DiscordBot  (http://localhost:3000, 0.1)',
        },
      },
    ).catch(err => {
      console.log(err)
    }).finally(() => {
      session.data.maintainerRoleAdded = true
    })
  }

  await setUserSession(event, session.data)

  return await sendRedirect(event, '/')
})

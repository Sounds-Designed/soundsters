import type { Contributor, ModuleMaintainer } from '#shared/types'
import { Octokit } from 'octokit'

export const fetchContributors = cachedFunction<Contributor[]>(async (event) => {
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true })

  return $fetch<Contributor[]>(`${url.protocol}//${url.host}/contributors.json`)
}, {
  getKey: () => 'sounds-designed-contributors',
  maxAge: 60 * 60, // 1 hour
})

// export const fetchModuleMaintainers = cachedFunction<ModuleMaintainer[]>(async () => {
//   return $fetch<{ maintainers: ModuleMaintainer[] }>('https://api.nuxt.com/modules').then(data => data.maintainers).catch(() => [])
// }, {
//   getKey: () => 'sounds-designed-module-maintainers',
//   maxAge: 60 * 10, // 10 minutes
// })

export const fetchNuxtUIProOutsideCollaborators = cachedFunction<string[]>(async (event) => {
  // Fetch on GitHub the outside collaborators of the Nuxt UI Pro repository
  const config = useRuntimeConfig(event)
  try {
    const octokit = new Octokit({
      auth: config.github.accessToken,
    })
    const response = await octokit.paginate(octokit.rest.repos.listCollaborators, {
      owner: 'Sounds-Designed',
      repo: 'ui',
    })
    return response.map((collaborator: { login: string }) => collaborator.login)
  }
  catch {
    console.warn('Failed to fetch Sounds Designed UI collaborators:')
    return []
  }
}, {
  getKey: () => 'sounds-designed-ui-pro-outside-collaborators',
  maxAge: 365 * 60 * 60 * 24, // 365 days
})

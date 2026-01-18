<script setup lang="ts">
const unlockList = ['1 pull request merged', '1 helpful issue (3+ reactions)', '1 helpful comment (3+ reactions)']
</script>

<template>
  <div class="text-white">
    <h1 class="text-4xl lg:text-6xl font-bold mb-4">
      Are you a <span class="text-green-400">Soundster</span>?
    </h1>
    <div class="flex flex-col gap-y-10 md:justify-between md:flex-row items-start gap-x-23">
      <div class="flex flex-col gap-y-4 text-neutral-300">
        <p class="text-base lg:text-lg lg:leading-8">
          Discover your contributions on
          <ULink
            to="https://go.soundsdesigned.com/ui-repo"
            target="_blank"
          >Sound UI</ULink> or other downloads on <ULink
            to="https://soundsdesigned.com"
            target="_blank"
          >Sounds Designed</ULink>, unlocking roles on <ULink
            to="https://go.soundsdesigned.com/discord"
            target="_blank"
          >Sounds Designed Discord server</ULink> and share your Soundster profile.
        </p>
        <div>
          <div class="mb-2">
            Unlock the <UBadge
              size="xl"
              color="primary"
              variant="subtle"
            >
              soundster
            </UBadge> role by having either:
          </div>
          <ul class="flex flex-col gap-y-1 pt-1 text-base">
            <li
              v-for="item in unlockList"
              :key="item"
              class="flex gap-x-2"
            >
              <UIcon
                name="i-heroicons-check-circle-20-solid"
                class="h-5 w-5 text-green-400"
              />
              <span>
                {{ item }}
              </span>
            </li>
          </ul>
          <div class="w-20 h-px bg-neutral-700 mt-8 mb-4" />
          <span class="italic text-neutral-400 text-base">
            Note that your details are stored in a secured cookie and only used to grant you roles on Discord.
          </span>
        </div>
      </div>
      <HomeCard />
    </div>
  </div>
</template>

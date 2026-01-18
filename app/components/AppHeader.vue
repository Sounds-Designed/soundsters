<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const links: DropdownMenuItem[] = [
  {
    label: 'Sounds Designed',
    description: 'Sounds Designed website',
    to: 'https://soundsdesigned.com/?utm_source=soundsters&utm_medium=dropdown&utm_campaign=home',
    icon: 'i-simple-icons-nuxtdotjs',
    target: '_blank',
  },
  {
    label: 'Soundsters',
    disabled: true,
    description: 'Are you a Soundster?',
    to: 'https://soundsters.soundsdesigned.com/?utm_source=soundsters&utm_medium=dropdown&utm_campaign=home',
    icon: 'i-simple-icons-nuxtdotjs',
    target: '_blank',
    color: "primary"
  },
  {
    label: 'Sound UI (Under Construction)',
    description: 'Sound UI documentation',
    to: 'https://ui.soundsdesigned.com/?utm_source=soundsters&utm_medium=dropdown&utm_campaign=home',
    icon: 'i-simple-icons-nuxtdotjs',
    target: '_blank',
    disabled: true
  },
]
</script>

<template>
  <div class="h-20 w-full sticky top-0 bg-default backdrop-blur-md z-50 flex flex-col justify-center">
    <UContainer class="flex justify-between items-center w-full">
      <div class="flex items-center">
        <NuxtLink to="/" aria-label="go to home page" class="flex items-center">
          <TheLogo class="h-6" />
        </NuxtLink>
        <UDropdownMenu :items="links"
          :ui="{ item: 'data-highlighted:text-highlighted data-[state=open]:text-highlighted before:bg-linear-to-b  data-highlighted:before:from-[#3d3d3d]!  data-highlighted:before:to-[#2d2d2d]! data-[state=open]:before:from-[#3d3d3d]! data-[state=open]:before:to-[#2d2d2d]!', content: 'bg-linear-to-b from-[#3d3d3d] to-[#2d2d2d] ring-[#3d3d3d] border-none rounded-lg', itemLeadingIcon: 'rounded-lg transition-colors' }"
          size="xl">
          <template #item-leading>
            <TheIcon
              class="iconify i-simple-icons:nuxtdotjs shrink-0 group-data-[state=open]:text-default transition-colors size-6 group-data-highlighted:fill-primary group-data-highlighted:text-primary text-white hover:text-primary" />
          </template>
          <UButton variant="ghost" color="primary" :ui="{base:'bg-[#2d2d2d] hover:bg-[#3d3d3d]'}" icon="i-ph-caret-down-fill" square
            class="ml-1" aria-label="dropdown button" />
        </UDropdownMenu>
      </div>
      <div class="flex items-center sm:gap-x-4 text-white font-medium">
        <UButton class="flex items-center sm:-mr-2" to="https://go.soundsdesigned.com/discord" target="_blank"
          variant="link" color="neutral" size="xl" aria-label="join us">
          <UIcon name="i-simple-icons-discord" class="h-5 w-5" />
          <span class="hidden sm:block">Join us</span>
        </UButton>
        <div class="hidden sm:block h-8 w-px bg-neutral-700 -mr-2 sm:-mr-6" />
        <UButton to="http://go.soundsdesigned.com/github" class="flex gap-x-2 items-center" variant="link"
          color="neutral" size="xl" target="_blank" aria-label="star us">
          <UIcon name="i-simple-icons-github" class="h-5 w-5 sm:ml-4" />
          <span class="hidden sm:block">Star us</span>
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

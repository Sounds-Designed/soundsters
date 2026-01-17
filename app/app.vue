<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: '/icon.png' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-[#2d2d2d]',
  },
})

useSeoMeta({
  ogSiteName: 'Soundsters',
  twitterCard: 'summary_large_image',
  twitterSite: '@sounds-designed',
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UContainer class="overflow-hidden">
      <NuxtPage keepalive />
    </UContainer>
    <AppFooter />
  </UApp>
</template>

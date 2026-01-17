<template>
  <div class="bg-linear-to-b from-[#3d3d3d] to-[#2d2d2d] ring-[#3d3d3d] border-none rounded-lg ">
    <div class="bg-[url('/join-gradient-bg-sm.svg')] bg-size-[-100%] lg:bg-[url('/join-gradient-bg.svg')] bg-no-repeat bg-bottom flex flex-col gap-y-3 text-slate-100 items-center justify-center  py-18 px-4 sm:px-6 md:px-16 lg:px-43">
      <h1 class="text-4xl font-bold text-center">
        Ready to <span class="text-green-400">Join us</span>?
      </h1>
      <p class="text-slate-300 text-base sm:text-lg lg:text-xl text-center">
        Become a Soundster and help shape the future of Sounds Designed and the Sound UI!
        Contribute, collaborate and join our community today!
      </p>
      <div class="pt-8 flex flex-col gap-y-4 sm:flex-row gap-x-4 items-center">
        <UButton
          to="https://github.com/Sounds-Designed/ui"
          icon="i-simple-icons-github"
          label="Sound UI Repository"
          class="rounded-full px-7"
          variant="solid"
          color="neutral"
          target="_blank"
          aria-label="sounds-designed-ui"
        />
      </div>
    </div>
  </div>
</template>

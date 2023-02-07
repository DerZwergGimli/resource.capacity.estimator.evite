<template>
  <div class="home flex flex-col text-center base-content space-y-2">
    <div class="flex flex-row justify-center">
      <the-card
        href="#"
        variant="horizontal"
        img-src="public/logo.png"
        img-alt="app-logo"
        class="p-3"
      >
        <div class="flex flex-col space-y-5">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            This tool is used for estimating hardware resources for virtual environments.
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">It's used as a guidance!</p>
          <Button>RESET App-Data</Button>
        </div>
      </the-card>
    </div>
    <div class="basis-1/2"></div>
  </div>
</template>
<script setup lang="ts">
import { Button } from 'flowbite-vue'
import { TheCard } from 'flowbite-vue'
</script>

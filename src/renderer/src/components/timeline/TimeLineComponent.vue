<script setup lang="ts">
import { defineProps, PropType } from 'vue'
const props = defineProps({
  headers_time: {
    type: [] as PropType<Array<string>>,
    default: ['header_1', 'header_2', 'header_3']
  },
  headers_text: {
    type: [] as PropType<Array<string>>,
    default: ['header_1', 'header_2', 'header_3']
  },
  contents: {
    type: [] as PropType<Array<string>>,
    default: ['content_1', 'content_3', 'content_3']
  }
})
</script>

<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li v-for="(content, content_index) in props.contents" :key="content_index" class="mb-10 ml-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
        props.headers_time[content_index]
      }}</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ props.headers_text[content_index] }}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {{ content }}
      </p>
    </li>
  </ol>
</template>

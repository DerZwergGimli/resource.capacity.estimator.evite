<template>
  <div class="home flex flex-col base-content justify-center">
    <div class="flex flex-row justify-center items-center space-x-2">
      <ul class="basis-1/2 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <TimeLineComponent
          :headers_time="['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']"
          :headers_text="['Import', 'Export', 'Modify', 'Modify', 'Assign', 'Check', 'Save']"
          :contents="[
            '\'Import\' your own config or use the default',
            'Check you imported config in the \'Export\' section',
            'Modify your hosts in the \'Host\' section',
            'Modify your VMs in the \'VM\' section',
            'Assign your VMs to the host in the \'Assignment\' section',
            'Check the PDF in the \'PDF\' section',
            'Save all your files in the \'Export\' as .zip'
          ]"
        />
      </ul>
      <img class="object-contain w-96" src="/logo.png" alt="app-logo" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TimeLineComponent from '../components/timeline/TimeLineComponent.vue'

export default defineComponent({
  components: { TimeLineComponent }
})
</script>

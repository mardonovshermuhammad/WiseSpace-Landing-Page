<template>
    <div class="w-full h-20 bg-white flex  items-center justify-center">
      <div class="container mx-20 flex justify-between " >
        <img width="186" height="38" src="@/static/img/icon.png" alt="">
        <div class="w-[50%] mt-2">
          <headeerMenu/>
        </div>
        <div class="w-[206px] h-[38px] bg-blue-600"></div>
      </div>
    </div>
</template>
<script setup lang="ts">
import headeerMenu from '@/components/headeerMenu.vue'
</script>
<style scoped>
</style>

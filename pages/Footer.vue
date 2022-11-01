<script setup lang="ts">
import formMain from '@/components/getInTouch/formMain.vue'
import scroll from '@/components/ScrollToTop/scroll.vue'
</script>
<template>
<div class=" flex justify-center relative">
  <div class="container">
  <h1 class="text-[#002F5F] text-center sm:text-[40px] text-[30px] uppercase font-Mmeduim font-bold mb-8">Get in touch</h1>
  <formMain></formMain>
  </div>
  <scroll class=' absolute bottom-[-70px] right-[20px] z-50' />
</div>
</template>
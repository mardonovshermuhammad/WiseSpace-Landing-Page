<script setup lang="ts">
import formMain from '@/components/getInTouch/formMain.vue'
import scroll from '@/components/ScrollToTop/scroll.vue'
</script>
<template>
<div id="Contacts" class=" flex justify-center relative md:pt-20 pt-0">
  <div class="container  2xl:px-20 px-2">
  <h1 class="text-[#002F5F] text-center sm:text-[40px] text-[30px] uppercase font-Mmeduim font-bold md:mb-8 mb-2">Get in touch</h1>
  <formMain></formMain>
  </div>
  <scroll class=' absolute bottom-[-70px] right-[20px] z-50' />
</div>
</template>
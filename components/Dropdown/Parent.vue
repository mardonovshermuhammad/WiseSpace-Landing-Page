<script setup lang="ts">
import InputModal from '@/components/inputModal/InputModal.vue'
const emit = defineEmits(['closes'])
</script>
<template>
  <div
    class="flex flex-col items-center justify-start p-5 shadow-modalShadow max-w-[520px] w-full m-auto "
  >
    <h2 class="text-center font-Mmedium font-bold md:text-[30px] text-[26px] sm:mb-2 mb-0" >
      Try <span class="text-[#FF6B35]">WiseSpace</span> now
    </h2>
    <p class="opacity-40 text-center  text-[15px] font-Mregular font-normal mb-4 text-black">
      You will have free consultation before getting trall
    </p>
    <div class="w-full flex flex-wrap justify-center">
    <InputModal @close="emit('closes')"></InputModal>
    </div>
  </div>
</template>

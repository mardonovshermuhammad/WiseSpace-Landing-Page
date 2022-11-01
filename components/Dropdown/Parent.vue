<script setup lang="ts">
import { ref } from "vue"
import InputModal from '@/components/inputModal/InputModal.vue'
const emit = defineEmits(['closes'])
const closeModal = ref<boolean>(false)
const gifs = ref<boolean>(false)
function send() {
  closeModal.value = true
  setTimeout(() => {
    gifs.value = true
  }, 5000);
}
function modalclose() {
  closeModal.value = false
  gifs.value = false
  emit('closes')
}
</script>
<template>
  <div>
  <div  v-if="!closeModal"
    class="flex flex-col items-center justify-start sm:p-5 px-5 pb-5 shadow-modalShadow max-w-[520px] w-full m-auto ">
    <h2 class="text-center font-Mmedium font-bold md:text-[30px] text-[26px] sm:mb-2 mb-0" >
      Try <span class="text-[#FF6B35]">WiseSpace</span> now
    </h2>
    <p class="opacity-40 text-center  sm:text-[15px] leading-4 text-[13px] w-[90%]  font-Mregular font-normal sm:mb-4 mb-2 text-black">
      You will have free consultation before getting trall
    </p>
    <div class="w-full flex flex-wrap justify-center">
    <InputModal @send="send" @close="emit('closes')"></InputModal>
    </div>
    </div>
    <div v-if="closeModal">
      <div class="flex flex-col items-center p-5 max-w-lg shadow-modalShadow">
        <img v-if="!gifs"  class="sm:w-72 sm:h-72 w-40 h-40" src="../../static/89076-email-sent.gif" alt="">
         <div v-if="gifs" class=" flex justify-center items-center sm:w-72 sm:h-72 w-40 h-40">
             <img  class="sm:w-32 sm:h-auto w-24 h-auto" src="@/static/img/smsimg.jpg" alt="">
         </div>
          <p class="mt-20 text-[#002F5F] font-Mregular font-normal sm:text-[26px] text-[22px]">Successfully submitted</p>
         <div class="flex justify-center" >
          <button @click="modalclose" class="mt-6 rounded-lg font-Mmedium font-normal tracking-wider px-20 py-3 bg-[#002F5F] text-white">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

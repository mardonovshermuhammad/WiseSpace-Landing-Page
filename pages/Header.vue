<template>
  <div class="imgHerader">
    <div class="backround flex items-center justify-center">
      <div class="container  mx-auto px-4">
        <div class="flex items-center -mt-3">
          <h1 class="text-[#FF6B35] md:text-[40px] text-[19px] mr-5 font-Mmedium  tracking-wider font-bold">WiseSpace<span class="text-white ml-4">for</span></h1>
          <h1 class="header flex text-btnColor font-bold text-4xl tracking-[0.8px]">
            <div class="headerTextSlider">
              <ul class="headerTextSlidersWords font-Mmedium  tracking-wider font-bold">
                <li class="md:text-4xl text-[19px]">Unversity</li>
                <li class="md:text-4xl text-[19px]">Scholl</li>
                <li class="md:text-4xl text-[19px]">Education center</li>
              </ul>
            </div>
          </h1>
        </div>
        <div class="md:my-3">
          <p class="md:text-[20px] text-[15px] text-white font-normal tracking-widest md:w-[40%] w-full ">Learning Management System WiseSpace is a
            powerful and efficient online platform that adapts to the purpose of
            your educational organization. The system is easy to use, saves valuable time of adminstration staff,
            teachers
            and learners by automating the learning process.</p>
        </div>
        <div class="md:flex md:mt-0 mt-3 gap-2 items-center">
          <div  @click="istoggle"><BaseButton name="some" rounded="sm" size="sm" color="orange"
            class="flex items-center justify-between gap-2 font-Mmedium font-normal text-[14px]">
            <BaseIcon name="Download"></BaseIcon>Get 30-day Free Trail  
          </BaseButton></div>
           <div class="md:mt-0 mt-3">
             <BaseButton name="some" rounded="sm" color="white" size="md" variant="text"
               class="flex items-center justify-between gap-2 font-Mmedium font-normal text-[14px]">
               <BaseIcon name="Download"></BaseIcon>Explore plotform
             </BaseButton>
           </div>
        </div>
      </div>
    </div>
    <Modal @close="modal = false" :isOpen="modal">
    <template v-slot:body>
      <parent @closes="modal = false"></parent>
    </template>
    </Modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import BaseButton from '~/components/BaseComponents/buttons/BaseButton.vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';
import Modal from '@/components/Modal.vue'
import parent from "@/components/Dropdown/Parent.vue"
const modal = ref<boolean>(false)
function istoggle() {
  modal.value = true
}
</script>
<style scoped>
.imgHerader {
  background: url("../static/img/headerImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
.backround {
  background: linear-gradient(rgba(0, 47, 95, 0.7) 80%, rgb(0, 48, 95));
  width: 100%;
  height: 100%;
}
.header {
  display: inline-flex;
  height: 1.2em;
  overflow: hidden;
}
.headerTextSlider {
  line-height: 1.2em;
  position: relative;
  bottom: 0;
  animation: slide-vertically infinite 4s 2s ease-in-out;
  color: #fff;
}
.headerTextSlidersWords {
  list-style: none;
}
@keyframes slide-vertically {
  0% {
    bottom: 0;
  }
  33.3% {
    bottom: 1.2em;
  }
  66.6% {
    bottom: 2.4em;
  }
  100% {
    bottom: 3.6em;
  }
}
</style>
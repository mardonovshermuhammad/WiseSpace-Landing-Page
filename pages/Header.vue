<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "~/components/BaseComponents/buttons/BaseButton.vue";
import BaseIcon from "~/components/BaseComponents/BaseIcons/BaseIcon.vue";
import Modal from "@/components/Modal.vue";
import parent from "@/components/Dropdown/Parent.vue";
const modal = ref<boolean>(false);
function istoggle() {
  modal.value = true;
}
</script>
<template>
   <div class="imgHerader">
    <div class="backround flex items-center justify-center">
      <div class="container 2xl:px-20 px-2">
        <div class="flex items-center -mt-3">
          <h1
            class="text-[#FF6B35] md:text-[40px] text-[19px] sm:mr-4 mr-2 font-Mmedium tracking-wider font-bold"
          >
            WiseSpace<span class="text-white sm:ml-4 ml-2">for</span>
          </h1>

          <div class=" text-[#F6F6F6]">
            <h1
              class="box-content h-[1.5em] hidden font-Mmedium sm:flex sm:capitalize 
                      md:text-[40px] text-[19px] 2xl:ml-4 sm:tracking-wider font-bold">
              <div class="overflow-hidden">
                <span class="h-full mb-[10px] block animationWord"> University</span>
                <span class="h-full mb-[10px] block animationWord"> School</span>
                <span class="h-full mb-[10px] block animationWord"> Education Center</span>
                 <span  class="h-full mb-[10px] block animationWord" > University </span>
              </div>
            </h1>
            <div class="sm:hidden">
                <div class="wrapMobile flex flex-wrap justify-left items-center pt-2">
                  <div class="h-[3.2em] overflow-hidden">
                    <h2 class="h-full mt-0 mb-[10px] block animationWord2 text-[19px] 
                         capitalize font-bold font-Mmedium leading-[52px] tracking-[1.25px]">
                      University
                    </h2>
                    <h2 class="h-full mt-0 mb-[10px] block animationWord2 
                      text-[19px] capitalize font-Mmedium font-bold leading-[52px] tracking-[1.25px]">
                      School
                    </h2>
                    <h2  class="h-full mt-0 mb-[10px] block animationWord2 
                     text-[19px] capitalize font-Mmedium font-bold leading-[52px] tracking-[1.25px] ">
                      Education Center
                    </h2>
                    <h2 class="h-full mt-0 mb-[10px] block animationWord2 
                      text-[19px] capitalize font-Mmedium font-bold leading-[52px] tracking-[1.25px]">
                      University
                    </h2>
                  </div>
              </div>
          </div>
        </div>
        </div>
        <div class="md:my-3">
          <p
            class="md:text-[20px] text-[15px] text-white font-normal sm:leading-7 leading-5 tracking-wider md:w-[40%] w-full"
          >
            Learning Management System WiseSpace is a powerful and efficient
            online platform that adapts to the purpose of your educational
            organization. The system is easy to use, saves valuable time of
            adminstration staff, teachers and learners by automating the
            learning process.
          </p>
        </div>
        <div class="md:flex md:mt-0 mt-3 gap-2 items-center">
          <div @click="istoggle">
            <BaseButton
              name="some"
              rounded="sm"
              size="sm"
              color="orange"
              class="flex items-center justify-between gap-2 font-Mmedium font-normal text-[14px]"
            >
              <BaseIcon name="Download"></BaseIcon>Get 30-day Free Trail
            </BaseButton>
          </div>
          <div class="md:mt-0 mt-3">
            <BaseButton
              name="some"
              rounded="sm"
              color="white"
              size="md"
              variant="text"
              class="flex items-center justify-between gap-2 font-Mmedium font-normal text-[14px]"
            >
              <BaseIcon name="Vidio"></BaseIcon>Explore plotform
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
.animationWord {
  animation: word 6s infinite;
}
@keyframes word {
  16.5% {
    transform: translateY(-127%);
  }
  33% {
    transform: translateY(-107%);
  }
  49.5% {
    transform: translateY(-238%);
  }
  66% {
    transform: translateY(-220%);
  }
  82.5% {
    transform: translateY(-357%);
  }
  100% {
    transform: translateY(-334%);
  }
}
.animationWord2 {
  animation: animarMobil 6s infinite;
}
@keyframes animarMobil{
         16.5% { transform: translateY(-135%) }
         33% { transform: translateY(-118%) }
         49.5% { transform: translateY(-240%) }
         66% { transform: translateY(-234%) }
         82.5% { transform: translateY(-365%) }
        100% { transform: translateY(-358%) }
}
</style>

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
<template>
  <div class="imgHerader">
    <div class="backround flex items-center justify-center">
      <div class="container 2xl:px-20 px-2 ">
        <div class="flex items-center -mt-3">
          <h1 class="text-[#FF6B35] md:text-[40px] text-[19px] mr-5 font-Mmedium  tracking-wider 
                       font-bold">WiseSpace<span class="text-white ml-4">for</span></h1>


                       <div class="sm:px-12 text-[#F6F6F6]">
                        <h1 class="box-content h-[1.5em] hidden sm:flex sm:capitalize sm:font-semibold lg:font-extrabold sm:text-[40px]
                                          md:text-[45px] lg:text-[45px] xl:text-[50px] 2xl:text-[55px] 2xl:ml-4 sm:tracking-wider">
                          <div class="overflow-hidden text-center">
                            <span class="h-full mx-[10px] mt-0 mb-[10px] block animate-animation-spin_words text-green2">
                              University
                            </span>
                            <span class="h-full mx-[10px] mt-0 mb-[10px] block animate-animation-spin_words text-green2">
                              School
                            </span>
                            <span class="h-full mx-[10px] mt-0 mb-[10px] block animate-animation-spin_words text-green2">
                              Education Center
                            </span>
                            <span class="h-full mx-[10px] mt-0 mb-[10px] block animate-animation-spin_words text-green2">
                              University
                            </span>
                          </div>
                        </h1>

                        <!-- {/* Mobile Animation headerLanding  */} -->
                        <!-- <div class="MobileAnimation sm:hidden">
                          <div class="wrapMobile flex flex-wrap justify-left items-center pt-2 ml-4">
                            <h2 class="text-[28px] font-black text-white capitalize leading-[52px] tracking-[1.25px] ">
                              {t("common:headerContentYour")}
                            </h2>
                            <div class="h-[3.2em] overflow-hidden text-center">
                              <h2 class="h-full mx-[10px] mt-0 mb-[10px] block animate-spin_words_mob text-[28px] capitalize font-black leading-[52px] tracking-[1.25px] text-green2">
                                {t("common:headerContentBusiness")}
                              </h2>
                              <h2 class="h-full mx-[10px] mt-0 mb-[10px] block animate-spin_words_mob text-[28px] capitalize font-black leading-[52px] tracking-[1.25px] text-green2">
                                {t("common:headerContentSoftware")}
                              </h2>
                              <h2 class="h-full mx-[10px] mt-0 mb-[10px] block animate-spin_words_mob text-[28px] capitalize font-black leading-[52px] tracking-[1.25px] text-green2">
                                {t("common:headerContentDigital")}
                              </h2>
                              <h2 class="h-full mx-[10px] mt-0 mb-[10px] block animate-spin_words_mob text-[28px] capitalize font-black leading-[52px] tracking-[1.25px] text-green2">
                                {t("common:headerContentBusiness")}
                              </h2>
                            </div>
                            <h2 class="text-[28px] capitalize font-black leading-[22px] tracking-[1.25px] ml-0 mr-4 mt-2 text-white">
                              {t("common:headerSolution")}
                            </h2>
                          </div>
                          <h2 class="text-[21px] text-white font-medium leading-[35px] px-4 tracking-wide mt-6">
                            {t("common:headerContent")}
                          </h2>
                        </div> -->
                        <!-- {/* Desktop title and button headerLanding  */} -->
                      </div>


        </div>
        <div class="md:my-3">
          <p class="md:text-[20px] text-[15px] text-white font-normal sm:leading-7 leading-5 tracking-wider md:w-[40%] w-full ">Learning Management System WiseSpace is a
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


@media(max-width: 768px){
  .header {
  height: 0.9em;
}
  .headerTextSlider {
  line-height: 0.8em;
  animation: slide-vertically infinite 4s 3s ease-in-out;
}
@keyframes slide-vertically {
  0% {
    bottom: 0;
  }
  33.3% {
    bottom: 0.8em;
  }
  66.6% {
    bottom: 1.6em;
  }
  100% {
    bottom: 2.4em;
  }
}

}
</style>
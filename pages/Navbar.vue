<template>
  <div class="w-full md:h-20 h-[56px] bg-white flex  items-center justify-center">
    <div class="container 2xl:px-20 px-4 flex justify-between ">
      <img width="186" height="38" src="@/static/img/icon.png" alt="">
      <div class=" mt-2 lg:inline hidden w-[50%]">
        <headeerMenu />
      </div>
      <div class="md:mt-0 mt-1" @click="istoggle"> 
              <BaseButton name="some" rounded="sm" size="sm" color="orange"
                class="flex items-center font-Mmedium font-normal text-[14px] justify-between md:gap-2">
               <BaseIcon class="mr-1" name="Download"></BaseIcon><span class="md:flex hidden "> Get 30-day</span> Free Trail
            </BaseButton>
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
import headeerMenu from '@/components/headeerMenu.vue'
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

</style>

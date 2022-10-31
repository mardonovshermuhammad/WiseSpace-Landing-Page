<template>
  <div class="w-full h-20 bg-white flex  items-center justify-center">
    <div class="container lg:mx-20 mx-3 flex justify-between ">
      <img width="186" height="38" src="@/static/img/icon.png" alt="">
      <div class=" mt-2 lg:inline hidden w-[50%]">
        <headeerMenu />
      </div>
      <div @click="istoggle"> <BaseButton name="some" rounded="sm" size="sm" color="orange"
               class="flex items-center font-Mmedium font-normal text-[14px] justify-between gap-2">
              <BaseIcon name="Download"></BaseIcon><span class="md:flex hidden">Get 30-day</span> Free Trail
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

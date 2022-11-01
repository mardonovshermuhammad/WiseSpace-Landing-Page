<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    itemsLenght:{
        type: Number,
        default: 1,
    }
})

const isDown = ref<boolean>(false)
const startX = ref<number>(0);
const scrollLefts = ref<any>(0);
const werty  = ref<any>(null)
const lenghts = ref<number>(0)

function mousedown(e:any) {
    isDown.value = true;
    startX.value = e.pageX;
    scrollLefts.value = werty.value.scrollLeft;
    
}
function mouseleave() {
    isDown.value = false
}
function mouseup() {
    isDown.value = false
}
function mousemove(e:any) {
    if (!isDown.value) return;

    lenghts.value =  werty.value.scrollLeft
    werty.value.scrollLeft = scrollLefts.value - (e.pageX - startX.value) *2
    
}
</script>
<template>
   <div class=" flex justify-center">
    <div class=" container ">
        <div class="w-full my-8">
            <div @mousemove="mousemove($event)" @mouseup="mouseup"
                  @mouseleave="mouseleave" @mousedown="mousedown($event)" 
                    ref="werty" class="items flex xl:justify-around justify-between scrollbar-hide py-4">
                     <slot name="Slotcard"></slot>
            </div>
         </div>
    </div>
   </div>
</template>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}


.items {
  height:auto;
  width:100%;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
}
</style>
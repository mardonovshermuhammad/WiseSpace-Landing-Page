<script setup lang="ts">
import { ref,PropType } from 'vue'
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
                    ref="werty" class="items flex justify-between scrollbar-hide py-4">
                     <slot name="Slotcard"></slot>
            </div>
             <div class=" w-full flex justify-center">
             <div  v-for="(text,i) in 10" :key="i">
             <!-- <span class="w-[20px] h-[20px] text-[25px] text-black"
                  >
                 {{werty.scrollLeft >= scrollLefts ? '&#186;': '&#8226;'}}</span> -->
                 <!-- <span class="w-[20px] h-[20px] mr-4 text-[25px] text-black">
                 {{(lenghts< 440 && i<3) ? '&#8226;': '&#186;'}}
                 {{(lenghts > 440 && lenghts < 440*i && i == 3) ? '&#8226;': '&#186;'}}</span> -->
             </div>
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
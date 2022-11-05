<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    itemsLenght:{
        type: Number,
        default: 1,
    },
    itemsVisable:{
        type: Boolean,
        default: false,
    },
    ItemsWidth:{
        type: Number,
        default: 280,
    },
    ItembgColor:{
       type: String,
        default: '',
    }
})

const isDown = ref<boolean>(false)
const startX = ref<number>(0);
const scrollLefts = ref<any>(0);
const werty  = ref<any>(null)
const lenghts = ref<number>(0)
const scrollPage = ref<number>(0)

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
function touchend() {
    if ( werty.value.scrollLeft < props.ItemsWidth) {
        scrollPage.value = 0
    }
    if ( werty.value.scrollLeft > props.ItemsWidth) {
        scrollPage.value = 1
    }
    if ( werty.value.scrollLeft > props.ItemsWidth*2) {
        scrollPage.value = 2
    }
    
}
  
</script>
<template>
   <div class=" flex justify-center">
    <div class=" container ">
        <div class="w-full md:my-8">
            <div @mousemove="mousemove($event)" @mouseup="mouseup"
                  @mouseleave="mouseleave" @touchend="touchend" @mousedown="mousedown($event)" 
                    ref="werty" class="items flex xl:justify-around justify-between scrollbar-hide py-4">
                     <slot name="Slotcard"></slot>
            </div>
         </div>
        <div v-if="itemsVisable" class="sm:hidden flex mb-8 justify-center">
        <div class=" flex">
            <div  v-for="(text,i) in props.itemsLenght" :key="i" class="w-[10px] mr-2 h-[10px] bg-[#D9D9D9] rounded-full">
               <div v-show="i == scrollPage" class="w-full h-full rounded-full " :class="[ItembgColor]"></div>
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
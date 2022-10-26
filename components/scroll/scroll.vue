<script setup lang="ts">
import { log } from 'console';
import { ref } from 'vue'
interface Card {
  name : string ,
  whoIs : string  ,
  comment: string 
}
const cards = <Card> {
   name : 'Ubaydulla Salokhiddinov',
   whoIs : 'Project manager',
   comment : 'Since switching to WiseSpace, we have increased our use of e-learning by 100%, largely because it is so simple for our teachers, students and administrative staff'
}
const isDown = ref<boolean>(false)
const startX = ref<number>(0);
const scrollLefts = ref<any>(0);
const werty  = ref<any>(null)

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

    werty.value.scrollLeft = scrollLefts.value - (e.pageX - startX.value) *2
    
}
</script>
<template>
   <div class=" flex justify-center mb-12">
    <div class=" container ">
        <div class="w-full my-12">
            <div @mousemove="mousemove($event)" @mouseup="mouseup"
                  @mouseleave="mouseleave" @mousedown="mousedown($event)" 
                    ref="werty" class="items flex justify-between">
                   <div v-for="item in 10">
                    <div class=" ml-10 mt-10 flex flex-col items-start justify-center w-[352px] h-[235px]  p-[20px]  rounded-lg shadow-black">
                        <div class="flex items-start justify-center">
                            <div class="mr-2">
                            <img class="max-w-[48px] w-full  max-h-12 rounded-[50%] h-12" src="@/static/img/Home-min.png" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-start mb-7">
                            <p class="text-lg font-semibold"   >{{cards.name}}</p>
                            <p class="text-base font-normal">{{cards.whoIs}}</p>
                            </div>
                        </div>
                        <p class="text-base font-normal max-w-[250px] flex flex-wrap" >{{cards.comment}}</p>
                    </div>
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
  border:1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
}
</style>
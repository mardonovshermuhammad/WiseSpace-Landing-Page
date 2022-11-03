<script setup lang="ts">
import Discloruse from '@/components/dicsloruse/Discloruse.vue'
import { ref } from 'vue'
const data = ref<any[]>(
  [
    {
        id:  1,
        title: "for Teachers",
        body: [
          'Weekly timetable','User friendly mobile application','Students can track their attendance rate in two ways',
          'Grades from all subjects can be seen in one place','Assignments with deadlines are comfortable and', 'ease to use'
        ],
        showBody: true
    },
   {
        id: 2,
        title: "for Students",
        body: [
          'Weekly timetable ','Assignments with deadlines are comfortable and ease to use','User friendly mobile application',
          'Students can track their attendance rate in two ways Grades from all subjects can be seen in one place',
        ],
        showBody: false
    },
    {
        id: 3,
        title: "for Admin",
        body: [
          'Creating Branches',
          'Full statistics about finance, students, employees and etc Assigning roles and permissions Mass import functionality (users, courses, faculties) - using one universal excel template)'
        ],
        showBody: false
    }
    ])
  const imgCard =ref<any[]>([
      {img: "tech1"},
      {img: "tech2"},
      {img: "tech1"},
    ])
const imgCard2 =ref<any[]>([
      {img: "student"},
      {img: "student2"},
      {img: "student"},
    ])
const imgCard3 =ref<any[]>([
      {img: "admin"},
      {img: "admin2"},
      {img: "admin"},
    ])
const dataId = ref<number>(1)
const modal = ref<boolean>(false)
const imgModal = ref<string>('')
function elementId(id:number){
  dataId.value = id
}
function modalImgs(event: any) {
   imgModal.value = event.imgId
   modal.value = event.modal
   
}
function imgZoom(id:number) {
  imgModal.value = imgCard.value[id].img
  modal.value = true
}
function imgZoom2(id:number) {
  imgModal.value = imgCard2.value[id].img
  modal.value = true
}
function imgZoom3(id:number) {
  imgModal.value = imgCard3.value[id].img
  modal.value = true
}
</script>
<template>
<div id="Features" class="md:pb-20 pb-0 md:pt-20 mt-4  flex justify-center">
  <div class="container  2xl:px-20 px-0">
    <h1 class="text-center md:text-4xl text-[30px]  font-Mbold font-bold text-[#002F5F] uppercase  md:mb-10 mb-[-20px]">Features</h1>
    <div class="flex justify-between">
    <div class="md:w-1/3 w-full ">
      <Discloruse :todos="data" @elementId="elementId" @modalImgs="modalImgs"/>
    </div>

   <div class=" w-3/5 h-[500px] pt-2 hoverImg md:flex hidden "  style="overflow: hidden;">
    <div class="w-full h-[1500px] md:flex h-auto md:flex-col md:justify-between hidden"
    :class="{'translet1':(dataId==1),'translet2':(dataId==2),'translet3':(dataId==3)}">
      <div  class=" w-full h-[500px] mb-8" style="overflow: hidden;">
        <div>
          <div :class="{'sliderBoard':dataId==1}">
            <ul>
                <li v-for="(item,i) in imgCard" :key="i" @click="imgZoom(i)">
                  <img class="w-full h-full" 
                    :src="require('@/static/img/'+ item.img + '.png')" alt=""></li>
            </ul>
        </div>
        </div>
      </div>
      <div   class=" w-full h-[500px] mb-8" style="overflow: hidden;" >
        <div>
        <div :class="{'sliderBoard':dataId==2}">
            <ul>
              <li v-for="(item,i) in imgCard2" :key="i"  @click="imgZoom2(i)" >
                  <img class="w-full h-full" 
                    :src="require('@/static/img/'+ item.img + '.png')" alt=""></li>
            </ul>
        </div>
       </div>
      </div>
      <div  class=" w-full h-[500px]" style="overflow: hidden;">
        <div>
        <div :class="{'sliderBoard':dataId==3}">
            <ul>
              <li v-for="(item,i) in imgCard3" :key="i"  @click="imgZoom3(i)" >
                  <img class="w-full h-full" 
                    :src="require('@/static/img/'+ item.img + '.png')" alt=""></li>
            </ul>
        </div>
       </div>
      </div>
    </div>
   </div>
  </div>
  </div>
    <div v-if="modal" :class="{'animationZoom': modal}" class=" md:px-0 px-4 fixed z-50 flex justify-center items-center">
    <img @click="modal = false" class="w-8 h-8 absolute md:top-8 md:right-12 top-4 right-4" src="@/static/img/close.png" alt="">
      <img class="w-auto md:h-[70%] h-auto" 
                    :src="require('@/static/img/'+ imgModal + '.png')" alt="">
     </div>
</div>
</template>
<style scoped>
.animationZoom{
 animation: animarzoom 0.7s forwards;
}
@keyframes animarzoom{
  0%{
    top: 45%;
    left: 45%;
    width: 0px;
    height: 0px;
    z-index: 200;
  }
  100%{
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 110%;
    z-index: 200;
    top: 0px;
    left: 0px;
  }
}

.translet1{
  transform: translateY(0px);
  transition: 1s;
}
.translet2{
  transform: translateY(-515px);
  transition: 1s;
}
.translet3{
  transform: translateY(-1030px);
  transition: 1s;
}

.sliderBoard {
    /*div*/
    width: 100%;
    height: 100%;
    overflow: hidden;
    
}
.sliderBoard ul {
    /*ul*/
    width: 300%;
    height: 100%;
    position: relative;
    animation: slider 20s infinite;
    display: flex;
}
.sliderBoard li {
    /*li*/
    width: 100%;
    height: 100% !important;
    font: bold 120px Tahoma;
    text-align: center;
    float: left;
}
.hoverImg:hover .sliderBoard ul{
  animation-play-state: paused;
  cursor: pointer;
}
@keyframes slider {
    0% {
        left: 0px;
    }
    40%{
      left: 0px;
    }
    50% {
        left: -100%;
    }
    90% {
        left: -100%;
    }
    100%{
      left: -200%;
    }
}

.animatPage{
  margin-top: 70%;
  animation: animatpage 1.5s;
  animation-fill-mode: forwards;
}

@keyframes animatpage{
  0%{
    margin-top: 70%;
  }
  100%{
    margin-top: 0%;
  }
}




</style>
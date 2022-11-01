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
    ]
)
const dataId = ref<number>(1)
function elementId(id:number){
  dataId.value = id
}
</script>
<template>
<div id="Features" class="md:pb-20 pb-0 md:pt-20 mt-4  flex justify-center">
  <div class="container  2xl:px-20 px-0">
    <h1 class="text-center md:text-4xl text-[30px]  font-Mbold font-bold text-[#002F5F] uppercase  md:mb-10 mb-[-20px]">Features</h1>
    <div class="flex justify-between">
    <div class="md:w-1/3 w-full ">
      <Discloruse :todos="data" @elementId="elementId" />
    </div>
    <div class="w-3/5 h-[500px] md:flex hidden">
      <div v-if="dataId == 1" class=" w-full h-full">
        <div id="sliderBoard">
            <ul>
                <li> <img class="w-full h-full" src="@/static/img/tech1.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/tech2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/tech1.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/tech2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/tech1.png" alt=""></li>
            </ul>
        </div>
      </div>
      <div  v-if="dataId == 2" class=" w-full h-full">
        <div id="sliderBoard">
            <ul>
                <li> <img class="w-full h-full" src="@/static/img/student.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/student2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/student.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/student2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/student.png" alt=""></li>
            </ul>
        </div>
      </div>
      <div  v-if="dataId == 3" class=" w-full h-full">
        <div id="sliderBoard">
            <ul>
                <li> <img class="w-full h-full" src="@/static/img/admin.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/admin2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/admin.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/admin2.png" alt=""></li>
                <li> <img class="w-full h-full" src="@/static/img/admin.png" alt=""></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
 
</div>
</template>
<style scoped>

#sliderBoard {
    /*div*/
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#sliderBoard ul {
    /*ul*/
    width: 500%;
    height: 100%;
    position: relative;
    animation: slider 30s infinite;
    display: flex;
}
#sliderBoard li {
    /*li*/
    width: 100%;
    height: 100% !important;
    font: bold 120px Tahoma;
    text-align: center;
    float: left;
}

@keyframes slider {
    0% {
        left: 0px;
    }
    10% {
        left: -100%;
    }
    20% {
        left: -100%;
    }
    40% {
        left: -200%;
    }
    50% {
        left: -200%;
    }
    60% {
        left: -300%;
    }
    70% {
        left: -300%;
    }
    80% {
        left: -400%;
    }
    90% {
        left: -400%;
    } /*-1500會變白色*/
}


</style>
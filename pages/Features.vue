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
<div class="py-16 flex justify-center">
  <div class="container">
    <h1 class="text-center md:text-4xl text-[30px]  font-Mbold font-bold text-[#002F5F] uppercase  mb-10">Features</h1>
    <div class="flex justify-between">
    <div class="md:w-1/3 w-full ">
      <Discloruse :todos="data" @elementId="elementId" />
    </div>
    <div class="w-3/5 h-[500px] md:flex hidden">
      <div v-if="dataId == 1" class=" w-full h-full">
       <img class="w-full h-full" src="@/static/img/Assignments.png" alt="">
      </div>
      <div  v-if="dataId == 2" class=" w-full h-full">
        <img class="w-full h-full" src="@/static/img/student.png" alt="">
      </div>
      <div  v-if="dataId == 3" class=" w-full h-full">
        <img class="w-full h-full" src="@/static/img/admin.png" alt="">
      </div>
    </div>
  </div>
  </div>
 
</div>
</template>
<style scoped>

</style>
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
          '111','222','33'
        ],
        showBody: false
    },
    {
        id: 3,
        title: "for Admin",
        body: [
          '111','222','33'
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
    <h1 class="text-center text-4xl font-bold uppercase tracking-widest mb-10">Features</h1>
    <div class="flex justify-between">
    <div class="w-1/3">
      <Discloruse :todos="data" @elementId="elementId" />
    </div>
    <div class="w-3/5 h-[500px] ">
      <div v-if="dataId == 1" class=" w-full h-full bg-red-500">
      </div>
      <div  v-if="dataId == 2" class=" w-full h-full bg-blue-500">
      </div>
      <div  v-if="dataId == 3" class=" w-full h-full bg-indigo-500">
      </div>
    </div>
  </div>
  </div>
 
</div>
</template>
<style scoped>

</style>
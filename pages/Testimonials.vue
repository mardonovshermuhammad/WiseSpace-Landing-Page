<script setup lang="ts">
import scroll from '@/components/scroll/scroll.vue'
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
</script>
<template>
<div class="flex justify-center mt-16">
  <div class="container">
  <h1 class="text-center text-[rgba(0, 0, 0, 0.87)] tracking-wide text-4xl font-bold font-Mmeduim text-[30px] ">Testimonials</h1>
  <scroll :itemsLenght="10">
  <template #Slotcard>
    <div v-for="item in 10" class="shadow-lg shadow-black-300 sm:mx-10 mx-4">
    <div class=" mt-10 flex flex-col items-start justify-center w-[352px] h-[235px]  sm:p-[20px] p-[10px]  rounded-lg shadow-black">
        <div class="flex items-start justify-center">
            <div class="mr-2">
            <img class="w-[48px]  max-h-12 rounded-[50%] h-12" src="@/static/img/Home-min.png"  alt="">
            </div>
            <div class="flex flex-col items-start justify-start mb-7">
            <p class="text-[18px] font-Mregular font-semibold tracking-little text-[#002F5F]">{{cards.name}}</p>
            <p style="color: rgba(0, 47, 95, 0.6);" class="text-[15px] font-normal font-Mregular tracking-little">{{cards.whoIs}}</p>
            </div>
        </div>
        <p style="color: rgba(0, 47, 95, 0.6);" class="text-[15px] font-normal font-Mregular  tracking-wide text-[rgba(0, 47, 95, 0.6)] w-full" >{{cards.comment}}</p>
     </div>
    </div>
  </template>
  </scroll>
  </div>
</div>
</template>
<style scoped>

</style>
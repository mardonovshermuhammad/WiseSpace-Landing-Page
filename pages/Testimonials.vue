<script setup lang="ts">
import scroll from '@/components/scroll/scroll.vue'
interface Card {
  img : string ,
  name : string ,
  whoIs : string  ,
  comment: string 
}
const cards = <Card[]> ([
  {
    img : require('@/static/img/ubay.png'),
    name : 'Ubaydulla Salokhiddinov',
   whoIs : 'Project manager',
   comment : 'Since switching to WiseSpace, we have increased our use of e-learning by 100%, largely because it is so simple for our teachers, students and administrative staff'
  },
  {
  img : require('@/static/img/aziz.png'),
    name : 'Aziz Gaffarov',
   whoIs : 'Manager',
   comment : 'In the end, WiseSpace is quick, simple, flexible, and even if you` re a teacher of one or more, you can manage hundreds of students and dozens of courses with ease.'
  },
  {
  img : require('@/static/img/andrey.png'),
    name : 'Andrey Vetrovkin',
   whoIs : 'Ceo of Google',
   comment : 'Over the past 15 years, I`ve used a number of learning management systems, but WiseSpace LMS is without a doubt the best I`ve ever used.'
  }, 
]
)
</script>
<template>
<div id="Clients" class="flex justify-center md:pt-20 pt-20">
  <div class="container">
  <h1 class="text-center text-[rgba(0, 0, 0, 0.87)] tracking-wide text-4xl font-bold font-Mmeduim text-[30px] ">Testimonials</h1>
  <scroll ItembgColor="bg-[#002F5F]" :itemsLenght="3" :itemsVisable="true">
  <template #Slotcard>
    <div>
      <div class=" f-full flex justify-between">
        <div v-for="item in cards" class="shadowCard sm:mx-10 mx-4">
          <div class=" flex flex-col items-start justify-center w-[352px] h-[235px]  p-[20px]  rounded-lg shadow-black">
              <div class="flex items-start justify-center">
                  <div class="mr-2">
                  <img class="w-[48px]  max-h-12 rounded-[50%] h-12" :src="item.img"  alt="">
                  </div>
                  <div class="flex flex-col items-start justify-start mb-7">
                  <p class="text-[18px] font-Mregular font-semibold tracking-little text-[#002F5F]">{{item.name}}</p>
                  <p style="color: rgba(0, 47, 95, 0.6);" class="text-[15px] font-normal font-Mregular tracking-little">{{item.whoIs}}</p>
                  </div>
              </div>
              <p style="color: rgba(0, 47, 95, 0.6);" class="text-[15px] font-normal font-Mregular  tracking-wide text-[rgba(0, 47, 95, 0.6)] w-full" >{{item.comment}}</p>
          </div>
    </div>
      </div>
    </div>
  </template>
  </scroll>
  </div>
</div>
</template>
<style scoped>
.shadowCard{
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
}
</style>
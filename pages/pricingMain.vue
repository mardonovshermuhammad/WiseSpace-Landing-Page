<script setup lang="ts">
import PriceItem from '@/components/priceItem/priceItem.vue';
import scroll from '@/components/scroll/scroll.vue'
import { ref } from "vue"
const items = ref<any[]>([
  { name: "Free", sum: 0, 
     select:['Course management','Define roles and permissions','Entrance attendance tracking','Creating notifications and announcements',
              'Branch management','Mobile application']
     },
    { name: "Basic", sum: 59, 
   select:[ 'Features of Free version','External apps integration','Request management','Email Communication',
            'Video conferencing','Statistics and reporting']
   },
    { name: "Premium", sum: 99, 
   select:['Features of Basic version','Self-customization','Gamification','Statistics with AI implementation',
            'Advanced attendance tracking','Security through two-way verification','Human Resource Management',
             'Accounting system']
},
   
]);
</script>
<template>
   <div id="Pricing" class=" md:py-20 py-8 bg-[#002F5F]">
        <div class="  flex justify-center">
            <div class="container  2xl:px-20 px-2">
                <div class="text-center">
                    <h1 class="md:text-[40px] text-[30px] font-bold  text-white uppercase">pricing</h1>
                </div>
            <scroll ItembgColor="bg-[#4270F7]" :ItemsWidth="250" :itemsVisable="true" :itemsLenght="3">
            <template #Slotcard>
                <PriceItem :items="items" ></PriceItem>
            </template>
            </scroll>
            </div>
            </div>
   </div>
</template>
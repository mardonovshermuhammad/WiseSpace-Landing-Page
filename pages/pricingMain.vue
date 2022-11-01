<script setup lang="ts">
import PriceItem from '@/components/priceItem/priceItem.vue';
import scroll from '@/components/scroll/scroll.vue'
import { ref } from "vue"
const items = ref<any[]>([
  { name: "Free", sum: 0, 
     select:[
        'Secure your account'] },
    { name: "Basic", sum: 19, 
   select:[ 'Secure your account','Up 2 credit cards'] },
    { name: "Plus", sum: 69, 
   select: [
    'Secure your account','Up 2 credit cards','Customer support'] },
    { name: "Premium", sum: 99, 
   select:[
    'Secure your account','Up 2 credit cards','Customer support','Virtual credits','Personal fin export']},
   
]);
</script>
<template>
   <div>
        <div class="  flex justify-center my-8 bg-[#002F5F]">
            <div class="container">
                <div class="text-center">
                    <h1 class="md:text-[40px] text-[30px] mt-8 sm:mb-10 mb-[-20px] font-bold  text-white uppercase">pricing</h1>
                </div>
            <scroll :itemsLenght="10">
            <template #Slotcard>
                <PriceItem :items="items" ></PriceItem>
            </template>
            </scroll>
            </div>
            </div>
   </div>
</template>
<script setup lang="ts">
import PriceItem from '@/components/priceItem/priceItem.vue';
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
    <div class="w-full bg-[#002F5F] pt-[10px] pb-20 px-[20px] flex justify-center">
        <div class="container">
            <div class="text-center">
                    <h1 class="text-2xl mt-8 mb-10 font-bold  text-white uppercase">pricing</h1>
                </div>
                <div class="px-10">
                    <PriceItem :items="items" ></PriceItem>
                </div>
        </div>
    </div>
</template>
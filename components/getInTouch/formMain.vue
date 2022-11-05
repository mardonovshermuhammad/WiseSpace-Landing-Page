<script setup lang="ts">
import { ref,watch } from 'vue';
import baseInput from './baseInput.vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';
const items = ref<any[]>([
  {icon: 'Phone', name: '+998 99 638 99 00', id: ''},
  {icon: 'Email', name: 'ssolutionuz@gmail.com', id: ''},
  {icon: 'Map', name: 'Tashkent, Uzbekistan', id: 'FormInput'},
])
</script>
<template>
    <div class="bg-white w-full rounded-xl shadowcontainer  md:flex md:justify-around p-5">
        <div class="relative bg-[#002F5F] p-5 text-white rounded-[20px] overflow-hidden  md:w-2/5 w-full z-[1]">
            <div class="z-[10]">
                <h1 class="md:text-[30px] text-[26px] font-Mmeduim font-normal mb-3">Contact information </h1>
                <p style="color: rgba(255, 255, 255, 0.8)" 
                  class="md:text-[16px] text-[15px] font-Mregular font-normal mb-10 md:w-[70%] w-[90%]">
                  We will help you enhance quality of education by digitalizing educational process in your institution</p>
                <div  v-for="item in items" :id="item.id"   class="flex mb-4 items-center text-md">
                   <BaseIcon :name="item.icon"></BaseIcon>
                    <p class="text-[16px] font-Mregular ml-4 font-light">{{ item.name}}</p>
                </div>
            </div>
            <div>
                <img src="./Rectangle 1533.png" class="right-0 bottom-0 absolute z-[2]" alt="">
            </div>
        </div>
        <div class="md:w-2/5 w-full md:mt-0 mt-4 ">
                <baseInput></baseInput>   
        </div>
    </div>
</template>
<style scoped>
.shadowcontainer{
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
</style>
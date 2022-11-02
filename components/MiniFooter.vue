<script setup lang="ts">
import { ref }  from "vue"
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';
const IconName = ref<any[]>([
    {Name: 'Facebook'},
    {Name: 'Instagram'},
    {Name: 'Linkedin'},
    {Name: 'Telegram'}
])
</script>

<template>
<div class="bg-[#002F5F] sm:mt-24 mt-16 flex justify-center">
<div class="container 2xl:px-20 px-2">
    <div class="flex  justify-between flex-wrap md:px-20 md:py-8  md:m-auto md:px-7 px-4 pb-8 pt-4 w-full">
        <h6 class="text-white md:mb-0 text[15px] tracking-widest font-Mregular sm:ml-[0%] ml-[25%] font-normal">2022 Wisesoace.uz</h6>
        <h6 class="text-white sm:text-[16px] text-[15px] font-Mregular font-normal tracking-widest">Terms & Conditions <span class="sm:ml-4 ml-2"> Privacy & Policy</span></h6>
   <div class="flex items-center sm:ml-[0%] ml-[25%] text-white">
    <div v-for="name in IconName" class="mr-5 sm:mt-0 mt-3 "> 
     <BaseIcon :name="name.Name"></BaseIcon>
    </div>
   </div>
    </div>
</div>
    
</div>

</template>
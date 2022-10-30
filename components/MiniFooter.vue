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
<div class="bg-[#002F5F] mt-24 flex justify-center">
<div class="container">
    <div class="flex  justify-between flex-wrap md:px-20 md:py-8  md:m-auto px-7 py-4 w-full">
        <h6 class="text-white md:mb-0 text[15px] tracking-widest font-Mregular font-normal">2022 Wisesoace.uz</h6>
        <h6 class="text-white text-[16px] font-Mregular font-normal tracking-widest">Terms & Conditions <span class="ml-4"> Privacy & Policy</span></h6>
   <div class="flex items-center text-white">
    <div v-for="name in IconName" class="mr-5"> 
     <BaseIcon :name="name.Name"></BaseIcon>
    </div>
   </div>
    </div>
</div>
    
</div>

</template>
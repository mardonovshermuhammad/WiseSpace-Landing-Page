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
<div class="bg-primary-900 mt-24">
    <div class="flex  md:flex-row  flex-col justify-between md:px-20 md:py-8  md:m-auto px-7 py-4 max-w-[1280px]">
        <div class="text-white md:mb-0  mb-5">
    2022 Wisesoace.uz
   </div>
   <div class="flex md:mb-0  mb-5 ">
    <div class="text-white mr-7">Terms & Conditions  </div>
    <div class="text-white">Privacy & Policy </div>
   </div>
   <div class="flex items-center text-white">
    <div v-for="name in IconName" class="mr-5"> 
     <BaseIcon :name="name.Name"></BaseIcon>
    </div>
   </div>
    </div>
</div>

</template>
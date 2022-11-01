<script setup lang="ts" >
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue'

function scrollToTop() {
    window.scrollTo({
        top:0 ,
        behavior : 'smooth'
    })
}
</script>

<template>
    <button @click="scrollToTop" class="flex items-center justify-center rounded-md  bg-[#002F5F] md:w-[50px] md:h-[50px] w-[30px] h-[30px]">
        <BaseIcon class="text-[2px]" name="ArrowTop" > 
        </BaseIcon>
    </button>
</template>
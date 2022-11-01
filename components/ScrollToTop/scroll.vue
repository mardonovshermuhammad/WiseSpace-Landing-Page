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
    <button @click="scrollToTop" class="flex items-center bottom-0 absolute bottom justify-center  bg-[#002F5F] w-[50px] h-[50px]">
        <BaseIcon name="ArrowTop" > 
        </BaseIcon>
    </button>
</template>
<script setup lang="ts">
import { ref } from "vue"
import Carousel from '@/components/carousel/Carousel.vue'
const items = ref<any[]>([
  { img: "lms1-min", date: "September 13, 2022", 
    title:"Bringing down the Digital Gap in Higher Education",BtnName: 'Read full article' },
    { img: "blok2-min", date: "September 6, 2022", 
    title:"“ERP and LMS integration” 2 in 1 in your educational institution",BtnName: 'Read full article' },
    { img: "lmss3-min", date: "August 29, 2022", 
    title:"How LMS is Changing the Education System?",BtnName: 'Read full article' },
    { img: "lms1-min", date: "September 13, 2022", 
    title:"Bringing down the Digital Gap in Higher Education",BtnName: 'Read full article' },
    { img: "blok2-min", date: "September 6, 2022", 
    title:"“ERP and LMS integration” 2 in 1 in your educational institution",BtnName: 'Read full article' },
    { img: "lmss3-min", date: "August 29, 2022", 
    title:"How LMS is Changing the Education System?",BtnName: 'Read full article' },
    { img: "lms1-min", date: "September 13, 2022", 
    title:"Bringing down the Digital Gap in Higher Education",BtnName: 'Read full article' },
    { img: "blok2-min", date: "September 6, 2022", 
    title:"“ERP and LMS integration” 2 in 1 in your educational institution",BtnName: 'Read full article' },
    { img: "lmss3-min", date: "August 29, 2022", 
    title:"How LMS is Changing the Education System?",BtnName: 'Read full article' },
   
]);
</script>
<template>
 <div class="w-full pt-16">
    <h1 class="text-center mb-8 text-4xl font-bold">Blog</h1>
    <div>
        <Carousel :items="items" ></Carousel>
    </div>
  </div>
</template>
<style scoped>

</style>
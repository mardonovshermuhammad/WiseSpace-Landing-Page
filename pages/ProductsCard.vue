<script setup lang="ts">
import { ref } from "vue"
import BaseIcon from '@/components/BaseComponents/BaseIcons/BaseIcon.vue'
const Title = ref<any[]>([
    { icon: "University", name: "University" },
    { icon: "School", name: "School" },
    { icon: "University", name: "Education center" },
   ])
const Text = ref<any[]>([
    { icon: "icon", desc: "All-in-one integrated platform (LMS, ERP & CRM)" },
    { icon: "icon", desc: "Full monitoring of student & teacher performance" },
    { icon: "icon", desc: "E-admin" },
    { icon: "icon", desc: "Personal cabinet for each admin staff, teacher & learner" },
    { icon: "icon", desc: "Adaptive and Customizable (for any types of institutions)" },
    { icon: "icon", desc: "HRM and Admission" },
    { icon: "icon", desc: "7 External Apps Integration (zoom, smart timetable, etc." },
    { icon: "icon", desc: "Affordability (cloud-based storage)" },
    { icon: "icon", desc: "Accounting and Audit" },
])
</script>
<template>
    <div class="bg-[#002F5F] flex justify-center pb-4">
     <div class="container">
        <div class=" flex flex-col items-center">
            <div class="w-4/5 flex justify-between">
            <div class=" w-1/3 flex justify-center border-b border-white pb" v-for="(user,i) in Title" :key="i">
            <div class=" flex items-center cursor-pointer">
                <div class="mr-4 ">
                  <BaseIcon class="text-white" :name="user.icon"></BaseIcon>
                </div>
                <h1  class="text-[#BBBBBB] mt-2">{{user.name}}</h1>
            </div>
            </div>
            </div>
            <div class="w-4/5 my-12 h-[550px] overflow-hidden shadow-black-900 shadow-xl rounded-lg z-0">
              <div class="w-full h-full z-0 ">
                 <img class="imganimat z-0" width="2000px" height="2000px" src="@/static/img/Home-min.png" alt="">
              </div>
            </div>
            <div class="w-4/5 ml-[10%]">
              <div class="w-full h-full flex justify-between flex-wrap">
                 <div class="w-1/3 text-white flex mb-8" v-for="(item,i) in Text" :key="i">
                  <div class="mr-5">
                  <BaseIcon class="text-white" name="Checked"></BaseIcon>
                </div>
                   <h5 class="text-[15px] leading-4 tracking-widest font-extralight mr-7" >{{ item.desc }}</h5>
                 </div>
              </div>
            </div>
     </div>
    </div>
    </div>
</template>
<style scoped>
.imganimat{
    animation: animat 15s infinite;
}

@keyframes animat {
   0%{
    transform: translate3d(0, 0, 0);
   } 
   50%{
    transform: translate3d(0,-60%, 0)
   }
   100%{
    transform: translate3d(0, 0, 0);
   }
}

</style>
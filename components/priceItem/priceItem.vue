<script setup lang="ts">
import { ref,PropType } from 'vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';

const props = defineProps({
    items:{
    type: Array as PropType<Array<any>>,
    required: false,
    default: [],
    validate: (value: Array<any>) => {
      if (!Array.isArray(value)) {
        return 'Props must be of Array type'
      }
      if (Array.isArray(value)) {
        value.forEach((item: any, i) => {
          if (typeof item !== 'object') {
            return 'Item must be of type object'
          }
        })
      }
    }
    }
})
let hover = ref<boolean>(false)
</script>
<template>
   <div class=" flex md:justify-around justify-between w-[1400px]">
        <div v-for="(item,index) in items" :key="index" class="bg-[#EDEDED] cursor-pointer  rounded-xl md:py-8 py-6 cardHover 
                  md:px-9 px-7 md:w-[350px] w-[325px] mx-3 mt-4 md:h-[600px] h-[550px] flex  justify-between flex-col ">
        <div>
            <h1 class="text-[#002F5F] font-Mregular font-bold text-[26px] flex items-center">
                <svg v-if="index+1 == items.length" width="25" class="mr-2" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.1833 2.82494C12.4128 2.82659 12.6375 2.76006 12.8291 2.63379C13.0207 2.50752 13.1705 2.32719 13.2594 2.11568C13.3484 1.90418 13.3725 1.67102 13.3287 1.44578C13.285 1.22054 13.1753 1.01336 13.0137 0.850532C12.852 0.687701 12.6456 0.57655 12.4207 0.531176C12.1958 0.485802 11.9625 0.508249 11.7503 0.59567C11.5382 0.683091 11.3568 0.831548 11.2291 1.02221C11.1015 1.21287 11.0333 1.43715 11.0333 1.6666C11.0333 1.97238 11.1542 2.26575 11.3696 2.48274C11.5851 2.69973 11.8776 2.82274 12.1833 2.82494ZM23.3583 10.9166C22.3171 11.1559 21.3034 11.5022 20.3333 11.9499C19.1498 12.5178 18.032 13.2136 17 14.0249C16.2688 13.1265 15.6373 12.1514 15.1167 11.1166C14.2858 9.34168 13.584 7.50915 13.0167 5.63327C12.9632 5.45612 12.8522 5.30182 12.7013 5.19469C12.5505 5.08756 12.3682 5.0337 12.1833 5.0416C11.9984 5.0337 11.8162 5.08756 11.6653 5.19469C11.5144 5.30182 11.4035 5.45612 11.35 5.63327C10.7841 7.50962 10.0822 9.34225 9.25 11.1166C8.7318 12.1502 8.10013 13.1228 7.36666 14.0166C6.32978 13.2146 5.21273 12.522 4.03333 11.9499C3.08684 11.5082 2.0986 11.162 1.08333 10.9166C0.932593 10.8804 0.774745 10.8869 0.627531 10.9355C0.480317 10.9841 0.349572 11.0728 0.249994 11.1916C0.148662 11.3144 0.0846082 11.4636 0.0654099 11.6216C0.0462116 11.7796 0.0726719 11.9398 0.141661 12.0833C1.72249 15.6778 2.84249 19.4578 3.47499 23.3333C3.50873 23.5289 3.61121 23.7061 3.76399 23.8329C3.91677 23.9597 4.1098 24.0278 4.30833 24.0249H20.1417C20.3402 24.0278 20.5332 23.9597 20.686 23.8329C20.8388 23.7061 20.9413 23.5289 20.975 23.3333C21.6075 19.4578 22.7275 15.6778 24.3083 12.0833C24.3773 11.9398 24.4038 11.7796 24.3846 11.6216C24.3654 11.4636 24.3013 11.3144 24.2 11.1916C24.0997 11.0713 23.9676 10.9817 23.8187 10.9331C23.6698 10.8844 23.5103 10.8787 23.3583 10.9166ZM6.23333 21.2916C6.05003 21.2933 5.87038 21.2404 5.71717 21.1398C5.56397 21.0392 5.44411 20.8953 5.37282 20.7264C5.30153 20.5575 5.28202 20.3713 5.31676 20.1913C5.35151 20.0113 5.43894 19.8457 5.56797 19.7155C5.69699 19.5853 5.86179 19.4964 6.04145 19.46C6.22111 19.4237 6.40752 19.4415 6.57702 19.5112C6.74653 19.581 6.89149 19.6996 6.99351 19.8518C7.09552 20.0041 7.14999 20.1833 7.15 20.3666C7.15 20.6105 7.05369 20.8445 6.88202 21.0178C6.71035 21.191 6.47721 21.2894 6.23333 21.2916ZM12.1917 21.2916C11.9626 21.2698 11.7498 21.1633 11.595 20.9931C11.4402 20.8228 11.3544 20.6009 11.3544 20.3708C11.3544 20.1406 11.4402 19.9188 11.595 19.7485C11.7498 19.5782 11.9626 19.4718 12.1917 19.4499C12.4208 19.4718 12.6335 19.5782 12.7883 19.7485C12.9432 19.9188 13.029 20.1406 13.029 20.3708C13.029 20.6009 12.9432 20.8228 12.7883 20.9931C12.6335 21.1633 12.4208 21.2698 12.1917 21.2916ZM18.1583 21.2916C17.975 21.2933 17.7954 21.2404 17.6422 21.1398C17.489 21.0392 17.3691 20.8953 17.2978 20.7264C17.2265 20.5575 17.207 20.3713 17.2418 20.1913C17.2765 20.0113 17.3639 19.8457 17.493 19.7155C17.622 19.5853 17.7868 19.4964 17.9664 19.46C18.1461 19.4237 18.3325 19.4415 18.502 19.5112C18.6715 19.581 18.8165 19.6996 18.9185 19.8518C19.0205 20.0041 19.075 20.1833 19.075 20.3666C19.075 20.6105 18.9787 20.8445 18.807 21.0178C18.6353 21.191 18.4022 21.2894 18.1583 21.2916Z"
                        fill="#FFCE31" />
                </svg>

                {{item.name }}
            </h1>
            <h1 class="text-[#a7b5c3] text-2xl mt-3 mb-7">$
             <span class="text-[#002F5F] font-Mregular font-bold ml-[-5px]">{{item.sum}}</span>
                <span class="text-xl"> / user</span>
            </h1>
                <div v-for="(text,i) in item.select" :keys="i" class="flex items-center mt-5">
                  <BaseIcon v-if="(i ==0) && (index !=0)" class="text-red-500"   name="checkedorange"></BaseIcon>
                  <BaseIcon v-if="(i !=0) || (index ==0)"   name="Checkedpri"></BaseIcon>
                    <h1 class="text-[#002F5F] text-[14px] font-Mregular ml-3" 
                         :class="{'font-semibold':((i ==0) && (index !=0)),
                                  'font-normal':!((i ==0) && (index !=0))}">{{ text }}</h1>
                </div>
        </div>
        <div class="flex justify-center">
             <a href="#Contacts" class="md:flex hidden">
              <button type="button"
                  class="bg-[#002F5F] text-white border-none outline-none tracking-widest 
                  rounded-xl h-[44px] w-[190.83px] py-3 px-5 flex justify-center items-center">
                  Start trail
                  <div class="flex items-center relative ml-6">
                      <div  class=" bg-[#002F5F] animatIcon bottom-[2px] left-[-10px] text-white text-base absolute" >
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15C11.366 15 14.5 11.866 14.5 8C14.5 4.13401 11.366 1 7.5 1C3.63401 1 0.5 4.13401 0.5 8C0.5 11.866 3.63401 
                            15 7.5 15Z" stroke="white"/>
                            <path d="M6.44995 5.2002L9.24995 8.0002L6.44995 10.8002" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                      <span class="text-white text-base font-bold">&horbar;</span>
                  </div>
              </button>
             </a>
             <a href="#FormInput" class="md:hidden flex">
              <button type="button"
                  class="bg-[#002F5F] text-white border-none outline-none tracking-widest 
                  rounded-xl h-[44px] w-[190.83px] py-3 px-5 flex justify-center items-center">
                  Start trail
                  <div class="flex items-center relative ml-6">
                      <div  class=" bg-[#002F5F] animatIcon bottom-[2px] left-[-10px] text-white text-base absolute" >
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15C11.366 15 14.5 11.866 14.5 8C14.5 4.13401 11.366 1 7.5 1C3.63401 1 0.5 4.13401 0.5 8C0.5 11.866 3.63401 
                            15 7.5 15Z" stroke="white"/>
                            <path d="M6.44995 5.2002L9.24995 8.0002L6.44995 10.8002" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                      <span class="text-white text-base font-bold">&horbar;</span>
                  </div>
              </button>
             </a>
            
        </div>
    </div>
    </div>
</template>
<style scoped>
.cardHover:hover button{
 background-color: #0F6AC7 ;
 transition: 0.7s;
}
.cardHover:hover button .animatIcon{
  background-color: #0F6AC7 ;
 left: 10px;
 transition: 0.7s;
}
</style>
<script setup lang="ts">
import {PropType} from "vue";
import UseCarousel from './UseCarousel'
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
const {moveCarousel,atHeadOfList,currentOffset,atEndOfList, paginationFactor,carouselWidth,caruselBtn} = UseCarousel(props)

</script>
<template>
  <div class="w-full sm:h-[500px] h-[400px] flex justify-center">
  <div class=" container">
      <div class="card-carousel-wrapper">
        <div v-if="caruselBtn" :class="{'opacity-50':atHeadOfList()}"
            class=" cursor-pointer mr-2 "
            @click="moveCarousel(-1)"
            :disabled="atHeadOfList()">
              <BaseIcon name="Left"></BaseIcon>
        </div>
        <div  :style="{ width: (paginationFactor*carouselWidth-20)+'px',  }" class="card-carousel ">
            <div class="card-carousel--overflow-container">
            <div
                class="card-carousel-cards"
                :style="{
                transform: 'translateX' + '(' + currentOffset + 'px' + ')',
                }">
                <div class="card-carousel--card shadow-lg shadow-black-500 " v-for="item in items">
                    <div class= "flex flex-col items-start justify-center classHover
                            py-5 px-4 sm:w-[352px] w-[300px] "> 
                        <div class=" imgted overflow-hidden rounded-b  rounded-t">
                        <img  class=""
                             :src="require('@/static/img/'+ item.img + '.png')" />
                        </div>
                        <div class=" flex items-center justify-start mt-4">
                        <img src="@/static/img/date.png" >
                        <span class="ml-2 text-[#BDBDBD] text-sm">{{ item.date   }}</span>
                        </div>
                        <p class="mt-4 mb-6 text-[18px] font-Mregular font-medium text-[rgba(0, 47, 95, 0.7)]">{{ item.title }}</p>
                        <button class="px-4 py-2 rounded-t rounded-b text-white bg-[#002F5F] font-Mregular font-meduim"
                                >{{ item.BtnName}}</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div v-if="caruselBtn"
        :class="{'opacity-50':atEndOfList()}"
        class=" cursor-pointer ml-2"
        @click="moveCarousel(1)"
        :disabled="atEndOfList()"
      ><BaseIcon name="Right"></BaseIcon></div>
    </div>
    </div>
  </div>
</template>
<style scoped>

.classHover:hover{
 transition: 2s;
}
.classHover:hover .imgted{
transform: scale(1.03);
 transition: 1s;
}
.classHover:hover button {
  background: #0F6AC7;
  transition: 1s;
}
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2) {
  font-size: 12px;
  font-weight: 300;
  padding: 6px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 12px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):after {
  content: "";
  position: absolute;
  top: 10px;
  left: -1px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: -0px -0px 0px #004977;
}

</style>

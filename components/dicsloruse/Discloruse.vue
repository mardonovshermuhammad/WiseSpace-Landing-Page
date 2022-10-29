<script setup lang="ts">
import { PropType, defineEmits } from "vue"
import UseDisc from "./compoDisc"
const emit = defineEmits(['elementId'])
const props = defineProps({
    todos:{
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

const {onClick,enter,leave,afterEnter,afterLeave,itemId } = UseDisc(props,emit)

</script>
<template>
 <div>
    <div id="app" class="container mx-auto my-10">
  <ul>
    <li v-for="(todo, index) in todos" class="border-b-2 border-black-500"
     :class="{'mt-4': index >= 0, '-active': ( index+1 == itemId)}">
      <div
        class="py-2 px-6 flex items-center justify-between w-full text-left font-bold text-[#BDBDBD] "
        @click.prevent="onClick($event, todo.id)">
        <span :class="{'text-[#002F5F]':(index+1 == itemId)}" 
              class="md:text-lg text-[20px] uppercase font-semibold tracking-wider">{{ todo.title }}</span>
        <span class="icon text-[#BDBDBD]" >
          <span class="icon__line colors " :class="{'colors2':(index+1 == itemId)}"></span>
          <span class="icon__line colors" :class="{'colors2':(index+1 == itemId)}"></span>
        </span>
      </div>
      <transition
        name="content"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave">
        <div v-if="(index+1 == itemId)">
          <div class="pb-2 px-6">
          <ol class="">
          <li class="text-[15px] text-[#002F5F]" v-for="(item,i) in todo.body" :key="i">
          <span class=" text-[17px]">&#8226;</span> {{ item}}
          </li>
          </ol> 
          <div class="md:hidden flex">
            <div  v-if="index+1 == 1" >
            <img class="w-full h-full" src="@/static/img/Assignments.png" alt="">
          </div>
          <div  v-if="index+1 == 2" class="md:hidden flex">
            <img class="w-full h-full" src="@/static/img/headerImg.png" alt="">
          </div>
          <div  v-if="index+1 == 3" class="md:hidden flex">
            <img class="w-full h-full" src="@/static/img/Home-min.png" alt="">
          </div>
          </div>
          </div>
        </div>
      </transition>
    </li>
  </ul>
</div>
 </div>
</template>
<style scoped>
.icon {
  position: relative;
  display: block;
  width: 1em;
  height: 1em;
  margin-right: 1em;
}

.icon__line {
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: transform 200ms ease;
}
.colors{
   background-color:#BDBDBD;
}
.colors2{
   background-color:#002F5F;
}

.icon__line:nth-child(1) {
  transform: rotate(90deg);
}

.-active .icon__line:nth-child(1) {
  transform: rotate(0);
}

.-active .icon__line:nth-child(2) {
  transform: rotate(-180deg);
}
.content-enter-active,
.content-leave-active {
  transition: height 400ms ease;
}
</style>
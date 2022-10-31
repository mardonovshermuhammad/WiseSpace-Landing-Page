<script setup lang="ts">
import {ref, toRefs,watch } from "vue"
const emit = defineEmits(['close'])
const props = defineProps({
  isOpen:{
    type: Boolean,
    default: false
  }
})
function closeFunc() {
}
</script>

<template>
  <div>
  <Transition name="modal">
    <div  @click=" emit('close')" v-if="isOpen" class="modal-mask">
      <div class="modal-wrapper">
        <div @click.stop="closeFunc" :class="{'animatcard':isOpen }" class="modal-container w-auto">
            <slot name="body">
            </slot>
        </div>
      </div>
    </div>
  </Transition>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 2s ease;
}
@media(max-width: 640px){
  .modal-container{
    width: 300px
  }
}
.animatcard{
  animation: animat 1s;
}
@keyframes animat{
  0%{
    -webkit-transform: translateY(-500px);
     transform: translateY(-500px);
     opacity: 0.3;
  }
  100%{
    -webkit-transform: translateY(0px);
     transform: translateY(0px);
     opacity: 1;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter-from {
  opacity: 1;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  animation: animat2 1s;
}
@keyframes animat2{
  0%{
    -webkit-transform: translateY(0px);
     transform: translateY(0px);
     opacity: 1;
  }
  100%{
    -webkit-transform: translateY(-500px);
     transform: translateY(-500px);
     opacity: 0;
  }
}
</style>
<template>
      <div>
        <h1 class=" text-red-600">{{ counts }}</h1>
      <button class="aaa" @click="count"> count</button>
      </div>
</template>

<script setup lang="ts">
import { ref,Ref  } from "vue";
const counts:Ref<number> = ref(0)
  function count() {
    counts.value++;
  }
</script>
<style scoped>
.aaa{
  font-family: 'Bold', sans-serif  ;
  font-weight: 900;
}
</style>

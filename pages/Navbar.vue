<template>
  <div class="w-full h-20 bg-white flex  items-center justify-center">
    <div class="container mx-20 flex justify-between ">
      <img width="186" height="38" src="@/static/img/icon.png" alt="">
      <div class="w-[50%] mt-2">
        <headeerMenu />
      </div>
      <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
        <BaseIcon name="Download"></BaseIcon>Get 30-day Free Trail
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import headeerMenu from '@/components/headeerMenu.vue'
import BaseButton from '~/components/BaseComponents/buttons/BaseButton.vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';
</script>
<style scoped>

</style>

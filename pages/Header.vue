<template>
  <div class="imgHerader">
    <div class="backround flex items-center justify-center">
      <div class="container">
        <div class="flex items-center -mt-3">
          <h1 class="text-[#FF6B35] text-4xl font-bold tracking-wider">WiseSpace</h1>
          <h1 class=" text-white text-4xl font-bold tracking-wider mx-3">for <span class="ml-4">University</span></h1>
        </div>
        <div class="my-3">
          <p class="text-[16px] text-white font-thin tracking-widest w-[40%] ">Learning Management System WiseSpace is a
            powerful and efficient online platform that adapts to the purpose of
            your educational organization. The system is easy to use, saves valuable time of adminstration staff,
            teachers
            and learners by automating the learning process.</p>
        </div>
        <div class="flex gap-2 items-center">
          <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
            <BaseIcon name="Download"></BaseIcon>Get 30-day Free Trail
          </BaseButton>
          <BaseButton name="some" rounded="sm" color="white" size="sm" variant="text"
            class="flex items-center justify-between gap-2">
            <BaseIcon name="Download"></BaseIcon>Explore plotform
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from '~/components/BaseComponents/buttons/BaseButton.vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';
</script>
<style scoped>
.imgHerader {
  background: url("../static/img/headerImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.backround {
  background: linear-gradient(rgba(0, 47, 95, 0.7) 80%, rgb(0, 48, 95));
  width: 100%;
  height: 100%;
}
</style>
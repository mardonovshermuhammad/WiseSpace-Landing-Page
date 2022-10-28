<script setup lang="ts">
import BaseButton from '~/components/BaseComponents/buttons/BaseButton.vue';
import BaseIcon from '~/components/BaseComponents/BaseIcons/BaseIcon.vue';


</script>

<template>
<div class="bg-primary-900 mt-24">
    <div class="flex  md:flex-row  flex-col justify-between md:px-20 md:py-8  md:m-auto px-7 py-4 max-w-[1280px]">
        <div class="text-white md:mb-0  mb-5">
    2022 Wisesoace.uz
   </div>
   <div class="flex md:mb-0  mb-5 ">
    <div class="text-white mr-7">Terms & Conditions  </div>
    <div class="text-white">Privacy & Policy </div>
   </div>
   <div class="flex items-center">
    <div> <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
              <BaseIcon name="Download"></BaseIcon><span class="md:flex hidden">Get 30-day</span> Free Trail
            </BaseButton>
      </div>
      <div> <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
              <BaseIcon name="Download"></BaseIcon><span class="md:flex hidden">Get 30-day</span> Free Trail
            </BaseButton>
      </div>
      <div> <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
              <BaseIcon name="Download"></BaseIcon><span class="md:flex hidden">Get 30-day</span> Free Trail
            </BaseButton>
      </div>
      <div> <BaseButton name="some" rounded="sm" size="sm" color="orange" class="flex items-center justify-between gap-2">
              <BaseIcon name="Download"></BaseIcon><span class="md:flex hidden">Get 30-day</span> Free Trail
            </BaseButton>
      </div>
   </div>
    </div>
</div>

</template>
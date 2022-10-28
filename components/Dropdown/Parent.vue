<script setup lang="ts">
import Dropdown from './Dropdown.vue'
interface arrays {
  name : string
}
const Options: arrays[]  =  [
  {
    name : 'Film'
  },
  {
    name : 'Multfilm'
  },
  {
    name : 'comedy'
  }
]
</script>

<template>
    <div
      class="flex flex-col items-center justify-start p-5 shadow-modalShadow max-w-[520px] w-full m-auto mt-20"
    >
      <h2 class="text-center text-[30px] mb-2">
        Try <span class="text-orangeStyle">WiseSpace</span> now
      </h2>
      <p class="opacity-40 text-sm mb-4 text-black">
        You will have free consultation before getting trall
      </p>
      <div class="flex flex-wrap justify-center">
        <baseInput
          :regex="/([a-zA-Z]{3,30}\s*)+/"
          success-msg="All is good"
          error-msg="text must be Full name"
          label-name="First name*"
          class="max-w-[232px] text-[15px]  mb-6 mr-4  h-11"
        />
        <baseInput
          :regex="/([a-zA-Z]{3,30}\s*)+/"
          success-msg="All is good"
          error-msg="text must be Full name"
          label-name="Last name*"
          class="max-w-[232px] text-[15px]  mb-6   h-11"
        />
        <baseInput
          :regex="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
          success-msg="All is good"
          error-msg="Work email adress*"
          label-name="Work email adress*"
          class="max-w-[232px] text-[15px]  mb-6 mr-4  h-11"
        />
        <Dropdown
          class="max-w-[232px] h-11"
          title="Country*"
          :options="Options"
        />
        <baseInput
          :regex="/^[+]?998[012345789][0-9]{8}$/"
          success-msg="All is good"
          error-msg="text must be Uzb Phone"
          label-name="Phone number*"
          class="max-w-[232px] text-[15px]  mb-6 mr-4  h-11"
        />
        <baseInput
          :regex="/([a-zA-Z]{3,30}\s*)+/"
          success-msg="All is good"
          error-msg="text must be Full name"
          label-name="Job title*"
          class="max-w-[232px] w-full mb-6  h-11 "
        />
        <baseInput
          :regex="/([a-zA-Z]{3,30}\s*)+/"
          success-msg="All is good"
          error-msg="text must be Full name"
          label-name="School/University name*"
          class="max-w-[232px] w-full mb-6 mr-4  h-11 "
        />
        <Dropdown
          class="max-w-[232px] h-11"
          title="Organisation type*"
          :options="Options"
        />
      </div>
      <textarea
        class="w-full mb-7 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
        placeholder="Message"
      ></textarea>
      <div class="flex justify-center w-full">
        <button class="py-2 px-6 mr-5 border border-[#E3E3E3] text-[#4F4F4F] rounded-md">
          Cancel
        </button>
        <button class="py-2 px-6  bg-bgBtn text-white rounded-md">
          Send
        </button>
      </div>
    </div>
</template>
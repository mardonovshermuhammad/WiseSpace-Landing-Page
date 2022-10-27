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
    <div>
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
        <input
          class=" max-w-[232px] text-[15px] w-full mb-4 mr-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="First name*"
          type="text"
        />
        <input
          class="max-w-[232px] w-full mb-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="Last name*"
          type="text"
        />
        <input
          class="max-w-[232px] w-full mb-4 mr-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="Work email adress*"
          type="text"
        />
        <Dropdown class="max-w-[232px]" title="Country*" :options="Options"   />
        <input
          class="max-w-[232px] w-full mb-4 mr-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="Phone number*"
          type="text"
        />
        <input
          class="max-w-[232px] w-full mb-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="Job title*"
          type="text"
        />
        <input
          class="max-w-[232px] w-full mb-4 mr-4 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none"
          placeholder="School/University name*"
          type="text"
        />
        <Dropdown class="max-w-[232px]" title="Organisation type*" :options="Options"   />
      </div>
      <textarea class="w-full mb-7 px-6 py-[11px] border border-[#E3E3E3] rounded outline-none " placeholder="Message"></textarea>
      <button
        class="mr-auto ml-auto py-3 px-10 bg-bgBtn text-white rounded-[8px]"
      >
        Send request
      </button>
    </div> 
    </div>
</template>
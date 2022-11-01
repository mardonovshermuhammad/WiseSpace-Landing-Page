<script setup lang="ts">
import{ ref, Ref } from "vue"
// name: string, to:string
const menu = ref<any[]>([
    {name: 'Products', to: '1'},
    {name: 'Features', to: '2'},
    {name: 'Pricing', to: '3'},
    {name: 'Clients', to: '4'},
    {name: 'Resources', to: '5'},
    {name: 'Contacts', to: '6'},
    ])
</script>
<template>
    <div>
     <ul class=" flex justify-between ">
        <li class=" text-[#002F5F] text-[16px] font-medium cursor-pointer duration-300  hover:text-[#FF6B35]"
            v-for="(user,i) in menu" :key="i">
        <a :href="`#${user.name}`"> {{ user.name }}</a>
        </li>
     </ul>
    </div>
</template>
<style scoped>
</style>
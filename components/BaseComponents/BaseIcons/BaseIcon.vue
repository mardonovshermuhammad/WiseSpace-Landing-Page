<template>
    <icons />
</template>
  
<script setup lang="ts">
import { defineAsyncComponent, PropType } from 'vue'
const props = defineProps({
    name: {
        type: String as PropType<string>,
        required: true,
        validate: (value: any) => {
            if (typeof value !== 'string') {
                return 'You should pass string type props'
            }
        }
    }
})
const icons = defineAsyncComponent(() => import(`./icons/${props.name}.vue`))
</script>
  
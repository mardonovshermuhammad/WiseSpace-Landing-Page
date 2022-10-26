<script lang="ts" setup>
import { PropType, toRefs } from 'vue'
const props = defineProps({
  icon: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  rounded: {
    type: String as PropType<string>,
    default: 'lg',
    validator: (value: string) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  size: {
    type: String as PropType<string>,
    default: 'md',
    validator: (val: string) => ['sm', 'md', 'lg'].includes(val)
  },
  color: {
    type: String as PropType<string>,
    default: 'orange',
    validator: (value: string) =>
      ['orange', 'primary', 'white'].includes(value)
  },
  variant: {
    type: String as PropType<string>,
    default: 'default',
    validator: (value: string) => ['default', 'text'].includes(value)
  }
})
toRefs(props)
const classGenerator = () => {
  const baseClass: string[] = [
    props.loading ? 'disabled:cursor-progress' : 'disabled:cursor-not-allowed',
    'disabled:opacity-70 transition-all duration-300 transform disabled:scale-100 active:scale-95 font-medium'
  ]
  const icon = props.icon
  const sizeSm = props.size === 'sm'
  const sizeMd = props.size === 'md'
  const sizeLg = props.size === 'lg'
  const roundedSm = props.rounded === 'sm'
  const roundedMd = props.rounded === 'md'
  const roundedLg = props.rounded === 'lg'
  const roundedFull = props.rounded === 'full'
  const variantDefault = props.variant === 'default'
  const variantText = props.variant === 'text'
  const variantTextClass =
    'border-2 ring-0 duration-200'
  const shadowClass = `shadow-sm hover:shadow-md`
  if (sizeSm) {
    baseClass.push(
      icon
        ? 'p-1'
        : 'xl:py-1.5 lg:py-1.5 md:py-1.5 sm:py-1.5 py-1.5 xl:px-5 lg:px-4 md:px-3 sm:px-2 px-2 xl:text-base lg:text-base md:text-base sm:text-sm text-xs xl:min-w-[140px] lg:min-w-[110px] md:min-w-[100px] sm:min-w-[100px] min-w-[80px] leading-3'
    )
  }
  if (sizeMd) {
    baseClass.push(
      icon
        ? 'p-2'
        : 'xl:py-1.5 lg:py-1.5 md:py-1.5 sm:py-1.5 py-1.5 xl:px-8 lg:px-8 md:px-6 sm:px-5 px-5 xl:text-base lg:text-base md:text-base sm:text-sm text-xs xl:min-w-[150px] lg:min-w-[120px] md:min-w-[120px] sm:min-w-[100px] min-w-[80px] leading-3'
    )
  }
  if (sizeLg) {
    baseClass.push(
      icon
        ? 'p-4'
        : 'xl:py-3 lg:py-2.5 md:py-2 sm:py-1.5 py-1 xl:px-12 md:px-12 sm:px-10 px-10 xl:text-lg lg:text-base md:text-base sm:text-sm text-xs xl:min-w-[160px] lg:min-w-[140px] md:min-w-[120px] sm:min-w-[100px] min-w-[80px] leading-3'
    )
  }
  if (roundedSm) {
    baseClass.push('xl:rounded-md lg:rounded-md md:rounded sm:rounded rounded')
  }
  if (roundedMd) {
    baseClass.push('xl:rounded-lg lg:rounded-md md:rounded-sm sm:rounded rounded')
  }
  if (roundedLg) {
    baseClass.push('xl:rounded-xl lg:rounded-md md:rounded-md sm:rounded-md rounded-md')
  }
  if (roundedFull) {
    baseClass.push('rounded-full')
  }
  if (props.color === 'orange') {
    const baseColor = [
      shadowClass,
      'bg-orange-500',
      variantDefault ? 'text-white' : 'text-orange-500'
    ]
    if (variantText) {
      baseClass.push(
        ...[
          'text-orange-500 hover:bg-orange-500 hover:text-white border-orange-500',
          variantTextClass,

        ]
      )
    }
    if (variantDefault) {
      baseClass.push(...[...baseColor,])
    }
  }
  if (props.color === 'primary') {
    const baseColor = [
      shadowClass,
      'bg-primary-900',
      variantDefault ? 'text-white' : 'text-primary-900'
    ]
    if (variantText) {
      baseClass.push(
        ...['text-primary-900 hover:bg-primary-900 hover:text-white border-primary-900', variantTextClass,]
      )
    }
    if (variantDefault) {
      baseClass.push(...[...baseColor,])
    }
  }
  if (props.color === 'white') {
    const baseColor = [
      shadowClass,
      'bg-white',
      variantDefault ? 'text-black' : 'text-white'
    ]
    if (variantText) {
      baseClass.push(
        ...[
          'text-white border-white-900',
          variantTextClass,

        ]
      )
    }
    if (variantDefault) {
      baseClass.push(...[...baseColor,])
    }
  }
  if (props.color === 'dark-orange') {
    const baseColor = [
      shadowClass,
      'bg-orange-900',
      variantDefault ? 'text-white' : 'text-orange-900'
    ]
    if (variantText) {
      baseClass.push(
        ...[
          'text-orange-900 hover:bg-orange-900 hover:text-white border-orange-900',
          variantTextClass,

        ]
      )
    }
    if (variantDefault) {
      baseClass.push(...[...baseColor,])
    }
  }
  return baseClass
}
</script>
<template>
  <button :class="classGenerator()">
    <svg v-if="loading" :class="['animate-spin h-5 w-5 inline-block', variant === 'elevate' ? 'text-white-900' : '']"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

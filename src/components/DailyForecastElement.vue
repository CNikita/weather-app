<script setup>
import { formatTemp, formatDate } from '@/helpers/format'

const props = defineProps({
  forecast: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-5 justify-between pb-1">
    <div class="w-36 ">{{ formatDate(props.forecast.dt) }}</div>
    <div class="w-60 text-center">{{ props.forecast.weather[0].description }}</div>
    <div class="w-20 text-center">{{ formatTemp(props.forecast.main.temp) }}</div>
    <div class="w-20 text-center">{{ Math.round(props.forecast.wind.speed) }} м/с</div>
  </div>
</template>

<style scoped lang="scss"></style>

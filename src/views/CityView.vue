<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api'
import DailyForecastElement from '@/components/DailyForecastElement.vue'
import FavoriteBtn from '@/components/FavoriteBtn.vue'
import { formatTemp } from '@/helpers/format'

const route = useRoute()
const cityName = computed(() => route.params.CITY_NAME)

const currentData = ref({})
const forecastData = ref({})

const loadWeather = (cityName) => {
  api.getWeatherByCityName(cityName).then(({ data }) => {
    currentData.value = data
  })
}
const loadForecast = (cityName) => {
  api.getForecastByCityName(cityName).then(({ data }) => {
    forecastData.value = data
  })
}

onMounted(() => {
  loadWeather(cityName.value)
  loadForecast(cityName.value)
})

watch(cityName, (newValue) => {
  if (newValue) {
    loadWeather(newValue)
    loadForecast(newValue)
  }
})
</script>

<template>
  <div v-if="currentData.name" class="flex flex-col items-center px-6">
    <div class="flex gap-2">
      <h2 class="pb-2 text-2xl font-bold">{{ currentData.name }}</h2>
      <FavoriteBtn :city-name="cityName" />
    </div>
    <div class="flex flex-col items-center">
      <div class="pt-2 text-5xl">{{ formatTemp(currentData.main?.temp) }}</div>
      <div class="pt-2">По ощущению {{ formatTemp(currentData.main?.feels_like) }}</div>
      <div class="pt-2 font-bold">{{ currentData.weather?.[0].description }}</div>

      <div class="flex gap-4 pt-2">
        <div class="flex flex-col items-center">
          <span>Ветер</span>
          {{ Math.round(currentData.wind?.speed) }} м/с
        </div>
        <div class="flex flex-col items-center">
          <span>Давление</span>
          {{ Math.round(currentData.main?.pressure * 0.75) }} мм рт. ст.
        </div>
        <div class="flex flex-col items-center">
          <span>Влажность</span>
          {{ currentData.main?.humidity }}%
        </div>
      </div>
    </div>
    <div v-if="forecastData.city" class="pt-5 pb-2">
      <h3 class="font-bold text-center text-slate-300">Прогноз на ближайшие 5 дней</h3>
      <div class="flex gap-5 justify-between pt-1 mb-2">
        <div class="w-36 text-center font-bold">Дата</div>
        <div class="w-60 text-center font-bold">Общие условия</div>
        <div class="w-20 text-center font-bold">Температура</div>
        <div class="w-20 text-center font-bold">Ветер</div>
      </div>
      <div class="forecast-items">
        <DailyForecastElement v-for="item in forecastData.list" :key="item.dt" :forecast="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.forecast-items {
  max-height: 50vh;
  overflow: scroll;
  background: #282828;
  padding: 5px;
  border-radius: 5px;
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const cityName = ref()

const searchCoordinatesByCityName = () => {
  api.getCoordinatesByCityName(cityName.value).then(({ data }) => {
    const cityCoordinates = data[0]
    if (!cityCoordinates) {
      router.push({ name: 'Home' })
      alert('город не найден')
      return
    } else {
      router.push(`/weather-${cityCoordinates.name}`)
    }
  })
}

onMounted(() => {
  if (route.params.CITY_NAME) {
    cityName.value = route.params.CITY_NAME
    searchCoordinatesByCityName()
  }
})
</script>

<template>
  <div class="pt-2">
    <form class="flex gap-2" @submit.prevent="searchCoordinatesByCityName">
      <input
        class="border w-60 text-black px-2 py-1 rounded"
        type="text"
        v-model="cityName"
        placeholder="Введите название города"
      />
      <button class="border border-slate-300 rounded p-2" type="submit">Поиск</button>
    </form>
  </div>
</template>

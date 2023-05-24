<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import FavoriteBtn from '@/components/FavoriteBtn.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const favoriteCities = computed(() => store.getters.getFavoriteCities)

const goToCityPage = (cityName) => {
  router.push(`/weather-${cityName}`)
}
</script>

<template>
  <div class="flex flex-col items-center p-6">
    <h2>Избранное</h2>
    <ul v-if="favoriteCities.size" class="flex flex-col">
      <li v-for="city in favoriteCities" :key="city" class="flex m-1 gap-5 items-center">
        <FavoriteBtn :city-name="city" />
        <div class="cursor-pointer p-1" @click="goToCityPage(city)">
          {{ city }}
        </div>
      </li>
    </ul>
    <div v-else>В Избранном пока ничего нет :(</div>
  </div>
</template>

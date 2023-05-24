<script setup>
import StarIcon from '@/components/icons/IconStar.vue'
import StarFillIcon from '@/components/icons/IconStarFill.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  cityName: {
    type: String,
    default: null
  }
})

const favoriteCities = computed(() => store.getters.getFavoriteCities)
const isCityInFavorites = computed(() => favoriteCities.value.has(props.cityName))

const addCityToFavorites = () => store.dispatch('addCityToFavorites', props.cityName)
const removeCityFromFavorites = () => store.dispatch('removeCityFromFavorites', props.cityName)
</script>

<template>
  <div class="cursor-pointer p-1">
    <StarFillIcon v-if="isCityInFavorites" @click="removeCityFromFavorites" />
    <StarIcon v-else @click="addCityToFavorites" />
  </div>
</template>

<style scoped></style>

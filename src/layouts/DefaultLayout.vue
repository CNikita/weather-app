<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'
import { onMounted } from 'vue'

const store = useStore()
const getSavedFavoriteCities = () => store.dispatch('getSavedFavoriteCities')

onMounted(() => getSavedFavoriteCities())
</script>

<template>
  <header>
    <div class="w-full p-6">
      <RouterLink :to="{ name: 'Home' }">
        <h1 class="text-2xl font-bold">Weather App</h1>
      </RouterLink>
      <SearchBar />
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss"></style>

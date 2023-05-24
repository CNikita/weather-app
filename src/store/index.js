import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    favoriteCities: new Set()
  },
  getters: {
    getFavoriteCities: (state) => state.favoriteCities,
  },
  mutations: {
    ADD_CITY_TO_FAVORITES(state, cityName) {
      state.favoriteCities.add(cityName)
    },
    REMOVE_CITY_FROM_FAVORITES(state, cityName) {
      state.favoriteCities.delete(cityName)
    }
  },
  actions: {
    addCityToFavorites({ commit, state }, cityName) {
      commit('ADD_CITY_TO_FAVORITES', cityName)
      localStorage.setItem('favoriteCities', JSON.stringify(Array.from(state.favoriteCities)));
    },
    removeCityFromFavorites({ commit, state }, cityName) {
      commit('REMOVE_CITY_FROM_FAVORITES', cityName)
      localStorage.setItem('favoriteCities', JSON.stringify(Array.from(state.favoriteCities)));
    },
    getSavedFavoriteCities({ commit }) {
      const savedFavoriteCities = JSON.parse(localStorage.getItem('favoriteCities'));
      savedFavoriteCities?.forEach(element => commit('ADD_CITY_TO_FAVORITES', element));
    }
  },
});

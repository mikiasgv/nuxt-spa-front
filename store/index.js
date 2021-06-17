export const state = () => ({ markersData: [] });


export const mutations = {
  SET_MARKERS: (state, data) => {
    state.markersData = data;
  }
}


export const actions = {
  async getMarkersData({ state, commit }) {
    try {
      await this.$axios.get('api/markers')
            .then(response => {
              console.log(response.data);
              commit('SET_MARKERS', response.data);
            });

    }
    catch(err) {
      console.error(err);
    }

} }

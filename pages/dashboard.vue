<template>
  <div>
    <div class="w-full h-screen z-0" ref="map"></div>
  </div>
</template>
<script>
export default {
  middleware: ['auth', 'verified'],

  async mounted() {
    await this.$axios.get('api/dashboard');
    this.$maps.showMap(this.$refs.map, 33.749149, -90.71329);
  },
}
</script>
<style>

</style>

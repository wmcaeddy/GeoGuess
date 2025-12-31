<template>
  <div id="mly" class="mapillary-viewer"></div>
</template>

<script>
import { Viewer } from 'mapillary-js';

export default {
  name: 'MapillaryView',
  props: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mly: null,
    };
  },
  mounted() {
    this.initMapillary();
  },
  methods: {
    initMapillary() {
      if (this.mly) return;

      this.mly = new Viewer({
        accessToken: process.env.VUE_APP_MAPILLARY_CLIENT_ID,
        container: 'mly',
        component: { cover: false },
      });

      this.mly.on('image', (event) => {
        this.$emit('moved', {
          lat: event.image.lngLat.lat,
          lng: event.image.lngLat.lng,
        });
      });

      // Initial move (this would need a real image key in a real scenario,
      // but for now we just verify initialization)
      // In a real implementation we might need to search for an image close to lat/lng first
    },
  },
  beforeDestroy() {
    if (this.mly) {
      this.mly.remove();
    }
  },
};
</script>

<style scoped>
.mapillary-viewer {
  width: 100%;
  height: 100%;
}
</style>

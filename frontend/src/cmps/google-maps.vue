<template>
  <GmapMap
    ref="gMap"
    :center="pos"
    :zoom="16"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="markerClicked(m.position)"
    />
      <!-- @click="center = m.position" -->
  </GmapMap>
</template>


<script>
export default {
  props:{
    pos:{
      type: Object
    }
  },
  data() {
    return {
      markers: [
        { position: { lat: 32.08503, lng: 34.78376 } },
        { position: { lat: 32.0156054535648, lng: 34.78855327233644 } },
        { position: { lat: 32.07588, lng: 34.81055 } },
      ],
    };
  },
  methods:{
    markerClicked(pos){
      this.$refs.gMap.panTo(pos)
    }
  }
};
</script>
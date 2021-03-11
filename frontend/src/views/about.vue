<template>
  <div class="about">
    <p>Toys (in & out stock) per Type</p>
    <toy-type-chart class="chart" :data="chartData" v-if="chartData" />
    <p>Average price per Type</p>
    <toy-price-chart
      class="chart"
      :data="chartPriceData"
      v-if="chartPriceData"
    />
    <google-maps class="map" :pos="pos" />
    <section class="go-to-btns">
      <el-button type="info" plain @click="setPos('Tel-Aviv')"
        >Tel-Aviv</el-button
      >
      <el-button type="info" plain @click="setPos('Holon')">Holon</el-button>
      <el-button type="info" plain @click="setPos('Giv\'atayim')"
        >Giv'atayim</el-button
      >
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import toyTypeChart from "../cmps/toyTypeChart.vue";
import toyPriceChart from "../cmps/toyPriceChart.vue";
import googleMaps from "../cmps/google-maps.vue";
// import { eventBus } from '../service/eventBus.service.js'

export default {
  name: "about",
  data() {
    return {
      pos: { lat: 32.08503, lng: 34.78376 },
      chartData: null,
      chartPriceData: null,
    };
  },
  methods: {
    setPos(city) {
      if (city === "Tel-Aviv") {
        this.pos.lat = 32.08503;
        this.pos.lng = 34.78376;
      } else if (city === "Holon") {
        this.pos.lat = 32.015605453;
        this.pos.lng = 34.788553;
      } else if (city === "Giv'atayim") {
        this.pos.lat = 32.07588;
        this.pos.lng = 34.81055;
      }
    },
  },
  created() {
    this.$store.dispatch("getAllToys").then((toys) => {
      this.chartData = toys.reduce((acc, toy) => {
        if (!acc[toy.type]) acc[toy.type] = 0;
        acc[toy.type]++;
        return acc;
      }, {});

      const pricesSum = toys.reduce((acc, toy) => {
        if (!acc[toy.type]) acc[toy.type] = 0;
        acc[toy.type] += toy.price;
        return acc;
      }, {});

      const types = Object.keys(this.chartData);
      this.chartPriceData = types.reduce((acc, type) => {
        acc[type] = pricesSum[type] / this.chartData[type];
        return acc;
      }, {});
    });
  },
  components: {
    toyTypeChart,
    toyPriceChart,
    googleMaps,
  },
};
</script>

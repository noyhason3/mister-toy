<template>
  <div class="app-container" v-if="toys">
    <toy-filter @filterBy="setFilterBy" @sortBy="setSortBy" />
    <toy-list :toys="toys" />

  </div>
</template>

<script>
// @ is an alias to /src
import toyList from "@/cmps/toyList.vue";
import toyFilter from "../cmps/toyFilter.vue";

// import ToyFilter from '../cmps/toyFilter.vue'

export default {
  name: "toyApp",
  data() {
    return {};
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay;
    },
  },
  methods: {
    setFilterBy(filterBy) {
      this.$store.commit({ type: "setFilterBy", filterBy });
      this.$store.dispatch({ type: "loadToys" });
    },
    setSortBy(sortBy){
      this.$store.commit({ type: "setSortBy", sortBy });
      this.$store.dispatch({ type: "loadToys" });
    }
  },
  created() {
    // this.$store.dispatch({ type: "loadToys" });
  },
  components: {
    toyList,
    toyFilter,

  },
};
</script>


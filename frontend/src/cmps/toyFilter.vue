<template>
  <section class="toy-filter">
    <el-input class="search input"
      type="search"
      placeholder="search by name"
      v-model="filterBy.name"
      @input="setFilterBy"
    />

    <datalist  class=" input" id="sortBy">
      <option value="Name" />
      <option value="Price" />
    </datalist>

    <el-select v-model="filterBy.type" placeholder="Type"  @change="setFilterBy">
      <el-option
        v-for="item in options.types"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select  class=" input" v-model="filterBy.stock" placeholder="Stock"  @change="setFilterBy">
      <el-option
        v-for="item in options.stocks"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- <input
      type="search"
      list="sortBy"
      v-model="sortBy"
      @change="setSortBy"
    /> -->
  </section>
</template>

<script>
// @ is an alias to /src
// import toyPreview from '@/cmps/toyPreview.vue'

export default {
  data() {
    return {
      sortBy: "Name",
      options: {
        types: [
          {
            value: "All",
            label: "All",
          },
          {
            value: "Funny",
            label: "Funny",
          },
          {
            value: "Adult",
            label: "Adult",
          },
        ],
        stocks: [
          {
            value: "All",
            label: "All",
          },
          {
            value: "Stock",
            label: "Stock",
          },
          {
            value: "Out",
            label: "Out",
          },
        ],
      },
    };
  },
  computed: {
    filterBy(){
      return this.$store.getters.filterBy
    }
  },
  methods: {
    setFilterBy() {
      console.log(this.filterBy);
      this.$emit("filterBy", this.filterBy);
    },
    setSortBy() {
      this.$emit("sortBy", this.sortBy);
    },
  },
  created() {},
  components: {},
};
</script>


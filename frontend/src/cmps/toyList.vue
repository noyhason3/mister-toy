<template >
  <!-- <ul>
        <li class="toy-list">
            <toy-preview  v-for="toy in toys" :key="toy._id" :toy="toy" />
        </li>
        <router-link to="/toy/edit">Add Toy</router-link>
  </ul> -->

  <section class="toy-list">
    <toy-preview
      :span="8"
      v-for="(toy) in toys"
      :key="toy._id"
      :toy="toy"
    />
      <!-- :offset="index > 0 ? 2 : 0" -->
  </section>
</template>

<script>
// @ is an alias to /src
import toyPreview from "@/cmps/toyPreview.vue";

export default {
  name: "toyList",
  props: ["toys"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  components: {
    toyPreview,
  },
};
</script>


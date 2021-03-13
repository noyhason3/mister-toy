<template>
  <div v-if="toy" class="toy-details" style="padding: 14px">
    <p>Toy: {{ toy.name }}</p>
    <p>Price: {{ toy.price }}$</p>
    <p>Type: {{ toy.type }}</p>

    <p>reviews: <toyReviews :toy="toy" /></p>
      <el-button type="success" @click="showAddSection">Add Review</el-button>

     <form @submit.prevent="addReview" v-if="isAddSectionShown">
      review:
      <input
        type="text"
        placeholder="insert your text here..."
        v-model="review.txt"
      />
      <button type="success">Save</button>
     </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import helloWorld from '@/cmps/helloWorld.vue'
import { toyService } from "../service/toy.service.js";
import toyReviews from '../cmps/toyReviews.vue'

export default {
  name: "toyDetails",
  data() {
    return {
      toy: null,
      review: {txt:''},
      isAddSectionShown:false
    };
  },
  computed: {
    toyId() {
      return this.$route.params.toyId;
    },
  },
  methods: {
    addReview(){
      this.$store.dispatch({type:'addReview',toyId: this.toyId, reviewToAdd: this.review})
    },
    showAddSection(){
      this.isAddSectionShown = true
    }
  },
  created() {
    return toyService.getById(this.toyId).then((toy) => (this.toy = toy));
  },
  components: {
    toyReviews
  },
};
</script>


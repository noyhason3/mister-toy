<template>
  <!-- <div class="toy-preview">
    <p>Toy: {{toy.name}}</p>
     <p>Price: {{toy.price}}$</p>
     <p>Type: {{toy.type}}</p>
     <p><button @click="removeToy(toy._id)">X</button></p>
     <p><router-link :to="'/toy/edit/'+toy._id" >Edit</router-link></p>
     --------------------
  </div> -->

  <el-card :body-style="{ padding: '0px' }">
    <img :src="require(`@/assets/img/toy1.jpg`)" class="image"   />
    <div style="padding: 14px">
      <p>Toy: {{ toy.name }}</p>
      <p>Price: {{ toy.price }}$</p>
      <p>Type: {{ toy.type }}</p>




      <el-button v-if="loggedinUser && loggedinUser.isAdmin" class="removeBtn" type="info" icon="el-icon-delete"  plain @click="removeToy(toy._id)" />
      <div class="bottom clearfix">
        <time class="time">{{ toy.createdAt }}</time>
        <router-link  v-if="loggedinUser && loggedinUser.isAdmin" :to="'/toy/edit/' + toy._id" type="text" class="button"
          ><el-button type="success" plain>Edit</el-button></router-link>

        <router-link :to="'/toy/details/' + toy._id" type="text" class="button"
          ><el-button type="success" plain>Details</el-button></router-link>
      </div>
    </div>
  </el-card>
</template>

<script>


export default {
  name: "toyPreview",
  props: ["toy"],
  data() {
    return {
      loggedinUser:null
    };
  },
  computed: {},
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId });
    },
    // loggedinUser() {
    //   this.$store.getters.loggedinUser
    // },
  },
  created() {
    this.loggedinUser = this.$store.getters.loggedinUser
  
  },
  components: {
  },
};
</script>


<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/toy">Toys</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link>
      <user-msg />
    </nav>

    <!-- <section v-if="loggedinUser" class="hello-mister">
                <h1>hello mister: {{loggedinUser.fullname}}</h1>
                <button @click="logout">logout..</button>
            </section> -->

    <router-view class="main-layout" />
  </div>
</template>

<script>

import userMsg from './cmps/user-msg.vue'

export default {
  data() {
    return {};
  },
  // computed:{
  //   loggedinUser(){
  //     return this.$store.getters.loggedinUser
  //   }
  // },
  // methods:{
  //   logout(){
  //     this.$store.dispatch({ type: "logout" });

  //   }
  // },
  created() {
    this.$store.dispatch({ type: "loadToys" });
    this.$store.commit({ type: "setLoggedinUser" });
  },
  components:{
    userMsg
  }
};
</script>



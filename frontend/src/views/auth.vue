<template>
  <section class="auth">
    <section v-if="loggedinUser" class="hello-mister">
      <h1>hello mister: {{ loggedinUser.fullname }}</h1>
      <button @click="logout">logout..</button>
    </section>

    <section v-if="!isSignupOpen && !loggedinUser" class="login" >
      <h1>Hello Guest!</h1>
      <form @submit.prevent="login">
        <input
          type="text"
          placeholder="username"
          v-model="credentials.username"
        />
        <input
          type="password"
          placeholder="password"
          v-model="credentials.password"
        />
        <button>Go!</button>

        <p>Don't have a user yet? <el-button @click="openSignup"> sign up!</el-button></p>
      </form>


    </section>
    <section  v-if="isSignupOpen && !loggedinUser" class="signup">
      <h1>Signup!</h1>
      <form @submit.prevent="signup">
        <input type="text" placeholder="fullname" v-model="newUser.fullname" />
        <input type="text" placeholder="username" v-model="newUser.username" />
        <input
          type="password"
          placeholder="password"
          v-model="newUser.password"
        />
        <button>Go!</button>

        <el-button @click="closeSignup"> 	&#8592; Back </el-button>

      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newUser: { fullname: "", username: "", password: "" },
      credentials: { username: "", password: "" },
      isSignupOpen:false
    };
  },
  computed: {
    loggedinUser() {
        console.log(this.$store.getters.loggedinUser);
      return this.$store.getters.loggedinUser;
    },
    // credentials(){
    //     t
    // }
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout" });
    },
    login() {
      this.$store.dispatch({ type: "login", credentials: this.credentials });
      // .then(user=>this.loggedinUser)
    },
    signup() {
      this.$store
        .dispatch({ type: "signup", newUser: this.newUser })
        .then(()=>this.$$store.getters.setLoggedinUser);
    },
    openSignup(){
      this.isSignupOpen = true
    },
    closeSignup(){
      this.isSignupOpen = false
    }
  },
  created() {
    // this.loggedinUser
  },
};
</script>

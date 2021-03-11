<template>
  <div class="container ">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/toy">Toys</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view class="main-layout" />
  </div>
</template>

<script>
export default {
    data(){
      return{

      }
    },
    created(){
          this.$store.dispatch({ type: "loadToys" });
    }
}

</script>



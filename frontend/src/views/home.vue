<template>
  <div class="home">
    <h1>Welcome to Your Joy & Fun Place!</h1>
    <h1>Where dreams are coming true.. &#x2764; </h1>
    <img class="home-img" src="../assets/img/home-img.jpg">
    <!-- <h1>What are you waiting for? <br>Let's start live your dream</h1> -->
  </div>
</template>

<script>
// @ is an alias to /src
import helloWorld from '@/cmps/helloWorld.vue'

export default {
  name: 'home',
  components: {
    helloWorld
  }
  
}
</script>


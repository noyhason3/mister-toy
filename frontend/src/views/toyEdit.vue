<template>
  <div class="toy-edit" v-if="toyToEdit">
    <form @submit="saveToy">
   Toy name: <input type="text" placeholder="name" v-model="toyToEdit.name" />
   Toy type: <input type="text" placeholder="type" v-model="toyToEdit.type"/>
    Toy Price: <input type="numbur" placeholder="price" v-model="toyToEdit.price"/>
    <button type="success">Save</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { toyService } from '../service/toy.service.js'

export default {
  name: 'toyEdit',
  data(){
      return {
        toyToEdit: null
      }
  },
  computed:{
    toyId(){
      return this.$route.params.toyId
    }
    },
  methods:{
    saveToy(){
        this.$store.dispatch({type:'saveToy', toyToSave : this.toyToEdit})  
          .then(()=>{
            this.$router.push('/toy')
          })
    }
  },
  created(){
      if (this.toyId){
        // DEEP COPY HERE
        return toyService.getById(this.toyId)
          .then(toy=>this.toyToEdit=toy)
      } else {
        this.toyToEdit = toyService.getEmptyToy()
    }
  },
  components: {
    // helloWorld
  }
  
}
</script>


<template>
  <div id="app">

      <load-ing v-if="isLoad" > </load-ing>
    <nav-bar > </nav-bar>

    <router-view @loaded="changeLoad"></router-view>



  </div>
</template>

<script>
  import navBar from '@/components/content/navbar/navbaruse'
  import loadIng from '@/views/loading/loading'
export default {
  name: 'App',
    watch:{
      $route(to,from){
          this.$router.push(to.path)
      }
    },
  components:{
    navBar,
    loadIng,
  },
    computed:{


    },
  data(){
    return {
      isLoad:true
    }
  },
  methods:{
    changeLoad(){
      this.isLoad=false

    },

  },
  created() {

  }

}
</script>

<style>
@import "assets/css/base.css";
</style>

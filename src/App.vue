<template>
  <div id="app">
    <load-ing v-if="isLoad"/>

    <nav-bar > </nav-bar>

    <router-view @loaded="isLoad=false"></router-view>

  </div>
</template>

<script>
  import navBar from '@/components/content/navbar/navbaruse'
  import loadIng from '@/views/loading/loading'

export default {
  name: 'App',
  components:{
    navBar,
    loadIng,
  },
  data(){
    return {
      isLoad:true
    }
  },
  methods:{
    changeLoad(){
      this.isLoad=false
      console.log(this.isLoad);
    }
  }

}
</script>

<style>
@import "assets/css/base.css";
</style>

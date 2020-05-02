<template>
  <div id="app">
    <nav-bar/>

    <router-view></router-view>


  </div>
</template>

<script>
  import navBar from '@/components/content/navbar/navbaruse'

export default {
  name: 'App',
  components:{
    navBar,
  }

}
</script>

<style>
@import "assets/css/base.css";
</style>

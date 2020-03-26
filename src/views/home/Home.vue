<template>
  <div class="home">
    <nav-search/>
    <home-swiper />
    this is a home page
  </div>
</template>

<script>
import NavSearch from '../../components/content/navSearch/NavSearch'

import {
  HomeSwiper
} from './childCampus'

import axios from 'axios'

export default {
  name: 'Home',
  components:{
    NavSearch,
    HomeSwiper
  },
  data() { 
    return {
      value:""
    }
  },
  mounted() {
    axios.get('/user/userinfo')
    .then(({data})=>{
      console.log(data);
    });
  }
 }
</script>

<style>
</style>
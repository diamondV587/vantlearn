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
    axios.get('/mock/news').then(res => {
        console.log(res.data)
    })
  }
 }
</script>

<style>
</style>
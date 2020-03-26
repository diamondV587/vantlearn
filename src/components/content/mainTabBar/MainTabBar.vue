<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="tohome">首页</van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="toProfile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>

export default {
  name: 'MainTabBar',
  data() { 
    return {
      active:0
    }
  },
  methods:{
    tohome() {
      this.$router.push('/home')
    },
    toProfile() {
      this.$router.push('/profile')
    }
  }
 }
</script>
<template>
  <van-search v-model="value" 
              shape="round" 
              background="#1989fa" 
              placeholder="请输入搜索关键词"
              @search="btnSearch"
              @cancel="btnCancel" />
</template>

<script>
export default {
  name: 'NavSearch',
  data() { 
    return {
      value:""
    }
  },
  methods:{
    btnSearch() {
      console.log('----搜索----')
    },
    btnCancel() {
      this.value = ''
    }
  }
 }
</script>

<style>
</style>
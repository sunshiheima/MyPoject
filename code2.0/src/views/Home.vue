<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import {getListByCode}from "@/api/test.js"
export default {
  name: 'Home',
  components: {
  },
  created(){
   
  },
  mounted(){
     getListByCode('002').then(res=>{
      console.log(res.data)
    })
  }
}
</script>

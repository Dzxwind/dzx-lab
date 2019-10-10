<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="欢迎来到Dzxwind的智障实验室"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<template>
    <StackLayout id="app">
        <Image src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </StackLayout>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
    #app {
        text-align: center;
        margin-top: 60px;
    }
</style>

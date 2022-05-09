<script>
import Navbar from './components/Navbar.vue';
import Presentation from './components/Presentation.vue'

export default{
    name: "App",
    components: { Navbar, Presentation }
}
</script>

<template>
  <div class="container">
    <Navbar/>
    <Presentation/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Share+Tech+Mono&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    color: white;
    background-color: #121212;
}
</style>
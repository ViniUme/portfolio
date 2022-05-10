<template>
  <div class="container">
    <Navbar/>
    <Presentation/>
    <About/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Presentation from './components/Presentation.vue'
import About from './components/About.vue'

export default{
    name: "App",
    components: { Navbar, Presentation, About }
}
</script>

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
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
}
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
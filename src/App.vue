<template>
  <div class="container">
    <Navbar/>
    <Presentation/>
    <About id="about"/>
    <Info/>
    <Projects id="projects"/>
    <Skills id="skills"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Presentation from './components/Presentation.vue';
import About from './components/About.vue';
import Info from './components/Info.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue'

export default{
    name: "App",
    components: { Navbar, Presentation, About, Info, Projects, Skills }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Share+Tech+Mono&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body, html{
    color: white;
    background-color: #121212;
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
    scroll-behavior: smooth;
}
body::-webkit-scrollbar{
    width: 7px;
  }
  
  body::-webkit-scrollbar-track{
    background: #212121;
  }
  
  body::-webkit-scrollbar-thumb{
    background-color: #00fa47;
    border-radius: 20px;
  }
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
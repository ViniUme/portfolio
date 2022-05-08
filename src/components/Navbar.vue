<template>
<nav>
    <ul>
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Serviços</li>
        <li>Minhas Skills</li>
    </ul>
</nav>    
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    color: white;
}
nav{
    width: 100vw;
    height: 100px;
    background-color: black;
    text-align: center;
}
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}
</style>
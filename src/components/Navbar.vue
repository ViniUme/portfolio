<template>
<nav>
    <h1 class="portfolio">Portfólio</h1>
    <ul>
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Serviços</li>
        <li>Minhas Skills</li>
        <div class="navbar_menu">
            menu
        </div>
    </ul>
</nav>    
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
nav{
    width: 100%;
    height: 70px;
    background-color: #212121;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.portfolio{
    font-size: 1.7rem;
}
ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 30px;
}
li{
    height: max-content;
    font-size: 1.2rem;
    letter-spacing: -0.08rem;
    margin: 0 20px;
}
.portfolio, li{
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
    margin-left: 30px;
}
.navbar_menu{
    display: none;   
}

@media(max-width: 800px){
    .navbar_menu{
        display: inline;
    }
}
</style>
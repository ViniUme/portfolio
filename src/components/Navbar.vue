<template>
<nav v-bind:class="active">
    <div class="navbar_div_flex">
        <h1 class="portfolio">Portfólio</h1>
        <div class="navbar_menu" @click="Change">
                menu
        </div>
    </div>
    <ul class="menu_list">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Serviços</li>
        <li>Minhas Skills</li>
    </ul>
</nav>    
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        Change(){
            if(this.active == ""){
                this.active = "activate";
            }
            else{
                this.active = ""
            }
        }
    },
    data(){
        return{
            active: "navbar_menu"
        }
    }
}
</script>

<style>
:root{
    --gray: #212121;
}

nav{
    width: 100%;
    height: 70px;
    background-color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.portfolio{
    font-size: 1.7rem;
    margin: 15px 0;
}
.menu_list{
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
.navbar_div_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 750px){
    nav{
        flex-direction: column;
        align-content: center;
        justify-content: start;
        height: max-content;
    }
    .menu_list{
        display: block;
        width: 100%;
        height: 0;
        text-align: center;
        margin: 0;
        position: absolute;
        top: 61px;
        background-color: var(--gray);
        transition: 500ms ease-in-out;
        visibility: hidden;
        overflow-y: hidden;
        z-index: 2;
    }
    .activate .menu_list{
        height: 190px;
        visibility: visible;
    }
    li{
        margin: 20px 0;
    }
    .navbar_div_flex{
        width: 100%;
    }
    .navbar_menu{
        display: inline;
        margin: 0 30px;
    }
}
</style>
<template>
<nav v-bind:class="active">
    <ul class="menu_list">
        <a href="#about" class="menu_items">Sobre mim</a>
        <a href="#cotacts" class="menu_items">Contatos</a>
        <a href="#projects" class="menu_items">Projetos</a>
        <a href="#skills" class="menu_items">Minhas Skills</a>
    </ul>
    <div class="navbar_menu" @click="Change">
        <span class="menu_icon">icon</span>
    </div>
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
            active: ""
        }
    }
}
</script>

<style>
:root{
    --gray: #212121;
    --black: #121212;
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
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 30px;
}
.menu_items{
    width: max-content;
    font-size: 1.2rem;
    letter-spacing: -0.08rem;
    margin: 0 20px;
    padding: 10px;
    cursor: pointer;
    color: white;
    text-decoration: none;
}
.portfolio, .menu_items{
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
    margin-left: 30px;
}
.navbar_menu{
    display: none; 
}

@media(max-width: 755px){
    nav{
        flex-direction: column;
        align-items: flex-end;
        height: max-content;
    }
    .menu_list{
        display: flex;
        flex-direction: column;
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
        height: 252px;
        visibility: visible;
    }
    .menu_items{
        margin: 0;
        width: 100%;
        padding: 20px 0;
        border-bottom: white 1px solid;
    }
    .navbar_div_flex{
        width: 100%;
    }
    .navbar_menu{
        display: flex;
        height: min-content;
        margin: 10px 30px;
        padding: 10px;
        cursor: pointer;
    }
    .menu_icon{
        width: 35px;
        border-top: 3px solid white;
        user-select: none;
        font-size: 0px;
    }
    .menu_icon::after, .menu_icon::before{
        content: '';
        display: block;
        width: 35px;
        height: 3px;
        background: white;
        margin-top: 7px;
    }
}
</style>
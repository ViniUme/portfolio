<template>
    <div class="front">
        <div class="text_column">
            <h1 class="text">Olá, eu sou o</h1><span class="name"> > Vinicius Henrique<span class="bar_animation">|</span></span>

            <h2 class="subtitle">Desenvolvedor Front-End & Back-End</h2>

            <div class="div_buttons">
                <button class="btn curriculo">Download CV</button>
                <button class="btn contato">Entrar em contato</button>
            </div>
        </div>
        <img class="ilustration" src="/img/foto.jpeg">
    </div>
</template>

<script>
export default{
    name: 'Presentation',
    data(){
        return{
            num: 1
        }
    }
}
</script>

<style>
:root{
    --green: #00CA38;
}

.front, .text_column, .div_buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.front{
    margin-top: 100px;
    width: 100%;
}
.text{
    font-size: 27px;
}
.name{
    color: var(--green);
    font-size: 32px;
    font-weight: bold;
}
.text_column{
    flex-direction: column;
    align-items: flex-start;
}
.bar_animation{
    animation: console 1s infinite steps(2, jump-none);
    font-size: 35px;
}
.subtitle{
    color: gray;
    font-size: 18px;
    font-weight: normal;
    margin: 5px 0;
}
.ilustration{
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: var(--green) 3px solid;
    border-radius: 100%;
}
.div_buttons{
    margin-top: 10px;
    gap: 30px;
}
.btn{
    width: max-content;
    padding: 10px 15px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
    border: 2px solid transparent;
    cursor: pointer;
}
.curriculo{
    background-color: var(--green);
    transition: 300ms ease-in-out;
}
.curriculo:hover{
    color: white;
}
.contato{
    color: white;
    background-color: #212121;
    border: 2px solid transparent;
    transition: 300ms ease-in-out;
}
.contato:hover{
    border: 2px solid gray;
}

@keyframes console{
    from{
        filter: opacity(0%);
    }
    to{
        filter: opacity(100000%);
    }
}

@media(max-width: 850px){
    .ilustration{
        display: none;
    }
}

@media(max-width: 450px){
    .text{
        font-size: 22px;
    }
    .name{
        color: var(--green);
        font-size: 26px;
        font-weight: bold;
    }
    .bar_animation{
        font-size: 30px;
    }
    .btn{
        padding: 10px 7px;
        font-size: 17px;
    }
}
</style>

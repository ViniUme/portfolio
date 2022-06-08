<template>
    <div class="front">
        <div class="text_column">
            <h1 class="text">Olá, eu sou o</h1><span class="name">Vinicius Henrique</span>

            <h2 class="subtitle">Desenvolvedor Front-End & Back-End</h2>

            <div class="div_buttons">
                <a href="/curriculo.pdf" class="btn curriculo" target="_black">Curriculo</a>
                <a href="https://github.com/ViniUme" target="_blank" class="btn contato">Github</a>
            </div>
        </div>
        <img class="self" src="/img/foto.jpeg">
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
    --green: #00fa47;
}

.front, .text_column, .div_buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.front{
    margin-top: 100px;
    width: 70vw;
}
.text{
    font-size: 27px;
}
.name{
    color: var(--green);
    border-right: var(--green) 4px solid;
    font-size: 32px;
    font-weight: bold;
    animation: console 0.6s 4s infinite steps(2, jump-none), typing 3s steps(18, jump-none) 0.5s normal both;
    white-space: nowrap;
    overflow: hidden;
}
.text_column{
    flex-direction: column;
    align-items: flex-start;
}
.subtitle{
    color: gray;
    font-size: 18px;
    font-weight: normal;
    margin: 5px 0;
}
.self{
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: var(--green) 3px solid;
    border-radius: 100%;
    animation: opacity 0.8s normal;
}
.div_buttons{
    margin-top: 10px;
    gap: 30px;
}
.btn{
    width: max-content;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-family: 'Share Tech Mono', monospace;
    border: 2px solid transparent;
    cursor: pointer;
}
.curriculo{
    color: black;
    background-color: var(--green);
    transition: 300ms ease-in-out;
}
.curriculo:hover{
    color: white;
    background-color: #00b634;
}
.contato{
    color: white;
    background-color: #212121;
    border: 2px solid transparent;
    transition: 300ms ease-in-out;
}
.contato:hover{
    border: 2px solid #bbbbbb;
}

@keyframes console{
    from{
        border-right: var(--green) 4px solid;
    }
    to{
        border-right: transparent 4px solid;
    }
}
@keyframes typing{
    from{
        width: 0;
    }
    to{
        width: 298px;
    }
}
@keyframes opacity{
    from{
        transform: scale(0.8);
        filter: opacity(0);
    }
    to{
        transform: scale(1);
        filter: opacity(1);
    }
}

@media(max-width: 1100px){
    .front{
        flex-direction: column-reverse;
        gap: 50px;
    }
}

@media(max-width: 750px){
    .self{
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
    .btn{
        padding: 10px 7px;
        font-size: 17px;
    }

    @keyframes typing{
    from{
        width: 0;
    }
    to{
        width: 243px;
    }
}
}
</style>

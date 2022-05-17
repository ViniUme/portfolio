<template>
    <section class="about">
        <h1 class="about_title">Sobre mim</h1>
        <h2 class="about_text">
            Sou desenvolvedor Font-End, Back-End e estudante de programação. Tenho {{idade}} anos e estudo programação desde os 13. Busco ser um grande programador e empresário. Logo abaixo você pode ver projetos que eu mesmo fiz para comprovar meu conhecimento na área. Fiz um curso técnico de Desenvolvimento de Sistemas integrado ao ensino médio e foi lá que eu descobri que queria seguir carreira como programador. Gosto muito de tecnologias, matemática, ler, jogar, estudar, e automatizar, foi por isso que eu escolhi essa área. No momento estou focado em aprender refinar meus conehcimentos em React, Node, Next, MongoDB e Typescritp.
        </h2>
    </section>
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
            idade: "'falha ao gerar idade'"
        }
    },
    created(){
        const data = new Date();
        const nasc = new Date(2005,0,28,0,0,0,0)

        const idade = data.getFullYear() - nasc.getFullYear();
        this.idade = idade
    }
}
</script>

<style>
.about_title{
    font-size: 25px;
    color: #00CA38;
}
.about_text{
    font-weight: normal;
    font-size: 17px;
    margin-top: 10px;
    text-align: justify;
    line-height: 30px
}
.about{
    text-align: center;
    width: 60%;
}

@media(max-width: 800px){
    .about{
        width: 80%;
    }
}
</style>
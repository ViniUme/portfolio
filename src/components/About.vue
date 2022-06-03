<template>
    <section class="about">
        <h1 class="about_title">Sobre mim</h1>
        <h2 class="about_text">
            Olá, meu nome é Vinicius Henrique dos Santos, sou desenvolvedor Font-End, Back-End e estudante de programação. Tenho {{idade}} anos e estudo programação desde os 13. Busco ser um grande programador e empresário. Logo abaixo você pode ver projetos que eu mesmo fiz para comprovar meu conhecimento na área. Fiz um curso técnico de Desenvolvimento de Sistemas integrado ao ensino médio e foi lá que eu descobri que queria seguir carreira como programador. Desde então, comecei a fazer vários cursos voltados à TI. Sou apaixonado por tecnologias, matemática, ler, jogar, estudar, e automatizar, foi por isso que eu escolhi essa área. No momento busco a minha 1º oportunidade para trabalhar como programador junior e estou focado em aprender refinar meus conehcimentos em React, Node, Next, MongoDB e Typescritp.
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
        const nasc = new Date(2005,0,28)

        const idade = data.getFullYear() - nasc.getFullYear();
        this.idade = idade
    }
}
</script>

<style>
.about_title{
    font-size: 25px;
    color: #00fa47;
    margin-top: 100px;
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
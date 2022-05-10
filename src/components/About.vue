<template>
    <section class="about">
        <h1 class="about_title">Sobre mim</h1>
        <h2 class="about_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas iure dolore! Dolorem veritatis totam aut eos doloribus at eum, repellat aperiam, dignissimos impedit modi illum provident itaque tempora possimus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam rerum nisi consequatur dolor molestiae vitae itaque quibusdam corporis, optio aspernatur nobis, veritatis dolores quaerat quia mollitia! Necessitatibus ipsam accusamus aspernatur.
        </h2>
    </section>
</template>

<script>
export default {
    name: 'About'
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
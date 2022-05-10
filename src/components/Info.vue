<template>
    <section class="info">
        <div class="info_grid">
            <a>
                <img class="info_svg" src="/smile.svg"/>
                <h1 class="info_type">Nome</h1>
                <h2 class="info_des">Vinicius Henrique dos Santos</h2>
            </a>

            <a>
                <img class="info_svg" src="/mail.svg"/>
                <h1 class="info_type">E-mail</h1>
                <h2 class="info_des">viniciusumetsu210@gmail.com</h2>
            </a>
        </div>

        <div class="info_grid">
            <a>
                <img class="info_svg" src="/phone.svg"/>
                <h1 class="info_type">Telefone</h1>
                <h2 class="info_des">(18) 99711-9365</h2>
            </a>

            <a>
                <img class="info_svg" src="/instagram.svg"/>
                <h1 class="info_type">Instagram</h1>
                <h2 class="info_des">@viniciusumetsu</h2>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style>
.info, .info_grid{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    margin: 50px 0;
}
.info_type{
    font-size: 22px;
    color: #00CA38;
    font-weight: normal;
}
.info_des{
    font-size: 16px;
    color: #a3a3a3;
    font-weight: normal;
}

@media(max-width: 950px){
    .info_grid{
        flex-direction: column;
    }
}
</style>
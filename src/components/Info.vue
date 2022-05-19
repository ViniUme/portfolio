<template>
    <section class="info">
        <div class="info_grid">
            <a>
                <img class="info_svg" src="/svg/smile.svg"/>
                <h1 class="info_type">Nome</h1>
                <h2 class="info_des">Vinicius H. dos Santos</h2>
            </a>

            <a>
                <img class="info_svg" src="/svg/mail.svg"/>
                <h1 class="info_type">E-mail</h1>
                <h2 class="info_des">viniciusumetsu210@gmail.com</h2>
            </a>
        </div>

        <div class="info_grid">
            <a>
                <img class="info_svg" src="/svg/phone.svg"/>
                <h1 class="info_type">Telefone</h1>
                <h2 class="info_des">(18) 99711-9365</h2>
            </a>

            <a>
                <img class="info_svg" src="/svg/instagram.svg"/>
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
    color: #00fa47;
    font-weight: normal;
}
.info_des{
    font-size: 16px;
    color: #a3a3a3;
    font-weight: normal;
}

@media(max-width: 950px){
    .info{
        width: 80%;
        justify-content: space-around;
    }
    .info_grid{
        flex-direction: column;
    }
}

@media(max-width: 450px){
    .info{
        flex-direction: column;
    }
    .info_grid{
        margin: 0;
    }
}
</style>
<template>
    <h1 class="contacts_header">Contatos</h1>
    <section class="info">
        <a class="contact_link" href="mailto:viniciusumetsu210@gmail.com">
            <img class="svg_contact" src="/svg/email.svg" />
            <span class="svg_text">E-mail</span>
        </a>
        <a class="contact_link" href="http://api.whatsapp.com/send?phone=5518997119365">
            <img class="svg_contact" src="/svg/whatsapp.svg" />
            <span class="svg_text">Whatsapp</span>
        </a>
        <a class="contact_link" href="https://www.linkedin.com/in/viniume/">
            <img class="svg_contact" src="/svg/linkedin.svg" />
            <span class="svg_text">Linkedin</span>
        </a>
        <a class="contact_link" href="https://www.instagram.com/viniciusumetsu/">
            <img class="svg_contact" src="/svg/instagram.svg" />
            <span class="svg_text">Instagram</span>
        </a>
        <a class="contact_link" href="https://t.me/ViniUme">
            <img class="svg_contact" src="/svg/telegram.svg" />
            <span class="svg_text">Telegram</span>
        </a>
    </section>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style>
.contacts_header{
    margin-top: 50px;
    margin-bottom: 20px;
}

.info{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 80vw;
    text-align: center;
    gap: 20px;
    margin-bottom: 50px;
}

.contact_link{
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 20px;
}

.svg_contact{
    width: 50px;
    height: 50px;
    transition: 150ms ease-in-out;
}
.contact_link:hover .svg_contact{
    transform: scale(1.2);
}
</style>
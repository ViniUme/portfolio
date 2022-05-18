<template>
    <span class="skill_title">SKILLS</span>
    <section class="skills">
        <div class="div_skill"><img class="skill_img" :src="items[0]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[1]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[2]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[3]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[4]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[5]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[6]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[7]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[8]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[9]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[10]"></div>
        <div class="div_skill"><img class="skill_img" :src="items[11]"></div>
    </section>
</template>
<script>
export default {
    name: "Skills",
    data(){
        return{
            items: ["/img/html.png", "/img/css.png", "/img/js.png", "/img/react.png", "/img/nextjs.png", "/img/mongodb.png", "/img/vue.png", "/img/sass.png", "/img/git.png", "/img/microsoftSQL.png", "/img/mk.png", "/img/office.png"]
        }
    }
}
</script>

<style>
.skill_title{
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 10px;
}
.skills{
    width: 70%;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.div_skill{
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 30px;
    margin: 20px;
}
.skill_img{
    width: 90px;
    height: min-content;
    max-height: 90px;
    margin: 5px;
}
@media(max-width: 600px){
    .skills{
        width: 85%;
    }
}
</style>
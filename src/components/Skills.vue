<template>
    <section class="skills">
        <span class="skill_title">SKILLS</span>
        <div class="skills_div">
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
            <div class="div_skill"><img class="skill_img" :src="items[12]"></div>
            <div class="div_skill"><img class="skill_img" :src="items[13]"></div>
            <div class="div_skill"><img class="skill_img" :src="items[14]"></div>
            <div class="div_skill"><img class="skill_img" :src="items[15]"></div>
            <div class="div_skill"><img class="skill_img" :src="items[16]"></div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Skills",
    data(){
        return{
            items:
            [
                "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
                "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
                "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
                "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
                "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
                "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
                "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
                "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
                "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
                "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
                "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",//
                "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
                "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
                "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
                "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white",
                "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            ]
        }
    }
}
</script>

<style>
.skills{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 150px 0;
}
.skill_title{
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 10px;
}
.skills_div{
    width: 70%;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.div_skill{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 5px;
    transition: 150ms ease-in-out;
    cursor: pointer;
}
.div_skill:hover{
    transform: scale(1.1);
}
.skill_img{
    height: 35px;
    max-height: 90px;
    margin: 5px;
}
@media(max-width: 600px){
    .skills_div{
        width: 85%;
    }
}
</style>
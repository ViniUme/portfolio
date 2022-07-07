<template>
    <section class="projects">
        <span class="projects_title">Projetos</span>
        <a href="https://github.com/ViniUme/Movies-Website" class="project_div" target="_blank">
            <img style="margin-top: 10px" width="280" src="https://github.com/ViniUme/assets/blob/master/movie.png?raw=true" alt="image">
            <span class="project_title">Movies Website</span>
            <span class="project_tec">Tecnologias: HTML, CSS, SASS, React.js, Next.js e Vercel</span>
        </a>
        <a href="https://github.com/ViniUme/database-login" class="project_div" target="_blank">
            <img style="margin-top: 10px" width="280" src="https://github.com/ViniUme/assets/blob/master/login.png?raw=true" alt="image">
            <span class="project_title">Database Login</span>
            <span class="project_tec">Tecnologias: HTML, CSS, SASS, React.js, Next.js, MongoDB e Vercel</span>
        </a>
        <a href="https://github.com/ViniUme/React-Calculator" class="project_div" target="_blank">
            <img style="margin-top: 10px" width="280" src="https://github.com/ViniUme/assets/blob/master/calculadora.PNG?raw=true" alt="image">
            <span class="project_title">React Calculator</span>
            <span class="project_tec">Tecnologias: HTML, CSS, React.js e Github Pages</span>
        </a>
        <a href="https://github.com/ViniUme/next-pokedex" class="project_div" target="_blank">
            <img style="margin-top: 10px" width="280" src="https://github.com/ViniUme/assets/blob/master/pokedex.PNG?raw=true" alt="image">
            <span class="project_title">Next Pokedex</span>
            <span class="project_tec">Tecnologias: HTML, SCSS, React.js, Next.js e Vercel</span>
        </a>
        <a href="https://github.com/ViniUme/Portfolio" class="project_div" target="_blank">
            <img style="margin-top: 10px" width="280" src="https://github.com/ViniUme/assets/blob/master/portf%C3%B3lio.PNG?raw=true" alt="image">
            <span class="project_title">Portfólio</span>
            <span class="project_tec">Tecnologias: HTML, CSS, Vue.js e Github Pages</span>
        </a>
    </section>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style>
:root{
    --gray: #212121;
    --green: #00fa47;
}

.projects_title{
    width: 100%;
    text-align: center;
    font-size: 28px;
}
.projects{
    margin-top: 100px;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.project_div{
    width: 300px;
    height: max-content;
    display: block;
    text-align: center;
    text-decoration: none;
    background-color: var(--gray);
    transition: 150ms ease-in-out;
}
.project_div:hover{
    transform: scale(1.1);
}
.project_title{
    color: var(--green);
    font-size: 18px;
}
.project_tec{
    color: white;
    font-size: 14px;
}
.project_tec, .project_title{
    width: calc(100% - 20px);
    text-align: left;
    margin: 5px 0;
    margin-left: 10px;
    display: block;
}
</style>
<template>
    <section class="projects">
        <a href="https://github.com/ViniUme/Movies-Website" class="project_div">
            <img style="margin-top: 10px" width="280" src="/img/movie.png" alt="image">
            <span class="project_title">Movies Website</span>
            <span class="project_tec">Tecnologias: HTML, CSS, SASS, React.js, Next.js e Vercel</span>
        </a>
        <a href="https://github.com/ViniUme/database-login" class="project_div">
            <img style="margin-top: 10px" width="280" src="/img/login.png" alt="image">
            <span class="project_title">Database Login</span>
            <span class="project_tec">Tecnologias: HTML, CSS, SASS, React.js, Next.js, MongoDB e Vercel</span>
        </a>
        <a href="https://github.com/ViniUme/React-Calculator" class="project_div">
            <img style="margin-top: 10px" width="280" src="/img/calc.png" alt="image">
            <span class="project_title">React Calculator</span>
            <span class="project_tec">Tecnologias: HTML, CSS, React.js e Github Pages</span>
        </a>
        <a href="#" class="project_div">
            <img style="margin-top: 10px" width="280" src="/img/movie.png" alt="image">
            <span class="project_title">Movies Website</span>
            <span class="project_tec">Tecnologias: HTML, CSS, SASS, Next.js e Vercel</span>
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
    --green: #00CA38;
}

.projects{
    width: 70%;
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
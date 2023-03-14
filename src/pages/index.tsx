import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import styles from '../styles/index.module.scss';

export default function Index(){

    const links = [
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
        "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
        "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
        "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
        "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
        "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
        "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white",
        "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
    ]
    const [age, setAge] = useState(NaN)

    useEffect(() => {
        const date = new Date();
        const birth = new Date(2005,0,28)
        const new_age = date.getFullYear() - birth.getFullYear();
        setAge(new_age);
    },[])

    return (
        <>
            <Head>
                <title>Vinicius Henrique dos Santos - My professional portfolio</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <Navbar/>
                <section className={styles.front}>
                    <div className={styles.text_column}>
                        <h1 className={styles.text}>
                            <span>Hello there, I'm</span><br/>
                            <span className={styles.name}>Vinicius Henrique</span>
                        </h1>

                        <h2 className={styles.subtitle}>Full-Stack Developer</h2>

                        <div className={styles.div_buttons}>
                            <Link href="https://www.linkedin.com/in/viniciushenriquesantos/" className={`${styles.btn} ${styles.linkedin}`} target="_black">Linkedin</Link>
                            <Link href="https://github.com/ViniUme" target="_blank" className={`${styles.btn} ${styles.contato}`}>Github</Link>
                        </div>
                    </div>
                    <Image src="/img/foto.webp" className={styles.self} alt="Minha foto" width={300} height={300}/>
                </section>

                <section className={styles.about} id="about">
                    <h2 className={styles.about_title}>About me</h2>
                    <span className={styles.about_text}>
                        Hi, my name is Vinícius Henrique dos Santos, {age} years old. I'm full-stack developer. Bellow you can see my own projects. I took a technical course in system development and there I discovered my career. I love programming, mathematics, read, play games, study and automate system. At the moment I'm looking to refine my knowledge in the Next.js Framework, Linux and system structure.
                    </span>
                </section>
                    
                <section className={styles.info} id="info">
                    <h2 className={styles.info_header}>Contacts</h2>
                    <div className={styles.info_div}>
                        <Link className={styles.info_link} href="mailto:viniciusumetsu210@gmail.com" target="_blank">
                            <Image className={styles.svg_info} src="/img/icons/email.svg" width={50} height={50} alt="icon_image"/>
                            <span className={styles.svg_text}>E-mail</span>
                        </Link>
                        <Link className={styles.info_link} href="http://api.whatsapp.com/send?phone=5518997119365" target="_blank">
                            <Image className={styles.svg_info} src="/img/icons/whatsapp.svg" width={50} height={50} alt="icon_image"/>
                            <span className={styles.svg_text}>Whatsapp</span>
                        </Link>
                        <Link className={styles.info_link} href="https://www.linkedin.com/in/viniciushenriquesantos/" target="_blank">
                            <Image className={styles.svg_info} src="/img/icons/linkedin.svg" width={50} height={50} alt="icon_image"/>
                            <span className={styles.svg_text}>Linkedin</span>
                        </Link>
                        <Link className={styles.info_link} href="https://www.instagram.com/viniciusumetsu/" target="_blank">
                            <Image className={styles.svg_info} src="/img/icons/instagram.svg" width={50} height={50} alt="icon_image"/>
                            <span className={styles.svg_text}>Instagram</span>
                        </Link>
                        <Link className={styles.info_link} href="https://t.me/ViniUme" target="_blank">
                            <Image className={styles.svg_info} src="/img/icons/telegram.svg" width={50} height={50} alt="icon_image"/>
                            <span className={styles.svg_text}>Telegram</span>
                        </Link>
                    </div>
                </section>

                <section className={styles.projects} id="projects">
                    <h2 className={styles.projects_title}>Projects</h2>
                    <Link href="https://limitsgym.vercel.app/" className={styles.project_div} target="_blank">
                        <Image src="/img/projects/limits_gym.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>Limits Gym</span>
                        <span className={styles.project_tec}>Technologies: HTML, CSS, SASS, React.js, Next.js, MongoDB, Mui-Material, Eslint e Vercel</span>
                    </Link>
                    <Link href="https://movies-website-eight.vercel.app/" className={styles.project_div} target="_blank">
                        <Image src="/img/projects/movie.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>Movies Website</span>
                        <span className={styles.project_tec}>Technologies: HTML, CSS, SASS, React.js, Next.js e Vercel</span>
                    </Link>
                    <Link href="http://database-login.vercel.app/" className={styles.project_div} target="_blank">
                        <Image src="/img/projects/login.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>Database Login</span>
                        <span className={styles.project_tec}>Technologies: HTML, CSS, SASS, React.js, Next.js, MongoDB e Vercel</span>
                    </Link>
                    <Link href="https://viniume.github.io/React-Calculator/" className={styles.project_div} target="_blank">
                        <Image src="/img/calculator.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>React Calculator</span>
                        <span className={styles.project_tec}>Technologies: HTML, CSS, React.js e Github Pages</span>
                    </Link>
                    <Link href="http://next-pokedex-one.vercel.app/" className={styles.project_div} target="_blank">
                        <Image src="/img/projects/pokedex.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>Next Pokedex</span>
                        <span className={styles.project_tec}>Technologies: HTML, SCSS, React.js, Next.js e Vercel</span>
                    </Link>
                    <Link href="https://github.com/ViniUme/Portfolio" className={styles.project_div} target="_blank">
                        <Image src="/img/projects/portfolio.webp" width={280} height={151} alt="image"/>
                        <span className={styles.project_title}>Portfolio</span>
                        <span className={styles.project_tec}>Technologies: HTML, SASS, Next.js e Github Pages</span>
                    </Link>
                </section>

                <section className={styles.skills} id="skills">
                    <span className={styles.skill_title}>Skills</span>
                    <div className={styles.skills_div}>
                        {links.map( link => {
                            return(
                                <div className={styles.skill_card}><img className={styles.skill_img} src={link}/></div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import styles from '../styles/index.module.scss';

export default function Index(){

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
                            <a href="https://www.linkedin.com/in/viniciushenriquesantos/" className={`${styles.btn} ${styles.linkedin}`} target="_black">Linkedin</a>
                            <a href="https://github.com/ViniUme" target="_blank" className={`${styles.btn} ${styles.contato}`}>Github</a>
                        </div>
                    </div>
                    <Image src="/img/foto.webp" className={styles.self} alt="Minha foto" width={300} height={300}/>
                </section>
                <section className={styles.about} id="about">
                    <span className={styles.about_title}>About me</span>
                    <h2 className={styles.about_text}>
                        Hi, my name is Vinícius Henrique dos Santos, {age} years old. I'm full-stack developer. Bellow you can see my own projects. I took a technical course in system development and there I discovered my career. I love programming, mathematics, read, play games, study and automate system. At the moment I'm looking to refine my knowledge in the Next.js Framework, Linux and system structure.
                    </h2>
                </section>
            </main>
        </>
    );
}

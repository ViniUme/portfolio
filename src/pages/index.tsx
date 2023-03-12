import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import styles from '../styles/index.module.scss';

export default function Index(){
  return (
    <>
        <Head>
            <title></title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
            <Navbar/>
            <div className={styles.front}>
                <div className={styles.text_column}>
                    <h1 className={styles.text}>Olá, eu sou o</h1><span className={styles.name}>Vinicius Henrique</span>

                    <h2 className={styles.subtitle}>Desenvolvedor Front-End & Back-End</h2>

                    <div className={styles.div_buttons}>
                        <a href="https://www.linkedin.com/in/viniciushenriquesantos/" className={`${styles.btn} ${styles.linkedin}`} target="_black">Linkedin</a>
                        <a href="https://github.com/ViniUme" target="_blank" className={`${styles.btn} ${styles.contato}`}>Github</a>
                    </div>
                </div>
                <Image src="/img/foto.webp" className={styles.self} alt="Minha foto" width={300} height={300}/>
            </div>
        </main>
    </>
  );
}

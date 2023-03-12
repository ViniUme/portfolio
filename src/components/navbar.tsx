import styles from '../styles/navbar.module.scss';

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.menu_list}>
                <a href="#about" className={styles.menu_items}>Sobre mim</a>
                <a href="#info" className={styles.menu_items}>Contatos</a>
                <a href="#projects" className={styles.menu_items}>Projetos</a>
                <a href="#skills" className={styles.menu_items}>Minhas Skills</a>
            </ul>
            <div className={styles.navbar_menu}>
                <span className={styles.menu_icon}>icon</span>
            </div>
        </nav>
    );
}
import styles from '../styles/navbar.module.scss';
import { useState } from 'react';

export default function Navbar(){

    const [menu, setMenu] = useState(false)

    function SwitchMenu(){
        setMenu(!menu);
    }

    return(
        <nav className={`${styles.nav} ${menu ? styles.activate : null}`}>
            <ul className={styles.menu_list}>
                <a href="/#about" className={styles.menu_items}>About Me</a>
                <a href="/#info" className={styles.menu_items}>Contact</a>
                <a href="/#projects" className={styles.menu_items}>Projects</a>
                <a href="/#skills" className={styles.menu_items}>My Skills</a>
            </ul>
            <div className={styles.navbar_menu} onClick={SwitchMenu}>
                <span className={styles.menu_icon}>icon</span>
            </div>
        </nav>
    );
}
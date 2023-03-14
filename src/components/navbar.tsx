import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default function Navbar(){

    const [menu, setMenu] = useState(false)

    function SwitchMenu(){
        setMenu(!menu);
    }

    return(
        <nav className={`${styles.nav} ${menu ? styles.activate : null}`}>
            <ul className={styles.menu_list}>
                <Link href="/#about" className={styles.menu_items}>About Me</Link>
                <Link href="/#info" className={styles.menu_items}>Contact</Link>
                <Link href="/#projects" className={styles.menu_items}>Projects</Link>
                <Link href="/#skills" className={styles.menu_items}>My Skills</Link>
            </ul>
            <div className={styles.navbar_menu} onClick={SwitchMenu}>
                <span className={styles.menu_icon}>icon</span>
            </div>
        </nav>
    );
}
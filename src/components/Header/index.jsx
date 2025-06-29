'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import logo from '@/assets/framework-icon.png';
import Image from 'next/image';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" onClick={closeMenu}>
                    <Image
                        src={logo}
                        alt='Logo da Framework'
                        className={styles.logo}
                    />
                </Link>

                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
                </button>



                <div className={styles.options}>
                    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}><Link href="/" onClick={closeMenu}>Início</Link></li>
                            <li className={styles.navItem}><Link href="/projetos" onClick={(e) => e.preventDefault()} >Projetos</Link></li>
                            <li className={styles.navItem}><Link href="/architect" onClick={closeMenu}>Arquitetos</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.search_container}>
                        <span className={styles.search_icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-search"
                            >
                                <path d="m21 21-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className={styles.search_input}
                            placeholder="Buscar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className={styles.user_icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round">
                            <path d="M18 20a6 6 0 0 0-12 0" />
                            <circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

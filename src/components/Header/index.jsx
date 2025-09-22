'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import logo from '@/assets/framework-icon.png';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { isArchitectProfile } from '@/utils/validators';

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState('');
    const [isArchitect, setIsArchitect] = useState(true);
    const [architectID, setIsArchitectID] = useState(null);

    // useEffect(() => {
    //     setIsArchitect(localStorage.getItem('isArchitect') === 'true');
    //     setIsArchitectID(localStorage.getItem('architectID'))

    //     const handleScroll = () => setScrolled(window.scrollY > 0);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleNewProject = () => {
        if (isArchitectProfile(pathname)) {
            // estamos na página do arquiteto → apenas atualiza query param
            const url = new URL(window.location.href);
            url.searchParams.set('modal', 'newProject');
            window.history.replaceState({}, '', url);
        } else {
            // estamos em outra página → navega para o perfil
            router.push(`/architect/1?modal=newProject`);
        }
    };

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
                    {isArchitect && (
                        <button className='add_project_button' onClick={handleNewProject}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-plus-icon lucide-house-plus">
                                <path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475" />
                                <path d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
                                <path d="M15 18h6" />
                                <path d="M18 15v6" />
                            </svg>
                            <span className={styles.add_project_label}>Novo Projeto</span>
                        </button>
                    )}
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

"use client"

import Link from 'next/link'
import styles from './index.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AvatarImage from '../Avatar'
import logo from '@/assets/framework-icon.png'

export function Header() {
    const [top, setTop] = useState(true)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [top])

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.wrap_header}>
                <div>
                    <Link href="/">
                        <Image
                            width={35}
                            src={logo}
                            alt='Logo do site Framework'
                            quality={100}
                            priority
                            height={35}
                        />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="/architect/chatillon-architectes">
                        Arquitetos
                    </Link>
                </nav>

                <div className={styles.search_input}>
                    <div className={styles.search}>
                        <input type='text' />
                        <button className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                    <AvatarImage name={'Gabriel Matte Elias'} width={34} height={34} />
                </div>

                <div className={styles.search_profile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(106, 106, 106, 0.61)', cursor: 'pointer' }}>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <AvatarImage name={'Gabriel Matte Elias'} width={34} height={34} />
                </div>
            </div>
        </header>
    )
}

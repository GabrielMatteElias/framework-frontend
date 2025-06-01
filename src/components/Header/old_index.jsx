"use client"

import Link from 'next/link'
import styles from './index.module.css'
import frameworkLogo from '@/assets/framework-icon.png'
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import AvatarImage from '../Avatar'

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
        <header className={` ${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.wrap_header}>
                <div>
                    <Link href="/">
                        <Image
                            width={35}
                            src={frameworkLogo}
                            alt='Logo do site Framework'
                            quality={100}
                            priority
                        />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="/architect/chatillon-architectes">
                        Architect
                    </Link>
                    <Link href="/architect/project/9">
                        Project
                    </Link>
                </nav>

                <div className={styles.search_input}>
                    <div className={styles.search}>
                        <input type='text' />
                        <button className={styles.icon}>
                            <SearchIcon sx={{ width: '20px', color: '#fff' }} />
                        </button>
                    </div>
                    <AvatarImage name={'Gabriel Matte Elias'} width={34} height={34} />
                </div>

                <div className={styles.search_profile}>
                    <SearchIcon sx={{ fontSize: '23px', color: 'rgba(106, 106, 106, 0.61)', cursor: 'pointer' }} />
                    <AvatarImage name={'Gabriel Matte Elias'} width={34} height={34} />
                </div>
            </div>
        </header >
    )
}
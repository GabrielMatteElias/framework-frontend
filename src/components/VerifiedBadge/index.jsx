'use client';
import { useState } from "react";
import styles from './index.module.css';
import VerifiedIcon from '@/assets/verified-icon.png';
import Image from "next/image";
import Link from "next/link";

export function VerifiedBadge({ disableClick = true, architectName, width }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (disableClick) {
            return
        }
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <div onClick={handleOpen} className={!disableClick && styles.ableClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width || '16'} height={width || '16'} viewBox="0 0 24 24">
                    <defs>
                        <mask id="cutout">
                            <rect width="100%" height="100%" fill="white" />
                            <path d="M9 12l2 2 4-4" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </mask>
                    </defs>
                    <path
                        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                        fill="#0066cc"
                        mask="url(#cutout)"
                    />
                </svg>
            </div>

            {open && (
                <div className='modal_overlay' onClick={handleClose}>
                    <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                        <div className='modal_title'>
                            <h2>Framework Premium</h2>
                        </div>

                        <div className={styles.modal_content}>
                            <p className={styles.modal_question}><strong>Por que estou vendo este selo?</strong></p>
                            <p className={styles.modal_text}>
                                Este selo é exibido porque {architectName} assina o Framework Premium. {' '}
                                <Link href="/verificacao" className={styles.modal_link}>Saiba mais</Link>
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

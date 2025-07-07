'use client'

import { useState } from 'react'
import styles from './index.module.css'

export default function LikeButton({ initialLiked = false, isPage = false }) {
    const [liked, setLiked] = useState(initialLiked)

    return (
        <button
            type="button"
            className={`${styles.like_button} ${liked && styles.liked} ${!isPage && styles.card}`}
            onClick={() => setLiked(!liked)}
            aria-label={liked ? 'Descurtir projeto' : 'Curtir projeto'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="red"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.heart_icon}
            >
                <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3 c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2 A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    fill={liked ? 'red' : 'none'}
                    stroke={liked ? 'red' : !isPage ? '#fff' : '#888'}
                />
            </svg>
        </button>
    )
}

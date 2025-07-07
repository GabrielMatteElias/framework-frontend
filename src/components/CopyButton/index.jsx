'use client'
import React, { useState } from 'react'
import styles from './index.module.css'

export const CopyButton = ({ textToCopy, className = '' }) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <button
            onClick={handleCopy}
            className={`${styles.border_copy} ${isCopied ? styles.copied : ''} ${className}`}
            aria-label={isCopied ? "Copiado" : "Copiar para área de transferência"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isCopied ? "#4CAF50" : "#aaa"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
        </button>
    )
}
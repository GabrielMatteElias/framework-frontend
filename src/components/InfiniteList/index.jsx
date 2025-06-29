'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './index.module.css'

export default function InfiniteList({
    items = [],
    batchSize = 3,
    delay = 1000,
    renderItem,
    loadingComponent = <p style={{ textAlign: 'center' }}>Carregando...</p>,
}) {
    const [showingCount, setShowingCount] = useState(batchSize)
    const [isLoading, setIsLoading] = useState(false)
    const sentinelRef = useRef(null)

    useEffect(() => {
        if (showingCount >= items.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting && !isLoading) {
                    setIsLoading(true)
                    setTimeout(() => {
                        setShowingCount((prev) =>
                            Math.min(prev + batchSize, items.length)
                        )
                        setIsLoading(false)
                    }, delay)
                }
            },
            { rootMargin: '100px' }
        )

        const sentinel = sentinelRef.current
        if (sentinel) observer.observe(sentinel)

        return () => {
            if (sentinel) observer.unobserve(sentinel)
        }
    }, [showingCount, items.length, isLoading, batchSize, delay])

    return (
        <>
            {items.slice(0, showingCount).map(renderItem)}

            {showingCount < items.length && (
                <div ref={sentinelRef} className={styles.loading}>
                    {isLoading && loadingComponent}
                </div>
            )}
        </>
    )
}

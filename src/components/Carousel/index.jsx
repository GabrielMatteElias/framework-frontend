'use client';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

export function Carousel({ imagens }) {
    const [modalAberto, setModalAberto] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const abrirModal = (index) => {
        setIndiceAtual(index);
        setModalAberto(true);
    };

    const fecharModal = () => setModalAberto(false);

    const proximo = () => {
        setIndiceAtual((prev) => (prev + 1) % imagens.length);
    };

    const anterior = () => {
        setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    useEffect(() => {
        const escListener = (e) => {
            if (e.key === 'Escape') fecharModal();
        };
        document.addEventListener('keydown', escListener);
        return () => document.removeEventListener('keydown', escListener);
    }, []);

    return (
        <div>
            <div className={styles.gallery_grid}>
                {imagens.map((image, index) => (
                    <div key={index} className={styles.gallery_item}>
                        <Image
                            src={`https://framework-backend-endq.onrender.com${image}`}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                            className={styles.gallery_image}
                            priority
                            onClick={() => abrirModal(index)}

                        />
                    </div>
                ))}
            </div>

            {modalAberto && (
                <div className={styles.modalOverlay} onClick={fecharModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.arrow} onClick={anterior}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18L9 12L15 6" />
                            </svg>
                        </button>

                        <Image
                            src={`https://framework-backend-endq.onrender.com${imagens[indiceAtual]}`}
                            alt={`Projeto ${indiceAtual + 1}`}
                            className={styles.modalImage}
                            width='800'
                            height='800'
                            unoptimized
                        />

                        <button className={styles.arrow} onClick={proximo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18L15 12L9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

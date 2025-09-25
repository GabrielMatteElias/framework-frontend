'use client'

import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

import ViewToggle from '../ViewToggle';
import { useEffect, useState } from 'react';
import LikeButton from '../LikeButton';
import { formataData, formatNumberShort } from '@/utils/formaters';
import { Container } from '@mui/material';

const images = [
    'https://ciclovivo.com.br/wp-content/uploads/2020/12/casa-espiral-1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6k3rXelV28XgRKx_b3s540EDezAn2drHjA&s',
    'https://papelsemente.com.br//wp-content/uploads/2017/10/Captura-de-Tela-2017-10-27-a%CC%80s-15.47.17.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rHNuUndvm7O6PgUKQprDbMcNehI6fa7TYg&s',
    'https://cdn.pixabay.com/photo/2015/03/23/22/43/snow-686783_1280.jpg',
    'https://images.adsttc.com/media/images/52fe/87e7/e8e4/4e54/8200/0169/medium_jpg/old-monuments-yugoslavia-spomeniks-jan-kempenaers-5.jpg?1392412642',
    'https://memorialdoconsumo.espm.edu.br/wp-content/uploads/2016/10/Spomenik_01.jpg',
    'https://blog.archtrends.com/wp-content/uploads/2021/02/Arquitetura-chinesa-3-scaled.jpg',
    'https://viagemalemanha.com/wp-content/uploads/2023/10/trier-porta-nigra-1024x731.jpg'
]

function shuffleArray(arr) {
    const arrayCopy = [...arr];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}


export function ProjectCard({ project, title = '', viewToggle = false, addProject = false }) {
    const [layout, setLayout] = useState('grid');

    const truncateDescription = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return `${text.substring(0, maxLength)}...`;
    };

    const [imagesShuffled, setImagesShuffled] = useState([]);

    useEffect(() => {
        setImagesShuffled(shuffleArray(images));
    }, []);

    if (!project) {
        return (
            <Container>
                <div className="not_found">
                    <h2>Ainda não há projetos para mostrar</h2>
                </div>
            </Container>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.projects_section}>
                {title && (
                    <div className={styles.section_header}>
                        <h2>{title || 'Projetos'}</h2>
                    </div>
                )}
                <div className={styles.actions_section}>
                    {viewToggle && (<ViewToggle layout={layout} setLayout={setLayout} />)}
                    {addProject && (
                        <button className={styles.add_project_button_architect_page} title='Adicionar novo projeto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus-icon lucide-house-plus">
                                <path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475" />
                                <path d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
                                <path d="M15 18h6" />
                                <path d="M18 15v6" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className={layout === 'grid' ? styles.projects_grid : styles.projects_list}>
                {project.map((projeto) => (
                    <div key={projeto.id} className={`${layout === 'grid' ? styles.project_card : styles.project_list_item} ${projeto.seloESG && 'esg'}`}>
                        <div className={`${layout === 'grid' ? styles.project_image : styles.list_image}`}>
                            <Image
                                src={imagesShuffled[projeto.id % imagesShuffled.length]}
                                alt={projeto.title}
                                width={layout === 'grid' ? 400 : 120}
                                height={layout === 'grid' ? 300 : 90}
                                className={`${layout === 'grid' ? styles.project_image_content : styles.list_image_content}`}
                            />
                        </div>
                        <div className={`${styles.project_info}  ${layout === "list" && styles.list_info}`}>
                            <h3>{projeto.title}</h3>
                            <p className={styles.description}>{truncateDescription(projeto.longDescription)}</p>
                            <div className={styles.project_meta}>
                                <span>{projeto.area}</span>
                                <span> • {projeto.location?.city}, {projeto.location?.country}</span>
                                <span> • {formataData(projeto.endDate) ?? ''} </span>
                            </div>
                            <div className={styles.project_footer}>
                                <div className={styles.stats}>
                                    <div className={styles.stats_actions}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#888">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{formatNumberShort(projeto.stats?.views, 'BR')}</span>
                                    </div>
                                    <div className={styles.stats_actions}>
                                        <LikeButton initialLiked={false} onChange={next => handleLike(projeto.id, next)} />
                                        <span>{formatNumberShort(projeto.stats?.likes, 'BR')}</span>
                                    </div>
                                </div>
                                <Link href={`/project/${projeto.id}`} className={`primary_button ${layout === 'list' && styles.cta}`}>
                                    Ver projeto
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
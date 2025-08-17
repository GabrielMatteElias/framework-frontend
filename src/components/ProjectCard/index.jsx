'use client'

import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { arquitetos } from '@/data/arquitetos';

import reformaGrandParis from '@/assets/foto4.png'
import casaSustentavel from '@/assets/casa_sustentavel.webp'
import orlaGuaiba from '@/assets/revitalizacao-orla-guaiba.webp'
import museuNacional from '@/assets/museu-nacional-rj.webp'
import edificioComercial from '@/assets/edificio-comercial.webp'
import hafencityHamburgo from '@/assets/hafencity-hamburgo.webp'
import zeitzOcaa from '@/assets/zeitz-ocaa.webp'

import ViewToggle from '../ViewToggle';
import { useState } from 'react';
import LikeButton from '../LikeButton';
import { formatNumberShort } from '@/utils/formaters';

export function ProjectCard({ project, title = '', viewToggle = false, addProject = false }) {
    const getProjectImage = (id) => {
        const imagens = {
            "le-grand-palais": reformaGrandParis,
            "casa-sustentavel": casaSustentavel,
            "revitalizacao-orla-guaiba": orlaGuaiba,
            "museu-nacional-rj": museuNacional,
            "edificio-comercial": edificioComercial,
            "hafencity-hamburgo": hafencityHamburgo,
            "zeitz-mocaa": zeitzOcaa
        };
        return imagens[id] || null;
    }

    const [layout, setLayout] = useState('grid');

    const truncateDescription = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return `${text.substring(0, maxLength)}...`;
    };

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
                {project.slice(0, 6).map((projeto) => (
                    <div key={projeto.id} className={`${layout === 'grid' ? styles.project_card : styles.project_list_item} ${projeto.seloESG && 'esg'}`}>
                        <div className={`${layout === 'grid' ? styles.project_image : styles.list_image}`}>
                            <Image
                                src={getProjectImage(projeto.id)}
                                alt={projeto.titulo}
                                width={layout === 'grid' ? 400 : 120}
                                height={layout === 'grid' ? 300 : 90}
                                className={`${layout === 'grid' ? styles.project_image_content : styles.list_image_content}`}
                            />
                        </div>
                        <div className={`${styles.project_info}  ${layout === "list" && styles.list_info}`}>
                            <h3>{projeto.titulo}</h3>
                            <p className={styles.description}>{truncateDescription(projeto.descricao)}</p>
                            <div className={styles.project_meta}>
                                <span>{projeto.area}</span>
                                <span> • {projeto.localizacao.cidade}, {projeto.localizacao.pais}</span>
                                <span> • {projeto.ano}</span>
                            </div>
                            <div className={styles.project_footer}>
                                <div className={styles.stats}>
                                    <div className={styles.stats_actions}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#888">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{formatNumberShort(projeto.estatisticas.views, 'BR')}</span>
                                    </div>
                                    <div className={styles.stats_actions}>
                                        <LikeButton initialLiked={false} onChange={next => handleLike(projeto.id, next)} />
                                        <span>{formatNumberShort(projeto.estatisticas.likes, 'BR')}</span>
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
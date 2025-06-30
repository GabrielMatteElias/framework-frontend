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
import ViewToggle from '../ViewToggle';
import { useState } from 'react';

export function ProjectCard({ project, title = false }) {

    const getProjectImage = (id) => {
        const imagens = {
            "le-grand-palais": reformaGrandParis,
            "casa-sustentavel": casaSustentavel,
            "revitalizacao-orla-guaiba": orlaGuaiba,
            "museu-nacional-rj": museuNacional,
            "edificio-comercial": edificioComercial,
            "hafencity-hamburgo": hafencityHamburgo
        };
        return imagens[id] || null;
    }

    const [layout, setLayout] = useState('grid');

    return (
        <div className={styles.container}>
            <div className={styles.projects_section}>
                {title && (
                    <div className={styles.section_header}>
                        <h2>Projetos</h2>
                    </div>
                )}
                <ViewToggle layout={layout} setLayout={setLayout} />
            </div>

            <div className={layout === 'grid' ? styles.projects_grid : styles.projects_list}>
                {project.map((projeto) => (
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
                            <p>{projeto.descricao}</p>
                            <div className={styles.project_meta}>
                                <span>{projeto.area}</span>
                                <span> • {projeto.localizacao.cidade}, {projeto.localizacao.pais}</span>
                                <span> • {projeto.ano}</span>
                            </div>
                            <Link href={`/architect/francois-chatillon/project/${projeto.id}`} className={`primary_button ${layout === 'list' && styles.cta}`}>
                                Ver projeto
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
'use client'

import ViewToggle from "@/components/ViewToggle"
import styles from './index.module.css'

import reformaGrandParis from '@/assets/foto4.png'
import casaSustentavel from '@/assets/casa_sustentavel.webp'
import orlaGuaiba from '@/assets/revitalizacao-orla-guaiba.webp'
import museuNacional from '@/assets/museu-nacional-rj.webp'
import edificioComercial from '@/assets/edificio-comercial.webp'
import hafencityHamburgo from '@/assets/hafencity-hamburgo.webp'
import Link from "next/link"
import seloESG from '@/assets/selo-esg.png'
import Image from "next/image"
import { useState } from "react"

export default function ArchitectProjects({ projects }) {

    const [layout, setLayout] = useState('list');

    const getProjectImage = (id) => {
        const imagens = {
            "le-grand-palais": reformaGrandParis,
            "casa-sustentavel": casaSustentavel,
            "revitalizacao-orla-guaiba": orlaGuaiba,
            "museu-nacional-rj": museuNacional,
            "edificio-comercial": edificioComercial,
            "hafencity-hamburgo": hafencityHamburgo
        };

        return imagens[id] || null; // ou uma imagem padrão
    };

    return (
        <section>
            <div className={styles.section_header}>
                <h2>Projetos</h2>
                <ViewToggle layout={layout} setLayout={setLayout} />
            </div>

            {layout === 'grid' || layout === 'list' ? (
                <div className={layout === 'grid' ? styles.projects_grid : styles.projects_list}>
                    {projects.map((projeto) => (
                        <div
                            key={projeto.id}
                            className={
                                layout === 'grid'
                                    ? `${styles.project_card} ${projeto.seloESG ? styles.esg : ''}`
                                    : `${styles.project_list_item} ${projeto.seloESG ? styles.esg : ''}`
                            }
                        >
                            {layout === 'grid' ? (
                                <>
                                    <div className={styles.project_image}>
                                        <Image
                                            src={getProjectImage(projeto.id)}
                                            alt={projeto.titulo}
                                            width={400}
                                            height={300}
                                            className={styles.project_image_content}
                                        />
                                    </div>
                                    <div className={styles.project_info}>
                                        <h3>{projeto.titulo}</h3>
                                        <p>{projeto.descricao}</p>
                                        <div className={styles.project_meta}>
                                            <span>{projeto.area}</span>
                                            <span> • {projeto.localizacao}</span>
                                            <span> • {projeto.ano}</span>
                                        </div>
                                        <Link
                                            href={`/architect/chatillon-architectes/project/${projeto.id}`}
                                            className="primary_button"
                                        >
                                            Ver projeto
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.list_image}>
                                        <Image
                                            src={getProjectImage(projeto.id)}
                                            alt={projeto.titulo}
                                            width={120}
                                            height={90}
                                            className={styles.list_image_content}
                                        />
                                    </div>
                                    <div className={`${styles.list_info} ${styles.project_info}`}>
                                        <h3>{projeto.titulo}</h3>
                                        <p>{projeto.descricao}</p>
                                        <div className={styles.project_meta}>
                                            <span>{projeto.area}</span>
                                            <span> • {projeto.localizacao}</span>
                                            <span> • {projeto.ano}</span>
                                        </div>
                                        <Link
                                            href={`/architect/chatillon-architectes/project/${projeto.id}`}
                                            className={`${styles.cta} primary_button`}
                                        >
                                            Ver projeto
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            ) : null}

        </section>
    )
}
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
import Image from "next/image"
import { useState } from "react"
import InfiniteList from "@/components/InfiniteList"

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
};

const ProjectCard = ({ projeto, layout }) => {
    return (
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
    )
}

export default function ArchitectProjects({ projects }) {

    const [layout, setLayout] = useState('grid');

    return (
        <section className={styles.container}>
            <div className={styles.section_header}>
                <h2>Projetos</h2>
                <ViewToggle layout={layout} setLayout={setLayout} />
            </div>
            <div className={layout === 'grid' ? styles.projects_grid : styles.projects_list}>

                <InfiniteList
                    items={projects}
                    batchSize={3}
                    delay={2000}
                    renderItem={(projeto, index) => (
                        <ProjectCard
                            key={index}
                            projeto={projeto}
                            layout={layout}
                            getImage={getProjectImage}
                        />
                    )}
                />
            </div>

        </section>
    )
}
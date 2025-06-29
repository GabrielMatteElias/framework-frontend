import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import Image from 'next/image';
import img1 from '@/assets/foto1.png'
import img2 from '@/assets/foto2.png'
import img3 from '@/assets/foto3.png'
import img4 from '@/assets/foto4.png'
import img5 from '@/assets/foto5.png'
import img6 from '@/assets/foto6.png'
import img7 from '@/assets/foto7.png'

import { getProjetosById } from '@/data/projetos';

import dynamic from 'next/dynamic';
import { ArchitectCard } from '@/components/ArchitectCard';
import { Carousel } from '@/components/Carousel';

const MapComponent = dynamic(() => import('@/components/ProjectMapView'), {
    ssr: false,
});

export default function ProjectPage({ params }) {
    const { project_id } = params;

    const project = getProjetosById(project_id);

    const imagens = [
        img7,
        img4,
        img5,
        img1,
        img6,
        img2,
    ]

    return (
        <Container>
            <section className={styles.project_header}>
                <div className={styles.project_image}>
                    <Image
                        src={img1}
                        alt={project.titulo}
                        width={800}
                        height={450}
                        className={styles.main_image}
                    />
                </div>

                <div className={styles.project_info}>
                    <h1>{project.titulo}</h1>
                    <p className={styles.short_description}>{project.descricaoCompleta}</p>

                    <div className={styles.project_meta}>
                        <div className={styles.meta_item}>
                            <span className={styles.meta_label}>Localização:</span>
                            <span>{project.localizacao.cidade}, {project.localizacao.pais}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.project_stats}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{project.area}</div>
                    <div className={styles.stat_label}>Área Construída</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{project.ano}</div>
                    <div className={styles.stat_label}>Ano de Conclusão</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{project.seloESG ? 'Sim' : 'Não'}</div>
                    <div className={styles.stat_label}>Certificação ESG</div>
                </div>
            </section>

            <section className={styles.map_section}>
                <h2>Localização</h2>
                <div className={styles.map_container}>
                    {/* Implementação do mapa virá aqui */}
                    <div className={styles.map_placeholder}>
                        <MapComponent lat={project.localizacao.coordenadas[0]} lng={project.localizacao.coordenadas[1]} name={project.titulo} />

                    </div>
                </div>
                <p className={styles.map_note}>Endereço completo: {project.localizacao.endereco}</p>
            </section>

            <section className={styles.gallery}>
                <h2>Galeria</h2>               
                <Carousel imagens={imagens}/>
            </section>

            <section className={styles.contributors}>
                <h2>Contribuintes</h2>
                <div className={styles.contributor_grid}>
                    {project.contribuintes.map((contribuinte) => (
                        <ArchitectCard  architect={contribuinte}/>
                    ))}
                </div>
            </section>
        </Container>
    );
}
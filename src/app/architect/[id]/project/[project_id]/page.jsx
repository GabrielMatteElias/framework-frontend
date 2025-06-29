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
import Link from 'next/link';
import { MapComponent } from '@/components/ProjectMapView';

export default function ProjectPage({ params }) {
    const { project_id } = params;

    const project = getProjetosById(project_id);

    const imagens = [
        img7,
        img4,
        img5,
        img3,
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
                <div className={styles.gallery_grid}>
                    {imagens.map((image, index) => (
                        <div key={index} className={styles.gallery_item}>
                            <Image
                                src={image}
                                alt={`${project.titulo} - Imagem ${index + 1}`}
                                width={400}
                                height={300}
                                className={styles.gallery_image}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.contributors}>
                <h2>Contribuintes</h2>
                <div className={styles.contributor_grid}>
                    {project.contribuintes.map((contribuinte) => (
                        <Link
                            href={`/${contribuinte.tipo.toLowerCase().replace(' ', '-')}/${contribuinte.id}`}
                            key={contribuinte.id}
                            className={styles.contributor_link}
                        >
                            <div className={styles.contributor_card}>
                                <div className={styles.contributor_avatar}>
                                    {contribuinte.avatar.endsWith('.svg') ? (
                                        <div className={styles.company_logo}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-icon lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
                                        </div>
                                    ) : (
                                        <Image
                                            src={contribuinte.avatar}
                                            alt={contribuinte.nome}
                                            width={80}
                                            height={80}
                                        />
                                    )}
                                </div>
                                <div className={styles.contributor_info}>
                                    <h3>{contribuinte.nome}</h3>
                                    <p>{contribuinte.papel}</p>
                                    <span>{contribuinte.tipo}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </Container>
    );
}
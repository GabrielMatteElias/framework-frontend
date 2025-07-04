import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import Image from 'next/image';
import img1 from '@/assets/foto1.png'
import img2 from '@/assets/foto2.png'
import img4 from '@/assets/foto4.png'
import img5 from '@/assets/foto5.png'
import img6 from '@/assets/foto6.png'
import img7 from '@/assets/foto7.png'

import { getProjetosById } from '@/data/projetos';

import dynamic from 'next/dynamic';
import { ArchitectCard } from '@/components/ArchitectCard';
import { Carousel } from '@/components/Carousel';
import LikeButton from '@/components/LikeButton';
import { formataValorVirgula, formatNumberByCountry } from '@/utils/formaters';
import { ShareMenu } from '@/components/ShareMenu';

export async function generateMetadata({ params }) {
    const { project_id } = params
    const projeto = await getProjetosById(project_id)

    if (!projeto) {
        return {
            title: 'Projeto não encontrado - Framework',
            description: 'O arquiteto solicitado não foi encontrado.',
        }
    }

    return {
        title: `${projeto.titulo} - Framework`,
        description: projeto.descricao || 'Veja detalhes sobre este projeto arquitetônico publicado na Framework.',
        openGraph: {
            title: `${projeto.titulo} - Framework`,
            description: projeto.descricao || 'Projeto em destaque na plataforma Framework.',
            url: `https://framework-frontend-pearl.vercel.app/architect/${project_id}`,
            images: [
                {
                    url: 'https://suoviaggio.com.br/wp-content/uploads/2025/05/Grand-Palais.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Imagem do projeto ${projeto.titulo}`,
                }
            ],
            type: 'article',
            locale: 'pt_BR',
            siteName: 'Framework',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${projeto.titulo} | Projeto Arquitetônico - Framework`,
            description: projeto.descricao || '',
            images: [projeto.imagemPrincipal],
        }
    }
}

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
                        // alt={project.titulo}
                        width={800}
                        height={450}
                        className={styles.main_image}
                    />
                </div>

                <div className={styles.project_info}>
                    <div className={styles.project_title}>
                        <h1>{project.titulo}</h1>
                        <div className={styles.project_actions}>
                            <ShareMenu title={project.titulo} />
                            <LikeButton isPage />

                        </div>
                    </div>
                    <div className={styles.project_meta}>
                        <div className={styles.meta_item}>
                            <span>{project.localizacao.cidade}, {project.localizacao.pais}</span>
                            <span className={styles.meta_label}> • </span>
                            <span>{project.area}</span>
                            <span className={styles.meta_label}> • </span>
                            <span>{project.ano}</span>
                        </div>
                    </div>
                    <p className={styles.description}>{project.descricaoCompleta}</p>
                </div>
            </section>

            <section className={styles.project_stats}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{formatNumberByCountry(project.estatisticas.views, 'br')}</div>
                    <div className={styles.stat_label}>Visualizações</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{formatNumberByCountry(project.estatisticas.likes, 'br')}</div>
                    <div className={styles.stat_label}>Curtidas</div>
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
                <Carousel imagens={imagens} />
            </section>

            <section className={styles.contributors}>
                <h2>Contribuintes</h2>
                <div className={styles.contributor_grid}>
                    {project.contribuintes.map((contribuinte) => (
                        <div key={contribuinte.id}>
                            <ArchitectCard architect={contribuinte} />
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
}
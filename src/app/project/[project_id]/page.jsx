import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { ArchitectCard } from '@/components/ArchitectCard';
import { Carousel } from '@/components/Carousel';
import LikeButton from '@/components/LikeButton';
import { formatNumberByCountry } from '@/utils/formaters';
import { apiServer } from '@/services/server/apiServer';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { project_id } = params

    const { data: projeto } = await apiServer.project.getById(project_id)

    if (!projeto) {
        return {
            title: 'Projeto não encontrado - Framework',
            description: 'O arquiteto solicitado não foi encontrado.',
        }
    }

    return {
        title: `${projeto.title} - Framework`,
        description: projeto.shortDescription || 'Veja detalhes sobre este projeto arquitetônico publicado na Framework.',
        openGraph: {
            title: `${projeto.title} - Framework`,
            description: projeto.shortDescription || 'Projeto em destaque na plataforma Framework.',
            url: `https://framework-frontend-pearl.vercel.app/architect/${project_id}`,
            images: [
                {
                    url: 'https://suoviaggio.com.br/wp-content/uploads/2025/05/Grand-Palais.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Imagem do projeto ${projeto.title}`,
                }
            ],
            type: 'article',
            locale: 'pt_BR',
            siteName: 'Framework',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${projeto.title} | Projeto Arquitetônico - Framework`,
            description: projeto.shortDescription || '',
            images: [projeto.images[0]],
        }
    }
}

const MapComponent = dynamic(
    () => import('@/components/ProjectMapView').then((c) => c.MapComponent),
    { ssr: false }
)

const ShareMenu = dynamic(
    () => import('@/components/ShareMenu').then((c) => c.ShareMenu),
    { ssr: false }
)

export default async function ProjectDetailsPage({ params }) {
    const { project_id: id } = params;

    const { data: project } = await apiServer.project.getById(id);

    if (!project) {
        return (
            <Container>
                <div className="not_found">
                    <h2>Projeto não encontrado</h2>
                    <p>O projeto que você procura pode ter sido removido ou não existe.</p>
                    <Link href="/">Voltar para a página inicial</Link>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <section className={styles.project_header}>
                <div className={styles.project_image}>
                    <Image
                        src={'https://static8.depositphotos.com/1353542/887/i/450/depositphotos_8873950-stock-photo-house-sign-logo.jpg'}
                        alt={project.title}
                        width={800}
                        height={450}
                        className={styles.main_image}
                        unoptimized
                        priority
                    />
                </div>

                <div className={styles.project_info}>
                    <div className={styles.project_title}>
                        <h1>{project.title}</h1>
                        <div className={styles.project_actions}>
                            <ShareMenu title={project.title} />
                            <LikeButton isPage />

                        </div>
                    </div>
                    <div className={styles.project_meta}>
                        <div className={styles.meta_item}>
                            <span>{project.location?.city}, {project.location?.country}</span>
                            <span className={styles.meta_label}> • </span>
                            <span>{project.area}m²</span>
                            <span className={styles.meta_label}> • </span>
                            <span>
                                {/* {project.ano} */}
                                2005
                            </span>
                        </div>
                    </div>
                    <p className={styles.description}>{project.longDescription}</p>
                </div>
            </section>

            <section className={styles.project_stats}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{formatNumberByCountry(project.stats?.views, 'br')}</div>
                    <div className={styles.stat_label}>Visualizações</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{formatNumberByCountry(project.stats?.likes, 'br')}</div>
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
                    <div className={styles.map_placeholder}>
                        <MapComponent lat={project.location?.coordinates?.latitude} lng={project.location?.coordinates?.longitude} name={project.title} />

                    </div>
                </div>
                <p className={styles.map_note}>Endereço completo: {project.location?.address}</p>
            </section>

            <section className={styles.gallery}>
                <h2>Galeria</h2>
                <Carousel imagens={
                    [
                        'https://static8.depositphotos.com/1353542/887/i/450/depositphotos_8873950-stock-photo-house-sign-logo.jpg',
                        'https://s.tmimgcdn.com/scr/800x500/245100/modelo-de-logotipo-de-casa-e-construcao-v10_245131-original.jpg',
                        'https://s.tmimgcdn.com/scr/800x500/238000/logotipo-de-casa-e-simbolo-de-casa-vetor-v13_238040-original.jpg',
                        'https://i.pinimg.com/736x/9a/ca/1c/9aca1c317386c7c79d52693c52435904.jpg'
                    ]
                } />
            </section>

            <section className={styles.contributors}>
                <h2>Contribuintes</h2>
                <div className={styles.contributor_grid}>
                    {project.contributors.map((contributor) => (
                        <div key={contributor.id}>
                            <ArchitectCard architect={contributor} />
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
}
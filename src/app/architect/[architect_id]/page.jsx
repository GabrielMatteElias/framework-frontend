import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import ProfileAvatar from '@/components/Avatar';
import Badge from '@/components/arquitetoEhome/Badge';

import dynamic from 'next/dynamic';
import { ProjectCard } from '@/components/ProjectCard';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { formataData } from '@/utils/formaters';
import { apiService } from '@/services/apiService';
import Teste from '@/components/teste';

export async function generateMetadata({ params }) {
    const { architect_id: id } = params
    const { data: arquiteto } = await apiService.architect.getById(id)

    if (!arquiteto) {
        return {
            title: 'Arquiteto não encontrado - Framework',
            description: 'O arquiteto solicitado não foi encontrado.',
        }
    }

    return {
        title: `${arquiteto.name} - Framework`,
        description: arquiteto.subtitle,
        openGraph: {
            title: `${arquiteto.name} - Framework`,
            description: arquiteto.subtitle,
            url: `https://framework-frontend-pearl.vercel.app/architect/${id}`,
            images: [
                {
                    url: arquiteto.picture,
                    width: 1200,
                    height: 630,
                    alt: `Foto de ${arquiteto.name}`
                }
            ],
            type: 'profile',
        }
    }
}

export default async function ArquitetoDetailsPage({ params }) {

    const { architect_id: id } = params;

    const { data: teste } = await apiService.test.get();

    const { data: arquiteto } = await apiService.architect.getById(id);

    const { data: projetos } = await apiService.architect.getProjects(id);

    const EditArchitectModalButton = dynamic(() => import('./components/EditArchitectModal/index.jsx'), {
        ssr: false,
    });

    const NewProjectModalButton = dynamic(() => import('./components/NewProject/index.jsx'), {
        ssr: false,
    });

    if (!arquiteto) {
        return (
            <Container>
                <div className='not_found'>
                    <h1>Arquiteto não encontrado</h1>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <section className={styles.profile_header}>
                <div className={styles.profile_avatar_container}>
                    <ProfileAvatar
                        image={arquiteto.picture}
                        name='Chatillon Architectes'
                        width={120}
                        height={120} />
                    {arquiteto.verified && (
                        <div className={styles.verified_badge}>
                            <Badge type="verified" size='large' />
                        </div>
                    )}
                </div>
<Teste />
                <div className={styles.profile_info}>
                    <div className={styles.name}>
                        <h1>{arquiteto.name}</h1>
                        {arquiteto.verified && (
                            <div>
                                <VerifiedBadge disableClick={false} architectName={arquiteto.name} width={21} />
                            </div>
                        )}
                    </div>
                    <p className={styles.location}>
                        {arquiteto.location.city}, {arquiteto.location.state}, {arquiteto.location.country}
                    </p>

                    <div className={styles.social_links}>
                        {arquiteto.socialMedia?.linkedin && (
                            <a href={arquiteto.socialMedia?.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        )}
                        {arquiteto.socialMedia?.instagram && (
                            <a href={arquiteto.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        )}
                        {arquiteto.socialMedia?.portfolio && (
                            <a href={arquiteto.socialMedia?.portfolio} target="_blank" rel="noopener noreferrer">
                                Portfólio
                            </a>
                        )}
                    </div>
                </div>

                <EditArchitectModalButton architect={arquiteto} />
                <NewProjectModalButton />
            </section>

            <section className={styles.personal_info}>
                <div className={styles.info_card}>
                    <h2>Informações Pessoais</h2>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Data de Nascimento:</span>
                        <span>{formataData(arquiteto.birthDate)}</span>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Formação:</span>
                        <span>{arquiteto.training?.name}, {arquiteto.training?.year}</span>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Especialidades:</span>
                        <div className={styles.specialties}>
                            {arquiteto.speciality.map((especialidade, index) => (
                                <span key={index} className={styles.specialty_tag}>{especialidade}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.bio_card}>
                    <h2>Biografia</h2>
                    <p>{arquiteto.biography}</p>
                </div>
            </section>

            <section className={styles.statistics}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.stats.totalProjects}</div>
                    <div className={styles.stat_label}>Projetos</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.stats?.esgProjects}</div>
                    <div className={styles.stat_label}>Projetos ESG</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.stats?.views.toLocaleString()}</div>
                    <div className={styles.stat_label}>Visualizações</div>
                </div>
            </section>

            <ProjectCard project={projetos} title='Projetos' viewToggle />

        </Container >
    );
}
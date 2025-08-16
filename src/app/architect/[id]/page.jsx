import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import ProfileAvatar from '@/components/Avatar';
import { getProjetosByArquiteto } from '@/data/projetos';
import Badge from '@/components/arquitetoEhome/Badge';
import { getArquitetoById } from '@/data/arquitetos';

import dynamic from 'next/dynamic';
import { ProjectCard } from '@/components/ProjectCard';
import { VerifiedBadge } from '@/components/VerifiedBadge';

export async function generateMetadata({ params }) {
    const { id } = params
    const arquiteto = getArquitetoById(id)

    if (!arquiteto) {
        return {
            title: 'Arquiteto não encontrado - Framework',
            description: 'O arquiteto solicitado não foi encontrado.',
        }
    }

    return {
        title: `${arquiteto.nome} - Framework`,
        description: arquiteto.subtitulo,
        openGraph: {
            title: `${arquiteto.nome} - Framework`,
            description: arquiteto.subtitulo,
            url: `https://framework-frontend-pearl.vercel.app/architect/${id}`,
            images: [
                {
                    url: arquiteto.foto,
                    width: 1200,
                    height: 630,
                    alt: `Foto de ${arquiteto.nome}`
                }
            ],
            type: 'profile',
        }
    }
}

async function getArchitect(id) {
    const res = await fetch(`http://localhost:3000/api/architects/${id}`, {
        cache: "no-store"
    });

    if (!res.ok) throw new Error("Erro ao buscar arquiteto: " + res.status);

    return res.json();
}

export default async function ArquitetoPage({ params, searchParams }) {

    const { id } = params;
    const modalAberto = searchParams?.modal === 'newProject';
console.log('AQUI', modalAberto);

    const arquiteto = await getArchitect(id);

    const projetos = getProjetosByArquiteto(id);

    const EditArchitectModalButton = dynamic(() => import('./components/EditArchitectModal/index.jsx'), {
        ssr: false,
    });

    const NewProjectModalButton = dynamic(() => import('./components/NewProject/index.jsx'), {
        ssr: false,
    });

    if (!arquiteto) {
        return (
            <Container>
                <div className={styles.not_found}>
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
                        image={arquiteto.foto}
                        name='Chatillon Architectes'
                        width={120}
                        height={120} />
                    {arquiteto.destaque && (
                        <div className={styles.verified_badge}>
                            <Badge type="verified" size='large' />
                        </div>
                    )}
                </div>

                <div className={styles.profile_info}>
                    <div className={styles.name}>
                        <h1>{arquiteto.nome}</h1>
                        {arquiteto.destaque && (
                            <div>
                                <VerifiedBadge disableClick={false} architectName={arquiteto.nome} width={21} />
                            </div>
                        )}
                    </div>
                    <p className={styles.location}>
                        {arquiteto.localizacao.cidade}, {arquiteto.localizacao.estado}, {arquiteto.localizacao.pais}
                    </p>

                    <div className={styles.social_links}>
                        {arquiteto.redesSociais.linkedin && (
                            <a href={arquiteto.redesSociais.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        )}
                        {arquiteto.redesSociais.instagram && (
                            <a href={arquiteto.redesSociais.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        )}
                        {arquiteto.redesSociais.portfolio && (
                            <a href={arquiteto.redesSociais.portfolio} target="_blank" rel="noopener noreferrer">
                                Portfólio
                            </a>
                        )}
                    </div>
                </div>

                <EditArchitectModalButton arquiteto={arquiteto} />
                <NewProjectModalButton arquiteto={arquiteto} isOpen={modalAberto} />

            </section>

            <section className={styles.personal_info}>
                <div className={styles.info_card}>
                    <h2>Informações Pessoais</h2>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Data de Nascimento:</span>
                        <span>{arquiteto.dataNascimento}</span>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Formação:</span>
                        <span>{arquiteto.formacao.instituicao}, {arquiteto.formacao.ano}</span>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.info_label}>Especialidades:</span>
                        <div className={styles.specialties}>
                            {arquiteto.especialidades.map((especialidade, index) => (
                                <span key={index} className={styles.specialty_tag}>{especialidade}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.bio_card}>
                    <h2>Biografia</h2>
                    <p>{arquiteto.biografia}</p>
                </div>
            </section>

            <section className={styles.statistics}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.estatisticas.totalProjetos}</div>
                    <div className={styles.stat_label}>Projetos</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.estatisticas.projetosESG}</div>
                    <div className={styles.stat_label}>Projetos ESG</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_value}>{arquiteto.estatisticas.visualizacoes.toLocaleString()}</div>
                    <div className={styles.stat_label}>Visualizações</div>
                </div>
            </section>

            <ProjectCard project={projetos} title='Projetos' viewToggle />

        </Container >
    );
}

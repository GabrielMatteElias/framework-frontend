import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import ProfileAvatar from '@/components/Avatar';
import { getProjetosByArquiteto } from '@/data/projetos';
import Badge from '@/components/arquitetoEhome/Badge';
import { getArquitetoById } from '@/data/arquitetos';

import ArchitectProjects from './components/Projetos';
import dynamic from 'next/dynamic';

export default function ArquitetoPage({ params }) {

    const { id } = params;

    const arquiteto = getArquitetoById(id);
    const projetos = getProjetosByArquiteto(id);
    console.log(arquiteto.foto);
    

    const EditArchitectModalButton = dynamic(() => import('./components/EditArchitectModal/EditArchitectModal.jsx'), {
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
                    {arquiteto.verificado && (
                        <div className={styles.verified_badge}>
                            <Badge type="verified" size='large' />
                        </div>
                    )}
                </div>

                <div className={styles.profile_info}>
                    <h1>{arquiteto.nome}</h1>
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
            <ArchitectProjects projects={projetos} />
        </Container>
    );
}

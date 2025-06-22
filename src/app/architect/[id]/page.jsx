import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import ProfileAvatar from '@/components/Avatar';
import Image from 'next/image';
import { getProjetosByArquiteto } from '@/data/projetos';
import Badge from '@/components/arquitetoEhome/Badge';
import { getArquitetoById } from '@/data/arquitetos';
import Link from 'next/link';

import reformaGrandParis from '@/assets/foto4.png'
import casaSustentavel from '@/assets/casa_sustentavel.webp'
import orlaGuaiba from '@/assets/revitalizacao-orla-guaiba.webp'
import museuNacional from '@/assets/museu-nacional-rj.webp'
import edificioComercial from '@/assets/edificio-comercial.webp'
import hafencityHamburgo from '@/assets/hafencity-hamburgo.webp'
import seloESG from '@/assets/selo-esg.png'

export default function ArquitetoPage({ params }) {

    const { id } = params;

    const arquiteto = getArquitetoById(id);
    const projetos = getProjetosByArquiteto(id);

    if (!arquiteto) {
        return (
            <Container>
                <div className={styles.not_found}>
                    <h1>Arquiteto não encontrado</h1>
                </div>
            </Container>
        );
    }

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
        <main>
            <Container>
                <section className={styles.profile_header}>
                    <div className={styles.profile_avatar_container}>
                        <ProfileAvatar
                            image='https://x.share-architects.com/wp-content/uploads/2024/08/venice.share-architects.com-speakers-francois-chatillon.jpg'
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

                <section className={styles.projects_section}>
                    <h2>Projetos</h2>
                    <div className={styles.projects_grid}>
                        {projetos.map((projeto) => (
                            <div key={projeto.id} className={`${styles.project_card} ${projeto.seloESG ? styles.esg : ''}`}>
                                <div className={styles.project_image}>
                                    <Image
                                        src={getProjectImage(projeto.id)}
                                        alt={projeto.titulo}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                        className={styles.project_image_content}
                                    />
                                    {projeto.seloESG && (
                                        <div>
                                            <Image
                                                src={seloESG}
                                                alt='Selo ESG'
                                                className={styles.esg_badge}
                                                layout="responsive"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.project_info}>
                                    <h3>{projeto.titulo}</h3>
                                    <p>{projeto.descricao}</p>
                                    <div className={styles.project_meta}>
                                        <span>{projeto.area}</span>
                                        <span> • {projeto.localizacao}</span>
                                        <span> • {projeto.ano}</span>
                                    </div>
                                    <Link href={`/architect/chatillon-architectes/project/${projeto.id}`} className={styles.view_project}>
                                        Ver projeto
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}

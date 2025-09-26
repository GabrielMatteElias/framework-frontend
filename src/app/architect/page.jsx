// import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Container } from '@/components/Container';
import ProfileAvatar from '@/components/Avatar';
import Link from 'next/link';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import Filtros from './components';
import { apiServer } from '@/services/server/apiServer';

export default async function ArchitectPage() {

    const { data: architects } = await apiServer.architect.getAll();

    // const [filtros, setFiltros] = useState({ localizacao: '', tipo: '', esg: false, experiencia: '', ordenacao: '' });

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFiltros({ ...filtros, [name]: type === 'checkbox' ? checked : value });
    // };

    // const filtrados = arquiteto.filter((arq) => {
    //     return (
    //         (!filtros.localizacao || arq.localizacao.includes(filtros.localizacao)) &&
    //         (!filtros.tipo || arq.subtitulo === filtros.tipo) &&
    //         (!filtros.experiencia ||
    //             (filtros.experiencia === '0-5' && arq.anosExperiencia <= 5) ||
    //             (filtros.experiencia === '5-10' && arq.anosExperiencia > 5 && arq.anosExperiencia <= 10) ||
    //             (filtros.experiencia === '10+' && arq.anosExperiencia > 10)) &&
    //         (!filtros.esg || arq.esg === true)
    //     );
    // });

    // const [showFiltroModal, setShowFiltroModal] = useState(false);

    // const toggleFiltroModal = () => setShowFiltroModal(prev => !prev);

    return (
        <Container>
            <section className='hero'>
                <h2>Encontre o Arquiteto Ideal</h2>
                <p>Filtre por localização, especialidade e muito mais</p>
            </section>

            {/* <button className={styles.btnFiltroMobile} onClick={() => setShowFiltroModal(true)}>
                Filtrar
            </button> */}

            {/* Filtros desktop sticky */}
            {/* <section className={styles.filtrosDesktop}>
                <Filtros handleChange={handleChange} />
            </section> */}

            {/* {showFiltroModal && (
                <div className={styles.filtroModalOverlay} onClick={() => setShowFiltroModal(false)}>
                    <div className={styles.filtroModalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setShowFiltroModal(false)}>×</button>
                        <h2>Filtros</h2>
                        <div className={styles.filtrosMobile}>
                            <Filtros handleChange={handleChange} />
                            <button
                                className={styles.applyButton}
                                onClick={() => setShowFiltroModal(false)}
                            >
                                Aplicar Filtros
                            </button>
                        </div>
                    </div>
                </div>
            )} */}

            <section className={styles.listaArquitetos}>
                {Array.isArray(architects) && architects.length > 0 ? (
                    architects.map((arq) => (
                        <Link key={arq.id} href={`/architect/${arq.id}`} className={styles.arquitetoItem}>
                            <div className={styles.avatar}>
                                <ProfileAvatar image={arq.picture} width={80} height={80} />
                            </div>
                            <div className={styles.arquitetoInfo}>
                                <div className={styles.name}>
                                    <h3>{arq.name}</h3>
                                    {arq.trending && (
                                        <div className={styles.verifiedBadge}>
                                            <VerifiedBadge />
                                        </div>
                                    )}
                                </div>
                                <p className={styles.titulo}>{arq.subtitle}</p>
                                <p className={styles.local}>
                                    {arq.location?.city}, {arq.location?.country}
                                </p>
                                <p className={styles.projetos}>{arq.stats?.totalProjects ?? 0} projetos publicados</p>
                            </div>
                            <div className={styles.acao}>
                                <button className="secundary_button">Ver perfil</button>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Nenhum arquiteto encontrado.</p>
                )}
            </section>
        </Container >
    );
}
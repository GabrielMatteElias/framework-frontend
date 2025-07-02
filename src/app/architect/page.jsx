'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Container } from '@/components/Container';
import ProfileAvatar from '@/components/Avatar';
import Link from 'next/link';
import { arquitetos } from '@/data/arquitetos';
import { VerifiedBadge } from '@/components/VerifiedBadge';

export default function ArchitectPage() {

    const architects = arquitetos

    const [filtros, setFiltros] = useState({ localizacao: '', tipo: '', esg: false, experiencia: '', ordenacao: '' });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFiltros({ ...filtros, [name]: type === 'checkbox' ? checked : value });
    };

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

    return (
        <Container>
            <section className={styles.hero}>
                <h1>Encontre o Arquiteto Ideal</h1>
                <p>Filtre por localização, especialidade e muito mais</p>
            </section>
            <section className={styles.filtros}>
                <input name="localizacao" placeholder="Localização" onChange={handleChange} />

                <select name="tipo" onChange={handleChange} defaultValue="">
                    <option value="">Tipo de Arquitetura</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Urbano">Urbano</option>
                    <option value="Sustentável">Sustentável</option>
                </select>

                <select name="experiencia" onChange={handleChange} defaultValue="">
                    <option value="">Anos de experiência</option>
                    <option value="0-5">0-5 anos</option>
                    <option value="5-10">5-10 anos</option>
                    <option value="10+">10+ anos</option>
                </select>

                <select name="formacao" onChange={handleChange} defaultValue="">
                    <option value="">Formação Acadêmica</option>
                    <option value="USP">USP</option>
                    <option value="UFPR">UFPR</option>
                    <option value="UFRJ">UFRJ</option>
                    <option value="Outros">Outros</option>
                </select>

                <select name="qtdProjetos" onChange={handleChange} defaultValue="">
                    <option value="">Projetos Publicados</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11+">11+</option>
                </select>

                <select name="qtdProjetos" onChange={handleChange} defaultValue="">
                    <option value="">Verificado</option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                </select>

                <label>
                    <input type="checkbox" name="esg" onChange={handleChange} /> Selo ESG
                </label>
            </section>


            <section className={styles.listaArquitetos}>
                {architects.map((arq) => (
                    <Link key={arq.id} href={`/architect/${arq.id}`} className={styles.arquitetoItem}>
                        <div className={styles.avatar}>
                            <ProfileAvatar
                                image={arq.foto}
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className={styles.arquitetoInfo}>
                            <div className={styles.name}>
                                <h3>{arq.nome}</h3>
                                {arq.destaque && (
                                    <div className={styles.verifiedBadge}>
                                        <VerifiedBadge />
                                    </div>
                                )}
                            </div>
                            <p className={styles.titulo}>{arq.subtitulo}</p>
                            <p className={styles.local}>{arq.localizacao.cidade}, {arq.localizacao.pais}</p>
                            <p className={styles.projetos}>{arq.projetosPublicados.length} projetos publicados</p>
                        </div>
                        <div className={styles.acao}>
                            <button className='secundary_button'>Ver perfil</button>
                        </div>
                    </Link>
                ))}
            </section>
        </Container >
    );
}

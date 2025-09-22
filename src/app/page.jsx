import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import { arquitetos } from '@/data/arquitetos';

import SearchAndFilters from '../components/SearchAndFilters';
import Link from 'next/link';
import { ArchitectCard } from '@/components/ArchitectCard';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjetosDestaque, getProjetosESG } from '@/data/projetos';

async function getAllProjects() {
    const res = await fetch(`http://zenith:5000/api/project`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Erro ao buscar arquiteto: " + res.status);

    return res.json();
}

export default async function HomePage() {
  const arquitetosDestaque = arquitetos;

  const projetos = await getAllProjects();

  return (
    <Container>
      <section className={styles.hero_banner}>
        <div className={styles.hero_content}>
          <h1>Boas ideias para mudar um mundo em construção</h1>
          <p>Conectando os melhores arquitetos com projetos que respeitam o meio ambiente e transformam vidas.</p>
          <Link href="/cadastro" className='primary_button'>
            Quero cadastrar meu perfil
          </Link>
        </div>
      </section>

      <SearchAndFilters />

      <section className={styles.featured_projects}>
        <div className={styles.section_header}>
          <h2>Projetos</h2>
          <Link href="/project" className='view_all'>Ver todos</Link>
        </div>
        <ProjectCard project={projetos} />
      </section>

      {/* Seção de Arquitetos em Destaque */}
      <section className={styles.featured_architects}>
        <div className={styles.section_header}>
          <h2>Arquitetos em Destaque</h2>
          <Link href="/architect" className='view_all'>Ver todos</Link>
        </div>
        <div className={styles.architects_grid}>
          {arquitetosDestaque.map((architect) => (
            <div key={architect.id}>
              <ArchitectCard architect={architect} />
            </div>
          ))}
        </div>
      </section>

      {/* <section className={styles.esg_projects}>
        <div className={styles.section_header}>
          <h2>Projetos com Selo ESG</h2>
          <a href="/projetos/esg" className='view_all'>Ver todos</a>
        </div>
        <div className={styles.esg_grid}>
          {projetosESG.slice(0, 3).map((projeto) => (
            <div key={projeto.id} className={`${styles.project_card} ${projeto.seloESG && 'esg'}`}>
              <div className={styles.project_image}>
                <Image
                  src={getProjectImage(projeto.id)}
                  alt={projeto.titulo}
                  width={400}
                  height={300}
                />
              </div>
              <div className={styles.project_info}>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className={styles.project_meta}>
                  <span>{projeto.area}</span>
                  <span> • {projeto.localizacao.cidade}, {projeto.localizacao.pais}</span>
                  <span> • {projeto.ano}</span>
                </div>
                <div className={styles.project_architect}>
                  {arquitetos.find(arq => arq.id === projeto.arquitetoId)?.nome}
                </div>
                <a href={`/architect/chatillon-architectes/project/${projeto.id}`} className='primary_button'>
                  Ver projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className={styles.how_it_works}>
        <h2>Como Funciona</h2>
        <div className={styles.steps_container}>
          <div className={styles.step}>
            <div className={styles.step_number}>1</div>
            <h3>Crie seu perfil</h3>
            <p>Cadastre-se gratuitamente e crie seu perfil profissional destacando sua formação e especialidades.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.step_number}>2</div>
            <h3>Adicione seus projetos</h3>
            <p>Compartilhe seus melhores trabalhos com fotos, descrições e informações técnicas.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.step_number}>3</div>
            <h3>Conecte-se</h3>
            <p>Seja descoberto por clientes e colabore com outros profissionais em novos projetos.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.step_number}>4</div>
            <h3>Destaque-se</h3>
            <p>Projetos sustentáveis recebem o selo ESG e ganham visibilidade especial na plataforma.</p>
          </div>
        </div>
        <div className={styles.cta_container}>
          <a href="/cadastro" className='primary_button'>
            Quero cadastrar meu perfil
          </a>
        </div>
      </section>
    </Container>
  );
}
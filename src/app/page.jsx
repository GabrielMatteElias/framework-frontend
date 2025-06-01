'use client'
import { Container } from '@/components/arquitetoEhome/Container';
import styles from './page.module.css';
import Image from 'next/image';
import { getProjetosDestaque, getProjetosESG } from '@/data/projetos';
import { arquitetos } from '@/data/arquitetos';
import Badge from '@/components/arquitetoEhome/Badge';
import { useState } from 'react';
import SearchBar from '@/components/arquitetoEhome/SearchBar';
import FilterBar from '@/components/arquitetoEhome/FilterBar';
import reformaGrandParis from '@/assets/foto4.png'
import casaSustentavel from '@/assets/casa_sustentavel.webp'

export default function HomePage() {
  const projetosDestaque = getProjetosDestaque();
  const projetosESG = getProjetosESG();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <main>
      <Container>
        <section className={styles.hero_banner}>
          <div className={styles.hero_content}>
            <h1>Arquitetura Sustentável para um Futuro Melhor</h1>
            <p>Conectando os melhores arquitetos com projetos que respeitam o meio ambiente e transformam vidas.</p>
            <a href="/cadastro" className={styles.cta_button}>
              Quero cadastrar meu perfil
            </a>
          </div>
        </section>

        <section className={styles.search_section}>
          <div className={styles.search_container}>
            <SearchBar onSearch={handleSearch} placeholder="Buscar por nome do arquiteto ou projeto..." />
            <FilterBar
              filters={[
                { id: 'todos', label: 'Todos' },
                { id: 'residencial', label: 'Residencial' },
                { id: 'comercial', label: 'Comercial' },
                { id: 'urbano', label: 'Urbano' },
                { id: 'sustentavel', label: 'Sustentável' },
                { id: 'esg', label: 'Selo ESG' }
              ]}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </section>

        <section className={styles.featured_projects}>
          <div className={styles.section_header}>
            <h2>Projetos em Destaque</h2>
            <a href="/projetos" className={styles.view_all}>Ver todos</a>
          </div>
          <div className={styles.projects_grid}>
            {projetosDestaque.map((projeto) => (
              <div key={projeto.id} className={`${styles.project_card} ${projeto.seloESG ? styles.esg : ''}`} style={{display: projeto.seloESG ? 'none' : ''}}>
                <div className={styles.project_image}>
                  <Image
                    src={projeto.id == 'le-grand-palais' ? reformaGrandParis : casaSustentavel}
                    alt={projeto.titulo}
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                  {projeto.seloESG && (
                    <div className={styles.esg_badge}>
                      <Badge type="esg" />
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
                  <div className={styles.project_architect}>
                    {arquitetos.find(arq => arq.id === projeto.arquitetoId)?.nome}
                  </div>
                  <a href={`/projetos/${projeto.id}`} className={styles.view_project}>
                    Ver projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.esg_projects}>
          <div className={styles.section_header}>
            <h2>Projetos com Selo ESG</h2>
            <a href="/projetos/esg" className={styles.view_all}>Ver todos</a>
          </div>
          <div className={styles.esg_grid}>
            {projetosESG.slice(0, 3).map((projeto) => (
              <div key={projeto.id} className={`${styles.project_card} ${projeto.seloESG ? styles.esg : ''}`}>
                <div className={styles.project_image}>
                  <Image
                    src={projeto.id == 'le-grand-palais' ? reformaGrandParis : casaSustentavel}
                    alt={projeto.titulo}
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                  {projeto.seloESG && (
                    <div className={styles.esg_badge}>
                      <Badge type="esg" />
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
                  <div className={styles.project_architect}>
                    {arquitetos.find(arq => arq.id === projeto.arquitetoId)?.nome}
                  </div>
                  <a href={`/projetos/${projeto.id}`} className={styles.view_project}>
                    Ver projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            <a href="/cadastro" className={styles.cta_button_large}>
              Quero cadastrar meu perfil
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footer_content}>
            <div className={styles.footer_column}>
              <h3>Plataforma</h3>
              <ul>
                <li><a href="/sobre">Sobre nós</a></li>
                <li><a href="/como-funciona">Como funciona</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/termos">Termos de uso</a></li>
              </ul>
            </div>
            <div className={styles.footer_column}>
              <h3>Explore</h3>
              <ul>
                <li><a href="/arquitetos">Arquitetos</a></li>
                <li><a href="/projetos">Projetos</a></li>
                <li><a href="/projetos/esg">Projetos ESG</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div className={styles.footer_column}>
              <h3>Siga-nos</h3>
              <div className={styles.social_footer}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Plataforma para Arquitetos. Todos os direitos reservados.
          </div>
        </footer>
      </Container>
    </main>
  );
}

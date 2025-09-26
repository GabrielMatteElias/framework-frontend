'use client';

import { useState, useMemo } from 'react';
import NewsCard from './components/NewsItem/index';
import Sidebar from './components/Sidebar/index'; // Novo componente
import { mockNews } from '../../data/mockNews';
import styles from './page.module.css';
import { Container } from '@/components/Container';

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNews = useMemo(() => {
        return mockNews.filter(news => {
            const matchesCategory = activeCategory === 'Todos' || news.category === activeCategory;

            const matchesSearch = searchQuery === '' ||
                news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <Container>
            <section className='hero'>
                <h2>Notícias</h2>
                <p>Fique por dentro das últimas tendências e projetos inspiradores no mundo da arquitetura</p>
            </section>

            <div className={styles.content_wrapper}>
                <section className={styles.news_grid}>
                    {mockNews.length > 0 ? (
                        mockNews.map(news => (
                            <NewsCard key={news.id} news={news} />
                        ))
                    ) : (
                        <p className={styles.no_results}>Nenhuma notícia encontrada com os filtros aplicados.</p>
                    )}
                </section>

                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>

        </Container>
    );
}
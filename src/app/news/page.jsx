
import NewsItem from './components/NewsItem/index';
import Sidebar from './components/Sidebar/index';
import { mockNews } from '../../data/mockNews';
import styles from './page.module.css';
import { Container } from '@/components/Container';

export default function NewsPage() {
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
                            <NewsItem key={news.id} news={news} />
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
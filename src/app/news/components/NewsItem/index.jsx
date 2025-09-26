import Link from 'next/link';
import styles from './index.module.css';

const NewsItem = ({ news }) => {
    return (
        <article className={styles.news_card}>
            <div className={styles.image_container}>
                <img src={news.image} alt={news.title} className={styles.image} />
            </div>
            
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                </h2>
                
                <div className={styles.meta}>
                    <span className={styles.date}>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
                    {news.views && (
                        <span className={styles.views}>{news.views} visualizações</span>
                    )}
                </div>

                <div className={styles.description}>
                    <p>{news.excerpt}</p>
                    
                    {news.bulletPoints && news.bulletPoints.length > 0 && (
                        <ul className={styles.bullet_points}>
                            {news.bulletPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className={styles.actions}>
                    <Link href={`/news/${news.id}`} className='view_all'>
                        Saiba mais &gt;
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default NewsItem;
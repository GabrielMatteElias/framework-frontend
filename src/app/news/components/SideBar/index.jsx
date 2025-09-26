import styles from './index.module.css';

const SideBar = () => {
    const trendingNews = [
        {
            id: 1,
            title: 'Casa Trem / ARKITITO',
            date: '15 Mar 2024'
        },
        {
            id: 2,
            title: 'Casa dos Mores / Marlene Uldschmidt',
            date: '12 Mar 2024'
        },
        {
            id: 3,
            title: 'Casa Garagem / fala',
            date: '10 Mar 2024'
        }
    ];

    const events = [
        {
            id: 1,
            title: 'Feira Internacional de Arquitetura',
            date: '25-28 Mar 2024',
        },
        {
            id: 2,
            title: 'Workshop Sustentabilidade',
            date: '5 Abr 2024',
        }
    ];

    const popularProducts = [
        {
            id: 1,
            name: 'Forros Metálicos/Hunter Douglas Brasil',
        }
    ];

    return (
        <div className={styles.sidebar}>
            <section className={styles.sidebar_section}>
                <h3 className={styles.sidebar_title}>Notícias em Alta</h3>
                <div className={styles.trending_list}>
                    {trendingNews.map(item => (
                        <div key={item.id} className={styles.trending_item}>
                            <span className={styles.trending_category}>{item.category}</span>
                            <h4 className={styles.trending_title}>{item.title}</h4>
                            <span className={styles.trending_date}>{item.date}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.sidebar_section}>
                <h3 className={styles.sidebar_title}>Próximos Eventos</h3>
                <div className={styles.events_list}>
                    {events.map(event => (
                        <div key={event.id} className={styles.event_item}>
                            <h4 className={styles.event_title}>{event.title}</h4>
                            <div className={styles.event_details}>
                                <span className={styles.event_date}>{event.date}</span>
                                <span className={styles.event_location}>{event.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.sidebar_section}>
                <h3 className={styles.sidebar_title}>Produtos Mais Visitados</h3>
                <div className={styles.products_list}>
                    {popularProducts.map(product => (
                        <div key={product.id} className={styles.product_item}>
                            <h4 className={styles.product_name}>{product.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SideBar;
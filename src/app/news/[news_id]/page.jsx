import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { Container } from '@/components/Container';
import { apiService } from '@/services/apiService';
import { formataData } from '@/utils/formaters';
import Image from 'next/image';

const ShareMenu = dynamic(
    () => import('@/components/ShareMenu').then((c) => c.ShareMenu),
    { ssr: false }
);

const texto = `Recentes expedições na região revelaram espécies de plantas e animais até então desconhecidas pela ciência, reforçando a importância da conservação ambiental. Além da riqueza natural, a Amazônia também concentra comunidades que preservam práticas tradicionais e conhecimentos ancestrais, oferecendo insights valiosos sobre sustentabilidade e manejo dos recursos naturais.
O desafio, segundo especialistas, é equilibrar exploração científica e preservação ambiental. Projetos de pesquisa buscam registrar e estudar espécies sem causar impacto, utilizando tecnologia de ponta, como drones e sensores remotos, para mapear áreas inacessíveis da floresta.
A Amazônia também desperta interesse cultural e econômico, mas com grande responsabilidade: é essencial que políticas públicas e iniciativas privadas trabalhem juntas para proteger este patrimônio único do planeta. A descoberta de novos segredos e a valorização do conhecimento local podem transformar nossa relação com o meio ambiente, mostrando que preservar é, ao mesmo tempo, explorar de forma consciente.`

export default async function NewsPage({ params }) {
    const { news_id: id } = params
    const { data: news } = await apiService.news.getById(id);

    const getHeroBanner = () => {
        const choseImage = news.images.find(img => img.first === true);
        const imageUrl = choseImage.image

        return imageUrl
    }

    return (
        <Container>
            <div className={styles.hero}>
                <Image
                    src='https://assets.superhivemarket.com/store/product/225590/image/xlarge-6ef3915f4eb6af40e239a5e7e67f4741.jpg'
                    alt={news.title}
                    className={styles.heroImage}
                    width='750'
                    height='600'
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.title}>{news.title}</h1>
                </div>
            </div>

            <article className={styles.content}>
                <div className={styles.intro}>
                    <div>
                        <p className={styles.date}>Escrito por FrameWork</p>
                        <p className={styles.date}>Publicado em {formataData(news.date)}</p>
                    </div>
                    <ShareMenu title={news.title} showLabel />
                </div>
                <div
                    className={styles.body}
                >
                    <p>{texto}</p>
                </div>
            </article>

            <footer className={styles.footer}>
                <h2>TAGS</h2>
                <div className={styles.tags}>
                    {news.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </footer>
        </Container>);
}

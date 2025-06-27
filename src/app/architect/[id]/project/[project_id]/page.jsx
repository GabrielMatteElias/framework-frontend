import { Container } from '@/components/Container';
import styles from './page.module.css'
import AvatarImageGroup from '@/components/AvatarGroup';

import gabriel from '@/assets/gabriel_arquiteto.png'
import fernando from '@/assets/fernando_arquiteto.png'
import ProfileAvatar from '@/components/Avatar';
import Image from 'next/image';

import foto1 from '@/assets/foto1.png'
import foto4 from '@/assets/foto4.png'
import foto5 from '@/assets/foto5.png'
import foto6 from '@/assets/foto6.png'
import foto7 from '@/assets/foto7.png'
import Link from 'next/link';

const contributors = [
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
]

export const metadata = {
    title: "Le Grand Palais - Gabriel Matte Elias",
    description: "Project Le Grand Palais by Gabriel Matte Elias",
};

export default function ({ params }) {

    return (
        <main>
            <Container>
                <section className={styles.project_content}>
                    <h1>
                        Reforma do Le Grand Palais
                    </h1>

                    <div>
                        <ul className={styles.info}>
                            <li>72000m²</li>
                            <li> • Paris, França</li>
                            <li> • 2015</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className={styles.gallery}>
                        <div className={styles.main_image}>
                            <Image
                                alt={'Imagem'}
                                quality={100}
                                priority
                                src={foto7}
                            />
                        </div>

                        <div className={styles.secondary_images}>
                            <Image
                                alt={'Imagem'}
                                quality={100}
                                priority
                                src={foto6}
                            />
                            <Image
                                alt={'Imagem'}
                                quality={100}
                                priority
                                src={foto5}
                            />
                            <Image
                                alt={'Imagem'}
                                quality={100}
                                priority
                                src={foto4}
                            />
                            <Image
                                alt={'Imagem'}
                                quality={100}
                                priority
                                src={foto1}
                            />
                        </div>
                    </div>

                    <section className={styles.description}>
                        <p>
                            A reforma do Grand Palais em Paris visa preservar e modernizar este ícone da arquitetura Beaux-Arts,
                            inaugurado em 1900. O projeto, liderado por especialistas, restaurará a cúpula de vidro e ferro, melhorará a
                            eficiência energética e atualizará a infraestrutura para atender às normas de segurança e acessibilidade.
                            Os espaços internos serão reorganizados para maior flexibilidade, com novos acessos criados. A intervenção
                            equilibra a preservação do legado histórico com as necessidades contemporâneas.
                        </p>
                    </section>
                </section>

                <section className={styles.architect_content}>
                    <Link href='/architect/chatillon-architectes' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem', alignItems: 'center' }}>
                        <ProfileAvatar
                            image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg'
                            name='Chatillon Architectes'
                            width={90}
                            height={90} />
                        <p className={styles.archutect_name}>Chatillon Architectes</p>
                    </Link>
                </section>

                <section className={styles.contributors}>
                    <div>
                        <h2>Project contributors</h2>
                    </div>
                    <div className={styles.contributors_profile}>
                        <AvatarImageGroup avatars={contributors} />
                    </div>
                </section>

            </Container>
        </main>
    )
}
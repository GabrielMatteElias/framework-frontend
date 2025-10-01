import Link from 'next/link'
import styles from './index.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                {/* <div className={styles.footer_column}>
                    <h3>Plataforma</h3>
                    <ul>
                        <li><Link href="/sobre">Sobre nós</Link></li>
                        <li><Link href="/como-funciona">Como funciona</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                        <li><Link href="/termos">Termos de uso</Link></li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h3>Explore</h3>
                    <ul>
                        <li><Link href="/architect">Arquitetos</Link></li>
                        <li><Link href="/project">Projetos</Link></li>
                        <li><Link href="/projetos/esg">Selo ESG</Link></li>
                    </ul>
                </div> */}
                <div className={styles.footer_column}>
                    <h3>Siga-nos</h3>
                    <div className={styles.social_footer}>
                        <Link href="https://www.instagram.com/framework.br" target="_blank" rel="noopener noreferrer">Instagram</Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} Plataforma para Arquitetos. Todos os direitos reservados.
            </div>
        </footer>
    )
}
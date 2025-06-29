import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
export function ArchitectCard({ architect }) {    
    return (
        <Link
            href={`/architect/${architect.id}`}
            key={architect.id}
            className={styles.architect_link}
        >
            <div className={styles.architect_card}>
                <div className={styles.architect_avatar}>
                    {architect.foto.endsWith('.svg') ? (
                        <div className={styles.company_logo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-icon lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
                        </div>
                    ) : (
                        <Image
                            src={architect.foto}
                            alt={architect.nome}
                            width={80}
                            height={80}
                        />
                    )}
                </div>
                <div className={styles.architect_content}>
                    <div className={styles.architect_info}>
                        <h3>{architect.nome}</h3>
                        <span>{architect.subtitulo}</span>

                        {architect.papel && (
                            <p>{architect.papel}</p>
                        )}

                    </div>
                </div>
                <button className={`${styles.profile_button} primary_button`}>Ver perfil</button>
            </div>
        </Link>
    )
}
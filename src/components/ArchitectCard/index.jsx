import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { VerifiedBadge } from "../VerifiedBadge";
import { Container } from "../Container";

export function ArchitectCard({ architects }) {
    if (!architects) {
        return (
            <Container>
                <div className="not_found">
                    <h2>Ainda não há projetos para mostrar</h2>
                </div>
            </Container>
        );
    }

    return (
        <div className={styles.architects_grid}>
            {architects.map((architect) => (
                <Link
                    href={`/architect/${architect.id}`}
                    key={architect.id}
                    className={styles.architect_link}
                >
                    <div className={styles.architect_card}>
                        <div className={styles.architect_avatar}>
                            <Image
                                src={architect.picture}
                                alt={architect.name}
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className={styles.architect_content}>
                            <div className={styles.architect_info}>
                                <div className={styles.architect_name}>
                                    <h3>{architect.name}</h3>
                                    {architect.destaque && (
                                        <VerifiedBadge disableClick={true} />
                                    )}
                                </div>
                                <span>{architect.subtitle}</span>
                                {architect.role && (
                                    <p>{architect.role}</p>
                                )}

                            </div>
                        </div>
                        <span className={`${styles.profile_button} primary_button`}>Ver perfil</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
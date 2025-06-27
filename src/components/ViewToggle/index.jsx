'use client'

import styles from './index.module.css';

export default function ViewToggle({layout, setLayout}) {
    console.log(layout);
    
    return (
        <div className={styles.view_toggle_container}>
            <div className={`${styles.view_toggle} ${layout === 'list' ? styles.active : ''}`} onClick={() => setLayout('list')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-icon lucide-list">
                    <path d="M3 12h.01" /><path d="M3 18h.01" /><path d="M3 6h.01" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M8 6h13" />
                </svg>
            </div>
            <div className={`${styles.view_toggle} ${layout === 'grid' ? styles.active : ''}`} onClick={() => setLayout('grid')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid-icon lucide-layout-grid">
                    <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
            </div>
        </div>
    );
}

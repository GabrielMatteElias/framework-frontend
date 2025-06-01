import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ type, size = 'normal' }) => {
  const badgeText = type === 'verified' ? 'Verificado' : 'ESG';
  const badgeClass = `${styles.badge} ${styles[type]} ${styles[size]}`;
  
  return (
    <div className={badgeClass}>
      {badgeText}
    </div>
  );
};

export default Badge;

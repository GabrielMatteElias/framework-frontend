import React from 'react';
import styles from './Avatar.module.css';
import Image from 'next/image';
import img from "../../assets/profilePic.jpg"; // Import a default image if needed

const ProfileAvatar = ({ image, name, width = 90, height = 90 }) => {
  return (
    <div className={styles.avatar} style={{ width: `${width}px`, height: `${height}px` }}>
      {image ? (
        <Image
          src={img}
          alt={name}
          width={width}
          height={height}
          className={styles.avatar_image}
        />
      ) : (
        <div className={styles.avatar_placeholder}>
          {name ? name.charAt(0).toUpperCase() : 'A'}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;

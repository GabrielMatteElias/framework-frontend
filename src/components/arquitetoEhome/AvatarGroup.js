import React from 'react';
import styles from './AvatarGroup.module.css';
import ProfileAvatar from './Avatar';

const AvatarImageGroup = ({ avatars, maxDisplay = 10 }) => {
  const displayAvatars = avatars.slice(0, maxDisplay);
  const remainingCount = avatars.length - maxDisplay;

  return (
    <div className={styles.avatar_group}>
      {displayAvatars.map((avatar, index) => (
        <div key={index} className={styles.avatar_item}>
          <ProfileAvatar
            image={avatar.img}
            name={avatar.name}
            width={50}
            height={50}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={styles.avatar_more}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default AvatarImageGroup;

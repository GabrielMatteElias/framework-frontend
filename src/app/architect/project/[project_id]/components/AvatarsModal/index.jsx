import React from 'react';
import { Modal, Box } from '@mui/material';
import ProfileAvatar from '@/components/Avatar';
import styles from './index.module.css'
import Link from 'next/link';

const ExtraAvatarsModal = ({ open, handleClose, allAvatars }) => {
    console.log(allAvatars);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box component={'section'} className={styles.avatars_modal}>
                <div className={styles.avatars_title}>
                    <h2>Project contributors</h2>
                </div>
                <div className={styles.avatars}>
                    {allAvatars && (
                        allAvatars.map((avatar, index) => (
                            <Link href='/' className={styles.avatars_content}>
                                <ProfileAvatar
                                    key={index}
                                    name={avatar.name}
                                    image={avatar.img ? avatar.img.src : null}
                                    width={44}
                                    height={44}
                                />
                                <p>{avatar.name}</p>
                            </Link>
                        ))
                    )}
                </div>
            </Box>
        </Modal>
    );
};

export default ExtraAvatarsModal;
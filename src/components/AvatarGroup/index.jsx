"use client"

import { Avatar, AvatarGroup } from '@mui/material';
import ArrowTooltips from '../Tooltip';
import { useState } from 'react';
import ExtraAvatarsModal from '@/app/architect/[id]/project/[project_id]/components/AvatarsModal/index';

export default function AvatarsGroup({ avatars }) {

    const [openModal, setOpenModal] = useState(false);

    const handleAllAvatarClick = () => setOpenModal(true);

    const handleClose = () => setOpenModal(false);

    return (
        <>
            <AvatarGroup
                sx={{ cursor: "pointer" }}
                max={5}
                componentsProps={{
                    additionalAvatar: {
                        onClick: handleAllAvatarClick,
                    }
                }}
            >
                {avatars &&
                    avatars.map((item, index) => (
                        <ArrowTooltips text={item.name} key={index}>
                            <Avatar
                                alt={item.name}
                                sx={{
                                    filter: 'brightness(90%)',
                                    transition: 'filter 0.3s ease-in-out',
                                    '&:hover': {
                                        filter: 'brightness(100%)'
                                    },
                                }}
                                src={item.img ? item.img.src : null}
                            >
                            </Avatar>
                        </ArrowTooltips>

                    ))
                }
            </AvatarGroup>

            <ExtraAvatarsModal
                open={openModal}
                handleClose={handleClose}
                allAvatars={avatars}
            />
        </>
    );
}
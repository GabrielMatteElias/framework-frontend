import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';

export default function ArrowTooltips({ children, text }) {
    return (
        <Tooltip
            title={<Typography fontSize={11}>{text}</Typography>}
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
        >
            {children}
        </Tooltip>
    );
}
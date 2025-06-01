"use client"

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function PositionedSnackbar({ state, setState, text }) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState(false);
    };

    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={state}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert
                    severity="success"
                    variant="standard"
                    sx={{ width: '100%', fontSize: '1.2rem', fontWeight: '500', backgroundColor: '#ceeace' }}
                >
                    {text}
                </Alert>
            </Snackbar>
        </Box>
    );
}

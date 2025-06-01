"use client"

import Button from '@mui/material/Button';

export default function BasicButton({ type, text }) {
    return (
        <Button
            sx={{ width: '100%', height: '100%', fontSize: '1.3rem', backgroundColor: '#4A4545', letterSpacing: '0.3px',
                "&:hover": {
                        backgroundColor: '#4a4545c3'
                    } }}
            type={type}
            variant="contained">
            {text}
        </Button>
    );
}
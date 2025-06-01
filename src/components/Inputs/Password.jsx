"use client"

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import { useState } from 'react';

export default function InputPassword({ labelText, value, setValue, error, errorHelper }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl variant="outlined"
                sx={{ width: '100%' }}
            >
                <InputLabel htmlFor="outlined-adornment-password"
                    sx={{ fontSize: '13px' }}
                >{labelText ? labelText : 'Password'}</InputLabel>
                <OutlinedInput
                    error={error}
                    
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={labelText ? labelText : 'Password'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    sx={{ fontSize: '13px' }}
                />
                {error && <FormHelperText sx={{ fontSize: '1.2rem', color: 'red' }} id="component-error-text">{errorHelper}</FormHelperText>}

            </FormControl>

        </Box>
    );
}

"use client"

import TextField from '@mui/material/TextField';

export default function BasicTextFields({ labelText, type, value, setValue, error, errorHelper }) {
    return (
        <TextField
            error={error}
            helperText={errorHelper}
            fullWidth
            id="outlined-basic"
            label={labelText}
            variant="outlined"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            value={value ? value : ''}
            onChange={e => setValue(e.target.value)}
            type={type ? type : 'text'}
            autoComplete='off'
        />
    )
}
import React from 'react';
import { TextField } from '@mui/material';

const PhoneNumber = () => {
    return (
        <TextField fullWidth className={'mt-5'} inputMode={'numeric'}  label="شماره تلفن همراه" variant="outlined"/>
    );
};

export default PhoneNumber;

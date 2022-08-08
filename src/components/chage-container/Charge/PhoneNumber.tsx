import React from 'react';
import { TextField } from '@mui/material';

const PhoneNumber = () => {
    return (
        <TextField  className={'mt-5 w-6/12'} inputMode={'numeric'}  label="شماره تلفن همراه" variant="outlined"/>
    );
};

export default PhoneNumber;

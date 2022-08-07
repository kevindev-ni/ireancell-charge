import React from 'react';
import { TextField } from '@mui/material';

const PhoneNumber = () => {
    return (
        <div>
            <TextField  fullWidth className={'mt-5'} inputMode={'numeric'}  label="شماره تلفن همراه" variant="outlined"/>
        </div>
    );
};

export default PhoneNumber;

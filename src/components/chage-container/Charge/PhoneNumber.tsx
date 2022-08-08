import React from 'react';
import { TextField } from '@mui/material';
import {useCharge} from '../../../hooks/useCharge';

const PhoneNumber = () => {
    const {setPhoneNumber} = useCharge()
    return (
        <TextField onChange={(e) => setPhoneNumber(e.target.value)} className={'mt-5 sm:w-11/12 lg:w-7/12'} inputMode={'numeric'}  label="شماره تلفن همراه" variant="outlined"/>
    );
};

export default PhoneNumber;

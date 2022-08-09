import React, {ChangeEvent} from 'react';
import { TextField } from '@mui/material';
import {useCharge} from '../../../hooks/useCharge';

const PhoneNumber = () => {
    const {setPhoneNumber, phoneNumber} = useCharge()
    const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
        const isNumber = /^[0-9\b]+$/.test(e.target.value);
        isNumber && setPhoneNumber(e.target.value)
    }
    return (
        <TextField
            inputProps={{ maxLength: 11 }}
            onChange={(e) => handlePhoneNumber(e)}
            value={phoneNumber}
            className={'mt-5 sm:w-11/12 md:w-9/12 lg:w-7/12'}
            inputMode={'tel'}
            type={'text'}
            label="شماره تلفن همراه"
            variant="outlined"/>
    );
};

export default PhoneNumber;

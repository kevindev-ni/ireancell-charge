import React, {ChangeEvent} from 'react';
import { TextField } from '@mui/material';
import {useCharge} from '../../../hooks/useCharge';
import clsx from "clsx";

type PhoneNumberProps = {
    setPhoneNumberValid: React.Dispatch<React.SetStateAction<boolean>>;
    phoneNumberValid: boolean
}

const PhoneNumber = ({setPhoneNumberValid, phoneNumberValid} : PhoneNumberProps) => {
    const {setPhoneNumber, phoneNumber} = useCharge()
    const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
        const phoneNumber = e.target.value
        const isNumber = /^[0-9\b]+$/.test(phoneNumber);
        if (isNumber) {
            setPhoneNumberValid(true)
            setPhoneNumber(e.target.value)
        } else {
            setPhoneNumberValid(false)
        }
    }
    return (
        <TextField
            inputProps={{ maxLength: 11 }}
            onChange={handlePhoneNumber}
            value={phoneNumber}
            className={clsx('mt-5 sm:w-11/12 md:w-9/12 lg:w-7/12', {
                ['border-danger']: !phoneNumberValid
            })}
            inputMode={'numeric'}
            type={'text'}
            label="شماره تلفن همراه"
            variant="outlined"/>
    );
};

export default PhoneNumber;

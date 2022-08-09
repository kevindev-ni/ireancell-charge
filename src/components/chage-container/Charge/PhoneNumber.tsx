import React, {ChangeEvent} from 'react';
import { TextField } from '@mui/material';
import {useCharge} from '../../../hooks/useCharge';
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

type PhoneNumberProps = {
    setPhoneNumberValid: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    phoneNumberValid: boolean | undefined
}

const PhoneNumber = ({setPhoneNumberValid, phoneNumberValid} : PhoneNumberProps) => {
    const {setPhoneNumber, phoneNumber} = useCharge()
    const {t} = useTranslation('common')
    const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
        const phoneNumber = e.target.value
        const isNumber = /^\d+$/.test(phoneNumber);
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
                ['border-danger']: phoneNumberValid === false
            })}
            type={'text'}
            label={t('phoneNumber')}
            variant="outlined"/>
    );
};

export default PhoneNumber;

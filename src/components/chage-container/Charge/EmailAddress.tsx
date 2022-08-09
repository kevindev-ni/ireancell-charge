import React, {ChangeEvent, useState} from 'react';
import { TextField } from '@mui/material';
import {useCharge} from "../../../hooks/useCharge";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

const EmailAddress = ({setValidFormData, validEmail} : {setValidFormData: React.Dispatch<React.SetStateAction<boolean | undefined>>, validEmail: boolean}) => {
    const { setEmail } = useCharge()
    const {t} = useTranslation('common')

    const handleValidEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isEmail = regex.test(e.target.value)
        isEmail ? setValidFormData(true) : setValidFormData(false)
        setEmail(e.target.value)
    }
    return (
        <TextField
            onChange={handleValidEmail}
            className={clsx('mt-5 sm:w-11/12 md:w-9/12 lg:w-7/12', {
                ['border-danger']: !validEmail
            })}
            type={'email'}
            label={t('email')}
            variant="outlined"
        />
    );
};

export default EmailAddress;

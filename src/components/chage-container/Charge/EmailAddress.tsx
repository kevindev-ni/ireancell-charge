import React from 'react';
import { TextField } from '@mui/material';
import {useCharge} from "../../../hooks/useCharge";

const EmailAddress = () => {
    const { setEmail } = useCharge()
    return (
        <TextField onChange={(e) => setEmail(e.target.value)} fullWidth className={'mt-5 sm:w-11/12 md:w-9/12 lg:w-7/12'} type={'email'}  label="ایمیل (اخنیاری)  " variant="outlined"/>

    );
};

export default EmailAddress;

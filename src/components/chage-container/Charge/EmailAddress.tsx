import React from 'react';
import { TextField } from '@mui/material';
import {useCharge} from "../../../hooks/useCharge";

const EmailAddress = () => {
    const { setEmail } = useCharge()
    return (
        <TextField onChange={(e) => setEmail(e.target.value)} fullWidth className={'mt-5 w-6/12'} type={'email'}  label="ایمیل (اخنیاری)  " variant="outlined"/>

    );
};

export default EmailAddress;

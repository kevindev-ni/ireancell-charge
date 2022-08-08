import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import clsx from "clsx";
import SwitchToSpecial from "./SwitchToSpecial";
import PhoneNumber from "./PhoneNumber";
import PriceCharge from "./PriceCharge";
import ChargeType from "./ChargeType";

const Charge = () => {


    return (
        <Box className={'flex flex-col items-center justify-center w-full'}>
            <Box><Typography>خرید آنلاین شارژ ایرانسل </Typography></Box>
            <ChargeType />
            <SwitchToSpecial />
            <PhoneNumber />
            <PriceCharge />
            {/*email*/}
            <TextField fullWidth className={'mt-5 w-full'} inputMode={'email'}  label="ایمیل (اخنیاری)  " variant="outlined"/>
            <Button variant={'contained'} className={'bg-primary mt-5 px-[20px] py-[10px] rounded-[25px]'} fullWidth>انتخاب بانک و پرداخت</Button>
        </Box>
    );
};

export default Charge;

import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import clsx from "clsx";
import SwitchToSpecial from "./SwitchToSpecial";
import PhoneNumber from "./PhoneNumber";
import PriceCharge from "./PriceCharge";
import ChargeType from "./ChargeType";
import {useCharge} from "../../../hooks/useCharge";
import EmailAddress from "./EmailAddress";

const Charge = () => {
    return (
        <Box className={'flex flex-col items-center justify-center w-full'}>
            <Typography variant={'h6'}>خرید آنلاین شارژ ایرانسل </Typography>
            <ChargeType />
            <SwitchToSpecial />
            <PhoneNumber />
            <PriceCharge />
            <EmailAddress />
            {/*submit*/}
            <Button variant={'contained'}  className={'bg-primary sm:w-11/12 md:w-9/12 lg:w-7/12 shadow-0 mt-5 px-[20px] py-[10px] rounded-[25px]'} fullWidth>انتخاب بانک و پرداخت</Button>
        </Box>
    );
};

export default Charge;

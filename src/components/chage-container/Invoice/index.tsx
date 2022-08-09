import React from 'react';
import {Box, Hidden, List, ListItem, Typography} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {useCharge} from '../../../hooks/useCharge';
import NumberFormat from 'react-number-format';
import DesktopInvoice from "./DesktopInvoice";
import MobileInvoice from "./MobileInvoice";

const Invoice = () => {
    const {simCardType, phoneNumber, isSpecial, price, email} = useCharge()
    return (
       <Box className={'sm:mt-5 md: mt-5'}>
           <DesktopInvoice simCardType={simCardType} phoneNumber={phoneNumber} price={price} isSpecial={isSpecial} email={email} />
           <MobileInvoice simCardType={simCardType} phoneNumber={phoneNumber} price={price} isSpecial={isSpecial} email={email} />
       </Box>
    );
};

export default Invoice;

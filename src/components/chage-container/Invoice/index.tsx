import React from 'react';
import {Box} from '@mui/material';
import {useCharge} from '../../../hooks/useCharge';
import DesktopInvoice from './DesktopInvoice';
import MobileInvoice from './MobileInvoice';

const Invoice = ({setSubmit}: {setSubmit: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {simCardType, phoneNumber, isSpecial, price, email} = useCharge()
    return (
       <Box className={'sm:mt-5 md: mt-5'}>
           <DesktopInvoice simCardType={simCardType} phoneNumber={phoneNumber} price={price} isSpecial={isSpecial} email={email} />
           <MobileInvoice setSubmit={setSubmit} simCardType={simCardType} phoneNumber={phoneNumber} price={price} isSpecial={isSpecial} email={email} />
       </Box>
    );
};

export default Invoice;

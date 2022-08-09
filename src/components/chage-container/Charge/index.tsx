import React, {useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import SwitchToSpecial from './SwitchToSpecial';
import PhoneNumber from './PhoneNumber';
import PriceCharge from './PriceCharge';
import ChargeType from "./ChargeType";
import EmailAddress from './EmailAddress';
import useTranslation from "next-translate/useTranslation";

const Charge = () => {
    const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined)
    const [phoneNumberValid, setPhoneNumberValid] = useState<boolean | undefined>(undefined)
    const [errorPrice, setErrorPrice] = useState<boolean | undefined>(undefined);
    const {t} = useTranslation('common')
    const handleSubmit = (): void => {
        phoneNumberValid === undefined && setPhoneNumberValid(false)
        errorPrice === undefined && setErrorPrice(false)
    }
    return (
        <Box className={'flex flex-col items-center justify-center w-full'}>
            <Typography variant={'h6'}>{t('eChargeText')}</Typography>
            <ChargeType />
            <SwitchToSpecial />
            <PhoneNumber phoneNumberValid={phoneNumberValid} setPhoneNumberValid={setPhoneNumberValid}/>
            <PriceCharge errorPrice={errorPrice} setErrorPrice={setErrorPrice} />
            <EmailAddress validEmail={emailValid} setValidFormData={setEmailValid}/>
            {/*submit*/}
            <Button onClick={handleSubmit} variant={'contained'}  className={'bg-primary sm:w-11/12 md:w-9/12 lg:w-7/12 shadow-0 mt-5 px-[20px] py-[10px] rounded-[25px]'} fullWidth>{t('submitBtn')}</Button>
        </Box>
    );
};

export default Charge;

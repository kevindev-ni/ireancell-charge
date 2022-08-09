import React, {useState} from 'react';
import {Box, Button, Hidden, Typography} from '@mui/material';
import SwitchToSpecial from './SwitchToSpecial';
import PhoneNumber from './PhoneNumber';
import PriceCharge from './PriceCharge';
import ChargeType from "./ChargeType";
import EmailAddress from './EmailAddress';
import useTranslation from "next-translate/useTranslation";

const Charge = ({isSubmit} : {isSubmit: boolean}) => {
    const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined)
    const [phoneNumberValid, setPhoneNumberValid] = useState<boolean | undefined>(undefined)
    const [errorPrice, setErrorPrice] = useState<boolean | undefined>(undefined);
    const {t} = useTranslation('common')
    const handleSubmit = (): void => {
        phoneNumberValid === undefined && setPhoneNumberValid(false)
        errorPrice === undefined && setErrorPrice(false)
    }
    isSubmit && handleSubmit()
    return (
        <Box className={'flex flex-col items-center justify-center w-full'}>
            <Typography variant={'h6'}>{t('eChargeText')}</Typography>
            <ChargeType />
            <SwitchToSpecial />
            <PhoneNumber phoneNumberValid={phoneNumberValid} setPhoneNumberValid={setPhoneNumberValid}/>
            <PriceCharge errorPrice={errorPrice} setErrorPrice={setErrorPrice} />
            <EmailAddress validEmail={emailValid} setValidFormData={setEmailValid}/>
            {/*submit*/}
            <Hidden mdDown>
                <Button onClick={handleSubmit} variant={'contained'}  className={'bg-primary lg:w-7/12 shadow-0 mt-5 px-[20px] py-[10px] rounded-[25px]'} fullWidth>{t('submitBtn')}</Button>
            </Hidden>
        </Box>
    );
};

export default Charge;

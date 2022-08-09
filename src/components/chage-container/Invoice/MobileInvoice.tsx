import React, {SetStateAction} from 'react';
import {Box, Button, Hidden, List, ListItem, Typography} from "@mui/material";
import NumberFormat from "react-number-format";
import CircleIcon from "@mui/icons-material/Circle";
import useTranslation from "next-translate/useTranslation";

type invoiceProps = {
    simCardType: number | null;
    phoneNumber: string | null;
    price: number;
    isSpecial: boolean;
    email: string | null,
    setSubmit: React.Dispatch<SetStateAction<boolean>>
};
const MobileInvoice = ({simCardType, phoneNumber, price, isSpecial, email, setSubmit}: invoiceProps) => {
    const {t} = useTranslation('common')
    return (
        <div>
            <Hidden mdUp>
                <Box className={'bg-[#fff5cc] border-[#ffd733] border-[1px] rounded-[8px] p-2 h-full'}>
                    <Box className={'mt-1'}>
                        <List>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('simType')}</Typography>
                                <Typography>
                                    {simCardType === 0 ? t('prepaid') : t('postpaid')}
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('DirectToNumber')} </Typography>
                                <Typography>  {phoneNumber === null ? '---' : phoneNumber} </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('ChargeAmountVATShort')}</Typography>
                                <Typography>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        displayType={'text'}
                                        value={price + price * 9 /100}
                                    />
                                    {' '}
                                    {t('currency')}
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('CashbackReward')}  </Typography>
                                <Typography> { price / 100} {' '}  {t('currency')} </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('ChargeType')} </Typography>
                                <Typography> {isSpecial ? t('specialCharge') : t('normalCharge')}  </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('EmailText')}   </Typography>
                                <Typography>{email}</Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('BankName')}   </Typography>
                                <Typography> ---  </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box className={'flex'}>
                    <div>
                        <CircleIcon className={'text-[10px] mt-[25px] ml-1 text-[#0faf4b]'}/>
                    </div>
                    <div>
                        <Typography className={'text-light-gray text-[14px] vazir-req text-justify mt-5'}>
                            با پرداخت از درگاه بانکی، معادل ۱ درصد از مبلغ خریدتان (بدون احتساب مالیات بر ارزش افزوده) به عنوان پاداش نقدی خرید به حساب جیب جت شما اضافه خواهد شد. شما می‌توانید از طریق سوپر اپلیکیشن ایرانسل من به حساب جیب جت خود دسترسی داشته باشید.
                        </Typography>
                    </div>
                </Box>
                <Box className={'w-full text-center'}>
                    <Button onClick={() => setSubmit(true)} variant={'contained'}  className={'bg-primary sm:w-11/12 md:w-9/12 lg:w-7/12 shadow-0 mt-5 px-[20px] py-[10px] rounded-[25px]'} fullWidth>{t('submitBtn')}</Button>
                </Box>

            </Hidden>
        </div>
    );
};

export default MobileInvoice;
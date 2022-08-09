import React from 'react';
import {Box, Hidden, List, ListItem, Typography} from "@mui/material";
import NumberFormat from "react-number-format";
import CircleIcon from "@mui/icons-material/Circle";
import useTranslation from "next-translate/useTranslation";

type invoiceProps = {
    simCardType: number | null;
    phoneNumber: string | null;
    price: number;
    isSpecial: boolean;
    email: string | null
};
const DesktopInvoice = ({simCardType, phoneNumber, price, isSpecial, email}: invoiceProps) => {
    const {t} = useTranslation('common')
    return (
        <div>
            <Hidden mdDown>
                <Box className={'bg-[#f0eff5]  rounded-[8px] p-5 h-full'}>
                    <Box className={'bg-white pt-[15px] pb-[15px] rounded-[8px] fs-[16px] text-center'}>
                        {t('FinalInvoice')}
                    </Box>
                    <Box className={'mt-3 leading-9'}>
                        <List>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('simType')} </Typography>
                                <Typography className={'mt-3 '}>
                                    {simCardType === 0 ? t('prepaid') : t('postpaid')}
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('DirectToNumber')} </Typography>
                                <Typography className={'mt-3'}>  {phoneNumber === null ? '---' : phoneNumber} </Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('ChargeAmountVAT')}</Typography>
                                <Typography className={'mt-3'}>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        displayType={'text'}
                                        value={price + price * 9 /100}
                                    />
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>{t('CashbackReward')}   </Typography>
                                <Typography className={'mt-3 '}> { price / 100}  </Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('ChargeType')} </Typography>
                                <Typography className={'mt-3'}> {isSpecial ? t('specialCharge') : t('normalCharge')}  </Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('EmailText')}    </Typography>
                                <Typography className={'mt-3'}>{email}</Typography>
                            </ListItem>
                            <ListItem className={'flex flex-col items-start mr-3'}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> {t('BankName')}   </Typography>
                                <Typography className={'mt-3'}> اعتباری  </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box className={'flex'}>
                    <div>
                        <CircleIcon  className={'text-[10px] mt-[25px] ml-1 text-[#0faf4b]'}/>
                    </div>
                    <div>
                        <Typography className={'text-light-gray text-[14px] vazir-req text-justify mt-5'}>
                            {t('rewardText')}
                        </Typography>
                    </div>
                </Box>
            </Hidden>
        </div>
    );
};

export default DesktopInvoice;
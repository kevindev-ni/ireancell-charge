import React from 'react';
import {Box, Hidden, List, ListItem, Typography} from "@mui/material";
import NumberFormat from "react-number-format";
import CircleIcon from "@mui/icons-material/Circle";

type invoiceProps = {
    simCardType: number | null;
    phoneNumber: string | null;
    price: number;
    isSpecial: boolean;
    email: string | null
};
const MobileInvoice = ({simCardType, phoneNumber, price, isSpecial, email}: invoiceProps) => {
    return (
        <div>
            <Hidden mdUp>
                <Box className={'bg-[#fff5cc] rounded-[8px] p-2 h-full'}>
                    <Box className={'mt-1'}>
                        <List>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>نوع سیم کارت </Typography>
                                <Typography>
                                    {simCardType === 0 ? 'اعتباری' : 'دائمی'}
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>مستقیم به شماره </Typography>
                                <Typography>  {phoneNumber === null ? '---' : phoneNumber} </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>مبلغ شارژ (مالیات)</Typography>
                                <Typography>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        displayType={'text'}
                                        value={price + price * 9 /100}
                                    />
                                </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>پاداش خرید  </Typography>
                                <Typography> { price / 100}  </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> نوع شارژ  </Typography>
                                <Typography> {isSpecial ? 'شگفت انگیز' : 'معمولی'}  </Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> ایمیل   </Typography>
                                <Typography>{email}</Typography>
                            </ListItem>
                            <ListItem className={'flex justify-between items-center mb-1 '}>
                                <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> نام بانک   </Typography>
                                <Typography> اعتباری  </Typography>
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
                            با پرداخت از درگاه بانکی، معادل ۱ درصد از مبلغ خریدتان (بدون احتساب مالیات بر ارزش افزوده) به عنوان پاداش نقدی خرید به حساب جیب جت شما اضافه خواهد شد. شما می‌توانید از طریق سوپر اپلیکیشن ایرانسل من به حساب جیب جت خود دسترسی داشته باشید.
                        </Typography>
                    </div>
                </Box>
            </Hidden>
        </div>
    );
};

export default MobileInvoice;
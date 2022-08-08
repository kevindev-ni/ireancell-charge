import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {useCharge} from '../../../hooks/useCharge';

const Invoice = () => {
    const {simCardType, phoneNumber} = useCharge()
    return (
       <Box>
           <Box className={'bg-[#f0eff5] rounded-[8px] p-5 h-full'}>
               <Box className={'bg-white pt-[15px] pb-[15px] rounded-[8px] fs-[16px] text-center'}>
                   فاکتور نهایی
               </Box>
               <Box className={'mt-3 leading-9'}>
                   <List>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>نوع سیم کارت </Typography>
                           <Typography className={'mt-3 '}>
                               {simCardType === 0 ? 'اعتباری' : 'دائمی'}
                           </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>مستقیم به شماره </Typography>
                           <Typography className={'mt-3 '}>  {phoneNumber} </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)</Typography>
                           <Typography className={'mt-3 '}> اعتباری  </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}>پاداش خرید  </Typography>
                           <Typography className={'mt-3 '}> اعتباری  </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> نو شارژ  </Typography>
                           <Typography className={'mt-3'}> اعتباری  </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mb-3 mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> ایمیل   </Typography>
                           <Typography className={'mt-3'}> اعتباری  </Typography>
                       </ListItem>
                       <ListItem className={'flex flex-col items-start mr-3'}>
                           <Typography className={'text-[14px] vazir-req text-light-gray text-light'}> نام بامک   </Typography>
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
                      با پرداخت از درگاه بانکی، معادل ۱ درصد از مبلغ خریدتان (بدون احتساب مالیات بر ارزش افزوده) به عنوان پاداش نقدی خرید به حساب جیب جت شما اضافه خواهد شد. شما می‌توانید از طریق سوپر اپلیکیشن ایرانسل من به حساب جیب جت خود دسترسی داشته باشید.
                  </Typography>
              </div>
           </Box>

       </Box>
    );
};

export default Invoice;

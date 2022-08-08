import React, {useState} from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import NumberFormat from 'react-number-format';

const PriceCharge = () => {
    const [customPrice, setCustomPrice] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(10000)
    const priceCharge = [
        {id: 1, price: 10000},
        {id: 2, price: 20000},
        {id: 3, price: 30000},
        {id: 4, price: 40000},
        {id: 5, price: 50000},
    ]
    return (
        <Box className={'mt-5 w-6/12'}>
            <Typography className={'text-right vazir-req text-[#8b8b8d] mb-5 text-sm'}> مبلغ شارژ</Typography>
            <Grid container spacing={1} >
                {priceCharge.map((item, index) => (
                    <Grid key={index} item lg={4} xs={4} md={4} sm={4}>
                        <button className={'price-chip'}>
                            <NumberFormat
                                thousandSeparator={true}
                                displayType={'text'}
                                value={item.price}
                            />
                            <span className={'m-1 text-sm vazir-req !font-light'}>ریال</span>
                        </button>
                    </Grid>
                ))}
                <Grid item lg={4} xs={4} md={4} sm={4}>
                    <button onClick={() => setCustomPrice(!customPrice)} className={'price-chip vazir-req'}>
                        سایر مبابغ
                    </button>
                </Grid>
            </Grid>
            {customPrice && (
                <Box className={'flex flex-col items-center mt-2'}>
                    <TextField defaultValue={price} fullWidth />
                    <span className={'text-sm mt-4  text-center text-[#8f8f91]'}>حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال</span>
                </Box>
            )}
        </Box>
    );
};

export default PriceCharge;

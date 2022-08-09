import React, {useEffect, useState} from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import NumberFormat from 'react-number-format';
import {useCharge} from "../../../hooks/useCharge";
import clsx from "clsx";

const priceCharge = [
    {id: 1, price: 10000, isSpecial: false},
    {id: 2, price: 20000, isSpecial: false},
    {id: 3, price: 50000, isSpecial: true},
    {id: 4, price: 100000, isSpecial: true},
    {id: 5, price: 200000, isSpecial: true},
]

const PriceCharge = () => {
    const [customPrice, setCustomPrice] = useState<boolean>(false);
    const [selected, setSelected] = useState<number | null>(1)
    const {isSpecial, setPrice, price, simCardType} = useCharge()

    const handleSelectedPrice = (index: number, price: number) => {
        customPrice && setCustomPrice(false)
        setSelected(index)
        setPrice(price)
    }

    const CustomPrice = () => {
        setCustomPrice(!customPrice)
        setSelected(null)
    }

    useEffect(() => {
        if (!isSpecial) {
            setPrice(priceCharge[1].price)
        } else {
            /// find price base of special
            const indexOfFirstSpecial = priceCharge.findIndex((item) => item.isSpecial)
            handleSelectedPrice(indexOfFirstSpecial, priceCharge[indexOfFirstSpecial].price)
        }
        if (simCardType === 1) {
            /// find price base of irancell logic
            const indexOfFirstPriceBasedOnSimType = priceCharge.findIndex((item) => item.price === 50000)
            handleSelectedPrice(indexOfFirstPriceBasedOnSimType, priceCharge[indexOfFirstPriceBasedOnSimType].price)
        }
    }, [isSpecial, simCardType])

    return (
        <Box className={'mt-5 lg:w-7/12 sm:w-11/12'}>
            <Typography className={'text-right vazir-req text-[#8b8b8d] mb-5 text-sm'}> مبلغ شارژ</Typography>
            <Grid container spacing={1}>
                {priceCharge.map((item, index) => (
                    <Grid key={index} item lg={4} xs={4} md={4} sm={4}>
                        <button
                            onClick={() => handleSelectedPrice(index, item.price)}
                            disabled={isSpecial && item.isSpecial !== isSpecial}
                            className={clsx('price-chip', {
                                ['cursor-not-allowed text-gray-400']: isSpecial && item.isSpecial !== isSpecial,
                                ['bg-primary']: index === selected
                            })}>
                            <NumberFormat
                                className={'text-sm'}
                                thousandSeparator={true}
                                displayType={'text'}
                                value={item.price}
                            />
                            <span className={'m-1 text-sm vazir-req !font-light'}>ریال</span>
                        </button>
                    </Grid>
                ))}
                <Grid item lg={4} xs={4} md={4} sm={4}>
                    <button
                        disabled={isSpecial}
                        onClick={CustomPrice}
                        className={clsx('price-chip vazir-req', {
                            ['cursor-not-allowed text-gray-400']: isSpecial,
                            ['bg-primary']: selected === null}
                        )}>
                        سایر مبابغ
                    </button>
                </Grid>
            </Grid>
            {customPrice && !isSpecial && (
                <Box className={'flex flex-col items-center mt-2'}>
                    <TextField onChange={(e) => setPrice(parseInt(e.target.value))} defaultValue={price} fullWidth/>
                    <span className={'text-sm mt-4  text-center text-[#8f8f91]'}>حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال</span>
                </Box>
            )}
        </Box>
    );
};

export default PriceCharge;

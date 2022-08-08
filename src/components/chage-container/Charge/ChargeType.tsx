import React, {useState} from 'react';
import {Box, Typography} from '@mui/material';
import clsx from 'clsx';

const ChargeType = () => {
    const [simType, setSimType] = useState<number>(0)

    return (
        <Box className={'mt-5 w-9/12'}>
            <Typography className={'text-center mb-2 text-[#8b8b8d] text-sm vazir-req'}> نوع سیم کارت</Typography>
            <Box className={'flex justify-between  items-center  border-[1px] rounded-[25px] border-[#e6e6e8]'}>
                <button
                    onClick={() => setSimType(0)}
                    className={clsx('text-center w-full px-[7px] py-[7px] ',
                        {['rounded-[25px] bg-primary p-1 ']: simType === 0})}
                >
                    اعتباری
                </button>
                <button
                    onClick={() => setSimType(1)}
                    className={clsx('text-center w-full px-[7px] py-[7px] ',
                        {['rounded-[25px] bg-primary p-1']: simType === 1})}
                >
                    دائمی
                </button>
            </Box>
        </Box>
    );
};

export default ChargeType;

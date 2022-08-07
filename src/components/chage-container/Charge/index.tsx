import React from 'react';
import {Box, Typography} from "@mui/material";

const Charge = () => {
    return (
        <Box className={'flex flex-col items-center justify-center'}>
            <Typography>خرید آنلاین شارژ ایرانسل </Typography>
            <Box
                className={'flex justify-between items-center w-4/12 mt-5 border-[1px] rounded-[25px] border-[#e6e6e8]'}>
                <div className={'text-center w-full px-[7px] py-[7px] '}>
                    <button>
                        اعتباری
                    </button>
                </div>
                <div className={'text-center rounded-[25px] bg-yellow-500 p-1 px-[7px] py-[7px]  w-full'}>
                    <button>
                        دائمی
                    </button>
                </div>
            </Box>
        </Box>
    );
};

export default Charge;
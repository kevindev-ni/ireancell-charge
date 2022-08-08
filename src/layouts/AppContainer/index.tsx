import React from 'react';
import {AppContainerProps} from "./types";
import Header from "../Header";
import {Box} from "@mui/material";
import {useRouter} from "next/router";
import clsx from "clsx";

const AppContainer = (props: AppContainerProps) => {
    const {locale} = useRouter()
    return (
        <Box className={clsx(' h-full w-full', {['fa-font']: locale === 'FA'}, {['en-font']: locale === 'EN'})}>
            <Header/>
            {props.children}
        </Box>
    );
};

export default AppContainer;

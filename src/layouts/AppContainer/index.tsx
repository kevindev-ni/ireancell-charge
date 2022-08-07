import React, {Fragment} from 'react';
import {AppContainerProps} from "./types";
import Header from "../Header";
import {Container} from "@mui/material";
import {useRouter} from "next/router";
import clsx from "clsx";

const AppContainer = (props: AppContainerProps) => {
    const {locale} = useRouter()
    console.log('locale a', locale)
    return (
        <div className={clsx({['fa-font']: locale === 'FA'}, {['en-font'] : locale === 'EN'})}>
            <Header />
            <Container className={'w-full h-full'}>
                {props.children}
            </Container>
        </div>
    );
};

export default AppContainer;

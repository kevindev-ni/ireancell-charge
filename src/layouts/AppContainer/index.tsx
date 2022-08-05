import React, {Fragment} from 'react';
import {AppContainerProps} from "./types";
import Header from "../Header";
import {Container} from "@mui/material";

const AppContainer = (props: AppContainerProps) => {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
        </>
    );
};

export default AppContainer;

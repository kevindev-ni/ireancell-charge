import * as React from 'react';
import type {NextPage} from 'next';
import AppContainer from '../src/layouts/AppContainer';
import ChargeContainer from '../src/components/chage-container/index';
import {Box} from "@mui/material";

const Home: NextPage = () => {
    return (
           <AppContainer>
               <ChargeContainer/>
           </AppContainer>
    );
};

export default Home;

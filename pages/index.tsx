import * as React from 'react';
import type {NextPage} from 'next';
import AppContainer from '../src/layouts/AppContainer';
import ChargeContainer from '../src/components/chage-container/index';

const Home: NextPage = () => {
    return (
           <AppContainer>
               <ChargeContainer/>
           </AppContainer>
    );
};

export default Home;

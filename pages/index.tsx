import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import {TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCounterState} from "../src/redux/store/counterSlice";
import AppContainer from "../src/layouts/AppContainer";

const Home: NextPage = () => {
    const a = useSelector(selectCounterState)
    console.log('a', a)
  return (
      <AppContainer>
            <div className={'flex justify-center'}>

                <br/>
                <br/>
                <br/>
                <br/>
                3213
            </div>
      </AppContainer>

  );
};

export default Home;

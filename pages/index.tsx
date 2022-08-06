import * as React from 'react';
import type { NextPage } from 'next';
import AppContainer from "../src/layouts/AppContainer";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
    const {t} = useTranslation('common')
    const router = useRouter()
    console.log('lang local', router.locale)
  return (
      <AppContainer>
            <div className={'flex justify-center'}>

                <br/>
                <br/>
                <br/>
                <br/>
                {t('title')}
            </div>
      </AppContainer>

  );
};

export default Home;

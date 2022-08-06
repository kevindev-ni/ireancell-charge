import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app'
import {wrapper} from '../src/redux/store/store';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../src/theme/theme';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../src/createEmotionCache';
import DirectionLayout from '../src/layouts/Direction';
import useTranslation from 'next-translate/useTranslation';
const clientSideEmotionCache = createEmotionCache();

import '../styles/global.css'

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
    const {t} = useTranslation('common')
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>{t('brandName')}</title>
                <meta name={'description'} content={t('description')}/>
                <meta name='viewport' content='initial-scale=1, width=device-width'/>
            </Head>
            <ThemeProvider theme={theme}>
                <DirectionLayout>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </DirectionLayout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default wrapper.withRedux(MyApp)

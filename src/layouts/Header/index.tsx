import React from 'react';
import {AppBar, Box, Toolbar, Button, Typography, IconButton} from "@mui/material";
import LanguageIconIcon from '@mui/icons-material/Language';
import {useDispatch, useSelector} from "react-redux";
import {changeLang, selectLocalState} from "../../redux/store/langSlice";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";

const Header = () => {
    const dispatch = useDispatch()
    const {lang} = useSelector(selectLocalState)
    const {t} = useTranslation('common')
    const router = useRouter()
    const locate : string = router.locale === 'EN' ? 'FA' : 'EN'
    const HandleLocale = () => {
        dispatch(changeLang(locate))
        router.push('/', '/', {locale: locate})
    }
    return (
            <AppBar position="static" className={'bg-primary w-full'} >
                <Toolbar className={'p-0'} variant="dense">
                    <Box className={clsx('flex w-full justify-between items-center', {
                        ['pl-5']: locate === 'FA',
                        ['pr-5']: locate === 'EN'
                    })}>
                        <Typography>
                            {t('brandName')}
                        </Typography>
                        <Box onClick={HandleLocale}
                             className={'bg-black h-[80px] flex items-center justify-center p-0 m-0 w-[200px]'}>
                            <Button startIcon={<LanguageIconIcon color={'primary'}/>} size={'small'} className={'text-sm'}>
                                {lang}
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    );
};

export default Header;

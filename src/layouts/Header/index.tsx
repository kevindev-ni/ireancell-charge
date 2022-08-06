import React from 'react';
import {AppBar, Box, Toolbar, Button, Typography, IconButton} from "@mui/material";
import LanguageIconIcon from '@mui/icons-material/Language';
import {useDispatch, useSelector} from "react-redux";
import {changeLang, selectLocalState} from "../../redux/store/langSlice";
import {useRouter} from "next/router";
import Link from "next/link";

const Header = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {lang} = useSelector(selectLocalState)
    const handleLocate = router.locale === 'EN' ? 'FA' : 'EN'
    const HandleLocale = () => {
        dispatch(changeLang(handleLocate))
        router.push('/', '/', {locale: handleLocate})
    }
    return (
        <AppBar color={"primary"} component={"nav"}>
            <Toolbar className={'p-0 block'}>
                <Box className={'flex pr-5 w-full justify-between items-center'}>
                    <Typography className={'vazir-med'}>
                        ایرانسل
                    </Typography>
                    <Box onClick={HandleLocale}
                         className={'bg-black h-[80px] flex items-center justify-center p-c0 m-0 w-[200px]'}>
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

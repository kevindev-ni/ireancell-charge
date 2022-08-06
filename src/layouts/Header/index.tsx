import React from 'react';
import {AppBar, Box, Toolbar, Button, Typography, IconButton} from "@mui/material";
import LanguageIconIcon from '@mui/icons-material/Language';
import {useDispatch, useSelector} from "react-redux";
import {changeLang, selectLocalState} from "../../redux/store/langSlice";

const Header = () => {
    const dispatch = useDispatch()
    const {lang} = useSelector(selectLocalState)
    return (
        <AppBar color={"primary"} component={"nav"}>
            <Toolbar className={'p-0'}>
                <Box className={'flex w-full justify-between items-center'}>
                    <Typography className={'vazir-med'}>
                        ایرانسل
                    </Typography>
                    <Box onClick={() => dispatch(changeLang('EN'))} className={'bg-black p-0 h-[80px] flex items-center justify-center p-c0 m-0 w-[200px]'}>
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

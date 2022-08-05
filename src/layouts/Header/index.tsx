import React from 'react';
import {AppBar, Box, Toolbar, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeLang, selectLocalState} from "../../redux/store/langSlice";

const Header = () => {
    const dispatch = useDispatch()
    const {lang} = useSelector(selectLocalState)
    return (
        <AppBar color={"primary"} component={"nav"}>
            <Toolbar className={'w-full'}>
                <Box className={'flex w-full justify-between '}>
                    <Box>
                        ایرانسل
                    </Box>
                    <Box className={'bg-red-500'}>
                        <Button variant="contained" onClick={() => dispatch(changeLang('en'))} >
                            Go to en
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>

    );
};

export default Header;

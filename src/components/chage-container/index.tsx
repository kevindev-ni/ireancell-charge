import React from 'react';
import {Box, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import useTranslation from 'next-translate/useTranslation';
import Charge from "./Charge";
import Invoice from "./Invoice";
import {ChargeProvider} from "../../context/ChargeContext";

const Index = () => {
    const {t} = useTranslation('common')

    return (
        <ChargeProvider>
            <Box className={'h-full flex mt-32 mb-32 md:block items-center sm:block sm:mt-5'}>
                <Container>
                    <Card className={'shadow-charge-container mb-5 mx-50 rounded-[15px] '}>
                        <CardContent className={'p-[30px]'}>
                            <Grid container>
                                <Grid item sm={12} md={7} lg={7}>
                                    <Charge />
                                </Grid>
                                <Grid item sm={12} md={5} lg={5}>
                                    <Invoice />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </ChargeProvider>
    );
};

export default Index;

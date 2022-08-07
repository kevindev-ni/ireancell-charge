import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import useTranslation from 'next-translate/useTranslation';
import Charge from "./Charge";
import Invoice from "./Invoice";

const Index = () => {
    const {t} = useTranslation('common')

    return (
        <div>
            <Card className={'shadow-lg rounded-[15px]'} sx={{minWidth: 275, mt: 50}}>
                <CardContent>
                    <Grid container>
                        <Grid item lg={6}>
                          <Charge />
                        </Grid>
                        <Grid item lg={6}>
                            <Invoice />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default Index;

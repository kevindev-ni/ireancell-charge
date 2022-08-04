import React, {ReactNode, useEffect} from 'react';
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {useDispatch, useSelector} from "react-redux";
import {selectLocalState} from "../redux/store/langSlice";

interface DirectionsProps  {
    children: ReactNode
}

const styleCache = () =>
    createCache({
        key: 'rtl',
        prepend: true,
        stylisPlugins: [stylisRTLPlugin]
    })

const DirectionLayout = (props: DirectionsProps) => {
    const {children} = props
    const {lang, directions} = useSelector(selectLocalState)
    console.log('lang', {lang, directions})
    useEffect(() => {
        document.dir
        directions == 'rtl' ? document.dir = 'rtl': document.dir = 'ltr'
    }, [directions])

    if (directions === 'rtl') {
        return <CacheProvider value={styleCache()}>{children}</CacheProvider>
    }
    return <>{children}</>

};

export default DirectionLayout;
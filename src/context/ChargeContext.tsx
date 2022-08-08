import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ChargeValuesType} from './types';


const defaultProvider: ChargeValuesType = {
    isSpecial: false,
    setSpecial: () => Boolean,
    email: null,
    setEmail: () => null,
    price: 0,
    setPrice: () => null,
    chargeType: 0,
    setChargeType: () => null,
    phoneNumber: null,
    setPhoneNumber: () => null,
    simCardType: 0,
    setSimCardType: () => null
}

const ChargeContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const ChargeProvider = ({children}: Props) => {
    const [simCardType, setSimCardType] = useState<number | null>(defaultProvider.simCardType)
    const [chargeType, setChargeType] = useState<number | null>(defaultProvider.chargeType)
    const [phoneNumber, setPhoneNumber] = useState<string | null>(defaultProvider.phoneNumber)
    const [price, setPrice] = useState<number>(defaultProvider.price)
    const [email, setEmail] = useState<string | null>(defaultProvider.email)
    const [isSpecial, setSpecial] = useState<boolean>(defaultProvider.isSpecial)

    const values = {
        isSpecial,
        setSpecial,
        email,
        setEmail,
        price,
        setPrice,
        chargeType,
        setChargeType,
        phoneNumber,
        setPhoneNumber,
        simCardType,
        setSimCardType
    }

    return <ChargeContext.Provider value={values}>{children}</ChargeContext.Provider>
}

export {ChargeProvider, ChargeContext}

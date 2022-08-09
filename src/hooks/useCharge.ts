import {useContext} from 'react';
import {ChargeContext} from '../context/ChargeContext';


export const useCharge = () =>  useContext(ChargeContext)

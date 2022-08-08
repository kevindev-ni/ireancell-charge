export type ChargeValuesType = {
    simCardType: number | null,
    setSimCardType: (value: number) => void
    chargeType: number | null,
    setChargeType: (value: number) => void
    phoneNumber: string | null,
    setPhoneNumber: (value: string) => void
    price: number | null,
    setPrice: (value: number) => void
    email: string | null,
    setEmail: (value: string) => void
    loading: boolean,
    setLoading: (value: boolean) => void


}

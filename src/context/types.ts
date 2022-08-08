export type ChargeValuesType = {
    simCardType: number | null,
    setSimCardType: (value: number) => void
    chargeType: number | null,
    setChargeType: (value: number) => void
    phoneNumber: string | null,
    setPhoneNumber: (value: string) => void
    price: number,
    setPrice: (value: number) => void
    email: string | null,
    setEmail: (value: string) => void
    isSpecial: boolean,
    setSpecial: (value: boolean) => void
}

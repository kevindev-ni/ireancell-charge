const getDirection = () :string => {
    if (process.browser && localStorage.getItem('lang') === 'en') {
        return 'ltr'
    }
    return 'rtl'
}
export {getDirection}
module.exports = {
    locales: ['ir', 'en'], // Array with the languages that you want to use
    defaultLocale: 'ir',
    localeDetection: false,
    pages: {
        '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
};
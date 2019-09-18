module.exports = {
  plugins: [
    {
      resolve: "@lucasan/lity-sites-theme",
      options: {
        baseUrl: 'https://src.lucastorres.co',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        sourceUrl: 'https://src.lucastorres.co/',
        replacementUrl: 'https://lucastorres.co/'
      }
    }
  ]
}
module.exports = {
  plugins: [
    {
      resolve: "@lucasan/lity-sites-theme",
      options: {
        baseUrl: 'http://127.0.0.1:8002',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        sourceUrl: 'http://127.0.0.1:8002/',
        replacementUrl: 'http://127.0.0.1:8000/'
      }
    }
  ]
}
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
        replacementUrl: 'https://lucastorres.co/',
        tagManagerId: "GTM-5RD6GCC",
        manifest: {
          name: "Lucas Torres",
          short_name: "Lucas Torres",
          start_url: "/",
          background_color: "rgba(0,8,28,0.93)",
          theme_color: "rgba(255,255,255,0)",
          display: "standalone",
          icon: "src/images/icon.png",
          crossOrigin: `use-credentials`,
        }
      }
    }
  ]
}
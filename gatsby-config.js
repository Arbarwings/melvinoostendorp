const config = require('./src/data/config');

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    image: config.logo,
    author: config.author,
    siteUrl: config.url,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-173535443-1',
        head: false,
        anonymize: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'Melvin',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './src/assets/images/favicon-512.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.url,
        sitemap: `${config.url}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/images/favicon-512.png', // The recommended size for the file is: 1500x1500px.
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {},
    },
  ],
};

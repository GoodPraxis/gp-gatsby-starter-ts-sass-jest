module.exports = {
  siteMetadata: {
    title: 'Website',
    description: 'Website description',
    author: '@example',
    siteUrl: 'https://example.com',
    image: 'https://example.com/example.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ASAP',
        short_name: 'asap',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles/'],
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-typescript',
  ],
};

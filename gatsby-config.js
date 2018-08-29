module.exports = {
  siteMetadata: {
    title: 'Igor Rzegocki',
    description: 'Personal webpage, CV and blog'
  },
  pathPrefix: '/minefield',
  plugins: [
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/avatars`,
        name: 'avatars',
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/covers`,
        name: 'covers',
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/upload`,
        name: 'upload'
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/files`,
        name: 'files'
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {}
          }, {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }, {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: 'files',
              ignoreFileExtensions: ['png', 'jpg', 'bmp', 'tiff'],
            }
          }
        ]
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'rzegocki.pl',
        short_name: 'rzegocki.pl',
        start_url: '.',
        background_color: '#9f95c8',
        theme_color: '#9f95c8',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    //'gatsby-plugin-offline'
  ],
}
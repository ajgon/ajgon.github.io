const config = require('./src/config.js')
const urljoin = require('url-join')
const siteUrl = urljoin(config.siteUrl, config.pathPrefix).replace(/\/+$/, '')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: siteUrl,
    rssMetadata: {
      site_url: siteUrl,
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${siteUrl}/icons/icon-512.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sri',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://7da25cbb214e4f2f9874a9dffc895d99@sentry.io/1275167'
      }
    }, {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor
      }
    }, {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/avatar*']
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: false,
        anonymize: true
      }
    }, {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/DeeDee'] }],
        sitemap: urljoin(config.siteUrl, config.pathPrefix, '/sitemap.xml')
      }
    }, {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup (ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = 'GatsbyJS'
          return ret
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize (ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.frontmatter.path,
                guid: rssMetadata.site_url + edge.node.frontmatter.path,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              }))
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    frontmatter {
                      title
                      path
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss
          }
        ]
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/covers`,
        name: 'covers'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/upload`,
        name: 'upload'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/files`,
        name: 'files'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/icons`,
        name: 'icons'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/raw`,
        name: 'raw'
      }
    }, {
      resolve: 'gatsby-plugin-copy',
      options: {
        verbose: true,
        'src/raw/CNAME': 'public/CNAME',
        'src/raw/googlea7d520b1962f2846.html': 'public/googlea7d520b1962f2846.html',
        'src/raw/hackers.txt': 'public/hackers.txt',
        'src/raw/keybase.txt': 'public/keybase.txt',
        'src/raw/public-key.txt': 'public/public-key.txt',
        'src/raw/.well-known/security.txt': 'public/.well-known/security.txt',
        'src/raw/.well-known/security.txt.sig': 'public/.well-known/security.txt.sig'
      }
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
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'files',
              ignoreFileExtensions: ['png', 'jpg', 'bmp', 'tiff']
            }
          }
        ]
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.siteLogo,
        icons: [
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
          }, {
            src: `icons/icon-70x70.png`,
            sizes: `70x70`,
            type: `image/png`
          }, {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          }, {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          }, {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          }, {
            src: `icons/icon-150x150.png`,
            sizes: `150x150`,
            type: `image/png`
          }, {
            src: `icons/icon-310x150.png`,
            sizes: `310x150`,
            type: `image/png`
          }, {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          }, {
            src: `icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          }, {
            src: `icons/icon-310x310.png`,
            sizes: `310x310`,
            type: `image/png`
          }, {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          }, {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    }, {
      resolve: 'gatsby-plugin-offline',
      options: {
        navigateFallbackWhitelist: [/^.*(?!\.\w?$)/, /^\/v[0-9]+\/?.*$/],
      }
    },
    'gatsby-plugin-remove-trailing-slashes'
  ]
}

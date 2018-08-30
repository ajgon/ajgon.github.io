/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`{
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            title
            date
            author
            cover {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
            path
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/blog-index.js',
      pageLength: 5,
      pathPrefix: 'blog',
      context: {
        wut: '123',
        siteUrl: result.data.site.siteMetadata.siteUrl
      }
    })

    result.data.allMarkdownRemark.edges
      .forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}
        })
      })
  })
}

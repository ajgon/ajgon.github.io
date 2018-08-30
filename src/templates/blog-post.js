/* global graphql */
import React from 'react'

import withRoot from '../withRoot'

import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render () {
    const { data } = this.props
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <BlogPost post={data.markdownRemark} siteUrl={siteUrl} shares={data.allShareJson.edges} />
    )
  }
}

export default withRoot(BlogPostTemplate)

export const query = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allShareJson {
      edges {
        node {
          id
          slug
          name
          url
          width
          height
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        path
        author
      }
    }
  }
`

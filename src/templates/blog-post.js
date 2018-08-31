/* global graphql */
import config from '../config'
import urljoin from 'url-join'
import React from 'react'

import withRoot from '../withRoot'

import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render () {
    const { data } = this.props

    return (
      <BlogPost post={data.markdownRemark} siteUrl={urljoin(config.siteUrl, config.pathPrefix)} shares={data.allShareJson.edges} />
    )
  }
}

export default withRoot(BlogPostTemplate)

export const query = graphql`
  query BlogPostByPath($path: String!) {
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

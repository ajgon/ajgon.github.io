import React from 'react';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';

import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const avatars = data.allImageSharp.edges
    const avatar = avatars.find(item => item.node.id.match(RegExp(`avatars/${data.markdownRemark.frontmatter.author}.png`))).node

    return (
      <BlogPost post={data.markdownRemark} avatar={avatar} />
    )
  }
}

export default withRoot(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    allImageSharp(filter:{ id: { regex: "/avatars/" }} ) {
      edges {
        node {
          id
          sizes(maxWidth: 128) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;
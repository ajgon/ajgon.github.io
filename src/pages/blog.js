/* global graphql */
import React from 'react'

import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import Section from '../components/Section'

class Blog extends React.Component {
  render () {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const avatars = data.allImageSharp.edges
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <Section headline='Blog'>
        {posts.map(post => {
          const avatar = avatars.find(item => item.node.id.match(RegExp(`avatars/${post.node.frontmatter.author}.png`))).node

          return (
            <BlogExcerpt post={post.node} avatar={avatar} siteUrl={siteUrl} key={post.node.id} showShare showSummary />
          )
        })}
      </Section>
    )
  }
}

export default withRoot(Blog)

export const query = graphql`
  query BlogPosts {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            author
            path
            date(formatString:"MMMM DD, YYYY")
            cover {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

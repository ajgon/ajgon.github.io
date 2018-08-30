/* global graphql */
import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import Section from '../components/Section.js'
import TagLine from '../components/TagLine.js'
import Technologies from '../components/Technologies.js'

class Index extends React.Component {
  render () {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <React.Fragment>
        <Section headline='Yo Developers!' idName='yodevelopers'>
          <TagLine />
        </Section>
        <Section headline='Technologies'>
          <Typography variant='headline' gutterBottom>Over 10 years of professional experience.</Typography>
          <Technologies />
        </Section>
        <Section headline='Projects' />
        <Section headline='Blog'>
          <Grid container spacing={24}>
            {posts.map(post => {
              return (
                <Grid item xs={12} md={4} key={post.node.id}>
                  <BlogExcerpt post={post.node} siteUrl={siteUrl} key={post.node.id} />
                </Grid>
              )
            })}
          </Grid>
        </Section>
        <Section headline='Contact' />
      </React.Fragment>
    )
  }
}

export default withRoot(Index)

export const query = graphql`
  query SiteJobsProjectsQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
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

/* global graphql */
import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import Section from '../components/Section.js'
import TagLine from '../components/TagLine.js'
import Technologies from '../components/Technologies.js'

const styles = (theme) => {
  return ({
    strongHeader: {
      fontWeight: 'bold',
      marginBottom: '20px'
    }
  })
}

class Index extends React.Component {
  render () {
    const { classes, data } = this.props
    const files = data.allFile.edges
    const posts = data.allMarkdownRemark.edges
    const avatars = data.allImageSharp.edges
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <React.Fragment>
        <Section headline="Yo Developers!" idName="yodevelopers">
					<TagLine />
        </Section>
        <Section headline="Technologies">
					<Typography variant='headline' gutterBottom>Over 10 years of professional experience.</Typography>
					<Technologies />
        </Section>
        <Section headline="Projects">
        </Section>
        <Section headline="Blog">
					<Grid container spacing={24}>
						{posts.map(post => {
							const avatar = avatars.find(item => item.node.id.match(RegExp(`avatars/${post.node.frontmatter.author}.png`))).node

							return (
							<Grid item xs={12} md={4} key={post.node.id}>
								<BlogExcerpt post={post.node} avatar={avatar} siteUrl={siteUrl} key={post.node.id} />
							</Grid>
							)
						})}
					</Grid>
        </Section>
        <Section headline="Contact">
        </Section>
      </React.Fragment>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
  query SiteJobsProjectsQuery {
    allFile(filter: {id: {regex: "/files/"}}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
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

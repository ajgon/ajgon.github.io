/* global graphql */
import config from '../config'
import urljoin from 'url-join'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import BlogPost from '../components/BlogPost'
import Section from '../components/Section'
import SEO from '../components/SEO'

const styles = {
  noTop: {
    padding: '5rem 0 0',
    marginTop: '0'
  }
}

class BlogPostTemplate extends React.Component {
  render () {
    const { classes, data } = this.props

    return (
      <Section className={classes.noTop}>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${
            config.siteTitle
          }`}
        />
        <SEO
          postPath={data.markdownRemark.frontmatter.path}
          postNode={data.markdownRemark}
          postSEO
        />
        <BlogPost
          post={data.markdownRemark}
          siteUrl={urljoin(config.siteUrl, config.pathPrefix)}
          shares={data.allShareJson.edges}
        />
      </Section>
    )
  }
}

BlogPostTemplate.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(BlogPostTemplate))

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
      excerpt
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

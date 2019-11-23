import { graphql } from 'gatsby'
import config from '../config'
import urljoin from 'url-join'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Seo from '../components/Seo'

const styles = theme => ({
  noFixedHeight: {
    [theme.breakpoints.up('md')]: {
      padding: '5rem 0 0'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    },
    marginTop: '0',
    height: 'auto',
    display: 'block'
  }
})

class BlogPostTemplate extends React.Component {
  render () {
    const { classes, data, location } = this.props

    return (
      <Layout data={data} location={location}>
        <Section className={classes.noFixedHeight}>
          <Helmet
            title={`${data.markdownRemark.frontmatter.title} | ${config.siteTitle}`}
          />
          <BlogPost
            post={data.markdownRemark}
            siteUrl={urljoin(config.siteUrl, config.pathPrefix)}
            shares={data.allShareJson.edges}
          />
          <Seo
            postPath={data.markdownRemark.frontmatter.path}
            postNode={data.markdownRemark}
            postSeo
          />
        </Section>
      </Layout>
    )
  }
}

BlogPostTemplate.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(BlogPostTemplate))

export const query = graphql`
  query SiteDataAndBlogPostByPath($path: String!) {
    allFile(filter: { base: { eq: "browserconfig.xml" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMenuJson {
      edges {
        node {
          id
          name
          to
        }
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
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        isoDate: date
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        path
        author
      }
    }
  }
`

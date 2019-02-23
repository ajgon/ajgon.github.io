import { graphql } from 'gatsby'
import config from '../config'
import urljoin from 'url-join'
import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import Layout from '../components/Layout'
import Section from '../components/Section.js'
import SEO from '../components/SEO.js'
import TagLine from '../components/TagLine.js'
import Technologies from '../components/Technologies.js'

const styles = theme => {
  return {
    underAppBar: {
      marginTop: '0',
      [theme.breakpoints.down('xs')]: {
        paddingTop: '5rem'
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '10rem'
      },
      [theme.breakpoints.up('md')]: {
        height: 'calc(100vh - 84px)',
        padding: '0 5px 84px'
      }
    },
    dynamicBlogContent: {
      [theme.breakpoints.up('md')]: {
        height: 'auto',
        minHeight: '0'
      }
    },
    hidden: {
      display: 'none'
    }
  }
}

class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showMoreBlogPosts: false
    }
  }

  showMoreBlogPosts () {
    this.setState({ showMoreBlogPosts: true })
  }

  componentDidMount () {
    let dynamicBlog = document.getElementById('blog')
    dynamicBlog.style.height = 'auto'
    dynamicBlog.style.minHeight = '0'

    setTimeout(() => {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
      const blogPadding = Math.max(
        (viewportHeight - dynamicBlog.offsetHeight) / 2
      )

      if (blogPadding < 0) {
        return
      }

      dynamicBlog.style.paddingTop = `${blogPadding}px`
      dynamicBlog.style.paddingBottom = `${blogPadding}px`
    }, 0)
  }

  render () {
    const { classes, data, location } = this.props
    const posts = data.allMarkdownRemark.edges
    const initialPostsNumber = 4

    return (
      <Layout data={data} location={location}>
        <SEO />
        <Section
          headline='Yo Developers!'
          idName='yodevelopers'
          className={classes.underAppBar}
          component='h1'
        >
          <TagLine />
        </Section>
        <Section headline='Technologies'>
          <Typography variant='h5' gutterBottom component='h3'>
            I have over 10 years of professional experience with Ruby, Rails,
            JavaScript and Linux, but&nbsp;I'm also familiar with other cool
            technologies.
          </Typography>
          <Technologies />
        </Section>
        <Section headline='Blog' className={classes.dynamicBlogContent}>
          <Grid container spacing={24}>
            {posts.map((post, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={post.node.frontmatter.id}
                  className={
                    index < initialPostsNumber || this.state.showMoreBlogPosts
                      ? ''
                      : classes.hidden
                  }
                >
                  <BlogExcerpt
                    post={post.node}
                    siteUrl={urljoin(config.siteUrl, config.pathPrefix)}
                    key={post.node.frontmatter.id}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Grid
            container
            justify='center'
            className={this.state.showMoreBlogPosts ? classes.hidden : ''}
          >
            <Button
              variant='outlined'
              style={{ color: '#fff', background: '#424242', width: '50%' }}
              onClick={() => this.showMoreBlogPosts()}
            >
              Read More
            </Button>
          </Grid>
        </Section>
      </Layout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
  query SiteDataAndBlogPostsQuery {
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            id
            title
            author
            path
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

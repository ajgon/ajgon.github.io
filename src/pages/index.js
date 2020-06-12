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
import Seo from '../components/Seo.js'
import TagLine from '../components/TagLine.js'
import Technologies from '../components/Technologies.js'

const styles = theme => {
  return {
    underAppBar: {
      marginTop: '0',
      height: 'calc(100vh - 84px)',
      padding: '0 5px 84px'
    },
    readMoreButton: {
      [theme.breakpoints.up('md')]: {
        minWidth: '50%',
        width: 'auto',
        padding: '15px 30px',
        fontSize: '1.125rem'
      },
      color: '#fff',
      background: '#424242',
      width: '50%',
      padding: '10px 30px',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#424242'
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
      showMoreBlogPosts: true
    }
  }

  showMoreBlogPosts () {
    this.setState({ showMoreBlogPosts: true })
  }

  componentDidMount () {
    const dynamicBlog = document.getElementById('blog')
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
      this.setState({ showMoreBlogPosts: false })

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
        <Seo />
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
          <Grid container spacing={3}>
            {posts.map((post, index) => {
              return ( <Grid
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
              className={classes.readMoreButton}
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
    avatar: file(relativePath: {eq: "ajgon.png"}) {
      childImageSharp {
        fixed(width: 192, height: 192) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSocialJson {
      edges {
        node {
          id
          name
          slug
          url
        }
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
            isoDate: date
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

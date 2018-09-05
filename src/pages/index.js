/* global graphql */
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
import Section from '../components/Section.js'
import SEO from '../components/SEO.js'
import TagLine from '../components/TagLine.js'
import Technologies from '../components/Technologies.js'

const styles = theme => ({
  noTop: {
    marginTop: '0',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5rem'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '10rem'
    }
  },
  hidden: {
    display: 'none'
  }
})

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

  render () {
    const { classes, data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <React.Fragment>
        <SEO />
        <Section
          headline='Yo Developers!'
          idName='yodevelopers'
          className={classes.noTop}
        >
          <TagLine />
        </Section>
        <Section headline='Technologies'>
          <Typography variant='headline' gutterBottom>
            I have over 10 years of professional experience with Ruby, Rails,
            JavaScript and Linux, but&nbsp;I'm also familiar with other cool
            technologies.
          </Typography>
          <Technologies />
        </Section>
        <Section headline='Blog'>
          <Grid container spacing={24}>
            {posts.map((post, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={post.node.frontmatter.id}
                  className={
                    index < 3 || this.state.showMoreBlogPosts
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
      </React.Fragment>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
  query BlogPostsQuery {
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

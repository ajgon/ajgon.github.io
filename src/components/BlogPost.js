import React from 'react'
import PropTypes from 'prop-types'
import urljoin from 'url-join'

import Disqus from 'disqus-react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'

const styles = theme => ({
  root: {
    marginBottom: '2.5em',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0'
    }
  },
  postContent: {
    '& p, & li': {
      fontSize: '1.125rem',
      lineHeight: '1.46429em'
    }
  }
})

class BlogPost extends React.Component {
  render () {
    const { classes, post, siteUrl, shares } = this.props
    const disqusShortname = 'ajgon'
    const disqusConfig = {
      url: `${urljoin(siteUrl, post.frontmatter.path)}/`.replace(/\/+$/, '/'),
      title: post.title
    }

    return (
      <Card className={classes.root}>
        <BlogPostHeader
          post={post}
          siteUrl={siteUrl}
          shares={shares}
          showShare
          heading='h1'
        />
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={classes.postContent}
          />
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </CardContent>
      </Card>
    )
  }
}

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPost)

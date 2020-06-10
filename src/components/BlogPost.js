import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'
import Remark42 from './Remark42'

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

    return (
      <Card className={`${classes.root} h-entry`}>
        <BlogPostHeader
          post={post}
          siteUrl={siteUrl}
          shares={shares}
          showShare
          heading='h1'
        />
        <CardContent>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={`${classes.postContent} e-content`}
          />
          <Remark42 />
        </CardContent>
      </Card>
    )
  }
}

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPost)

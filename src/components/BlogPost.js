import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'
import HCard from './HCard'
import Remark42 from './Remark42'
import Webmentions from './Webmentions'

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
    const { avatar, classes, post, siteUrl, shares } = this.props

    return (
      <Card className={`${classes.root} h-entry`}>
        <HCard post={post} avatar={avatar} />
        <BlogPostHeader
          post={post}
          siteUrl={siteUrl}
          shares={shares}
          showShare
          heading='h1'
        />
        <CardContent className='e-content'>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={`${classes.postContent}`}
          />
          <Webmentions post={post} />
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

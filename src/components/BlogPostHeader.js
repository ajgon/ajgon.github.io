import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'

import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import BlogPostShare from './BlogPostShare'

const styles = {
  cardCoverSmall: {
    maxHeight: '140px'
  },
  cardCoverLarge: {
    maxHeight: '280px'
  }
}

class BlogPostHeader extends React.Component {
  render () {
    const { classes, post, avatar, siteUrl, showShare, heading } = this.props

    return (
      <React.Fragment>
        <CardMedia
          component={Image}
          sizes={post.frontmatter.cover.childImageSharp.sizes}
          className={showShare ? classes.cardCoverLarge : classes.cardCoverSmall}
          src={post.frontmatter.cover.childImageSharp.sizes.base64}
        />
        <CardHeader
          title={post.frontmatter.title}
          titleTypographyProps={{component: heading || 'span'}}
          subheader={post.frontmatter.date}
          action={showShare ? <BlogPostShare post={post} siteUrl={siteUrl} /> : null}
        />
      </React.Fragment>
    )
  }
}

BlogPostHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostHeader)

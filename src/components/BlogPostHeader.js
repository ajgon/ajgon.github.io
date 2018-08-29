import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'

import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import BlogPostShare from './BlogPostShare'

const styles = {
  cardCover: {
    maxHeight: '280px'
  }
}

class BlogPostHeader extends React.Component {
  render () {
    const { classes, post, avatar, siteUrl } = this.props

    return (
      <React.Fragment>
        <CardHeader
          title={post.frontmatter.title}
          subheader={post.frontmatter.date}
          action={<BlogPostShare post={post} siteUrl={siteUrl} />}
          avatar={
            <Avatar sizes={avatar.sizes.sizes}
              src={avatar.sizes.src}
              srcSet={avatar.sizes.srcSet} />
          }
        />
        <CardMedia
          component={Image}
          sizes={post.frontmatter.cover.childImageSharp.sizes}
          className={classes.cardCover}
          src={post.frontmatter.cover.childImageSharp.sizes.base64}
        />
      </React.Fragment>
    )
  }
}

BlogPostHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostHeader)

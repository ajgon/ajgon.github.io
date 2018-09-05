import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'

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
    const { classes, post, siteUrl, showShare, heading, shares } = this.props

    return (
      <React.Fragment>
        <CardMedia
          component={Image}
          sizes={post.frontmatter.cover.childImageSharp.sizes}
          className={
            showShare ? classes.cardCoverLarge : classes.cardCoverSmall
          }
          src={post.frontmatter.cover.childImageSharp.sizes.base64}
        />
        <CardHeader
          title={post.frontmatter.title}
          titleTypographyProps={{ component: heading || 'span' }}
          subheader={showShare ? post.frontmatter.date : null}
          action={
            showShare ? (
              <BlogPostShare post={post} siteUrl={siteUrl} shares={shares} />
            ) : null
          }
        />
      </React.Fragment>
    )
  }
}

BlogPostHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostHeader)

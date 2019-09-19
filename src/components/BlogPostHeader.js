import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'

import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import BlogPostShare from './BlogPostShare'

const styles = theme => ({
  cardCoverSmall: {
    maxHeight: '200px'
  },
  cardCoverLarge: {
    maxHeight: '450px'
  },
  cardTitle: {
    fontSize: '3.5rem',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  }
})

class BlogPostHeader extends React.Component {
  render () {
    const { classes, post, siteUrl, showShare, heading, shares } = this.props
    const cardHeader = (
      <CardHeader
        title={post.frontmatter.title}
        titleTypographyProps={{
          component: heading || 'span',
          className: showShare ? classes.cardTitle : ''
        }}
        subheader={showShare ? post.frontmatter.date : null}
        action={
          showShare ? (
            <BlogPostShare post={post} siteUrl={siteUrl} shares={shares} />
          ) : null
        }
      />
    )
    const cardMedia = (
      <CardMedia
        component={Image}
        sizes={post.frontmatter.cover.childImageSharp.fluid}
        className={showShare ? classes.cardCoverLarge : classes.cardCoverSmall}
        src={post.frontmatter.cover.childImageSharp.fluid.base64}
      />
    )

    return (
      <React.Fragment>
        {showShare ? cardHeader : cardMedia}
        {showShare ? cardMedia : cardHeader}
      </React.Fragment>
    )
  }
}

BlogPostHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostHeader)

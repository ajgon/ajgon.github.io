import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'

const styles = {
  cardSpacing: {
    marginBottom: '2.5em'
  },
  cardBorder: {
    boxShadow: 'none',
    border: 'solid 1px #ccc'
  }
}

class BlogExcerpt extends React.Component {
  render () {
    const { classes, post, siteUrl, showSummary, shares } = this.props
    let cardContent

    if (showSummary) {
      cardContent = (
        <CardContent>
          <Typography component='p'>{post.excerpt}</Typography>
        </CardContent>
      )
    }

    return (
      <Card className={`${classes.cardSpacing} ${classes.cardBorder}`}>
        <Link to={post.frontmatter.path}>
          <BlogPostHeader
            post={post}
            siteUrl={siteUrl}
            showShare={showSummary}
            shares={shares}
          />
        </Link>
        {cardContent}
      </Card>
    )
  }
}

BlogExcerpt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogExcerpt)

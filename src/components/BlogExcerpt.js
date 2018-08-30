import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'

const styles = {
  cardSpacing: {
    marginBottom: '2.5em'
  },
  pushRight: {
    flexGrow: '1'
  }
}

class BlogExcerpt extends React.Component {
  render () {
    const { classes, post, avatar, siteUrl, showSummary } = this.props
    let cardContent

    if (showSummary) {
      cardContent = <CardContent><Typography component='p'>{post.excerpt}</Typography></CardContent>
    }

    return (
      <Card className={classes.cardSpacing}>
        <Link to={post.frontmatter.path}>
          <BlogPostHeader post={post} avatar={avatar} siteUrl={siteUrl} showShare={showSummary} />
        </Link>
        {cardContent}
        <CardActions>
          <div className={classes.pushRight} />
          <Link to={post.frontmatter.path}>
            <Button size='small'>
              View More
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  }
}

BlogExcerpt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogExcerpt)

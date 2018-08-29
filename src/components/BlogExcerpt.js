import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'
import Link from 'gatsby-link'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  cardCover: {
    maxHeight: '280px'
  },
  cardSpacing: {
    marginBottom: '2.5em'
  },
  pushRight: {
    flexGrow: '1'
  }
}

class BlogExcerpt extends React.Component {
  render () {
    const { classes, post, avatar } = this.props

    return (
      <Card className={classes.cardSpacing}>
        <CardHeader
          title={post.frontmatter.title}
          subheader={post.frontmatter.date}
          action={<IconButton><ShareIcon /></IconButton>}
          avatar={<Avatar sizes={avatar.sizes.sizes}
            src={avatar.sizes.src}
            srcSet={avatar.sizes.srcSet} />}
        />
        <Link to={post.frontmatter.path}>
          <CardMedia
            component={Image}
            sizes={post.frontmatter.cover.childImageSharp.sizes}
            className={classes.cardCover}
            src={post.frontmatter.cover.childImageSharp.sizes.base64}
          />
        </Link>
        <CardContent>
          <Typography component='p'>
            {post.excerpt}
          </Typography>
        </CardContent>
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

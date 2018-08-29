import React from 'react'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'
import Disqus from 'disqus-react'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
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
  }
}

class BlogPost extends React.Component {
  render () {
    const { classes, post, avatar } = this.props
    const disqusShortname = 'ajgon'
    const disqusConfig = {
      url: `${window.location.origin}${post.frontmatter.path}`,
      identifier: post.id,
      title: post.title
    }

    return (
      <Card className={classes.cardSpacing}>
        <CardHeader
          title={post.frontmatter.title}
          subheader={post.frontmatter.date}
          action={<IconButton><ShareIcon /></IconButton>}
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
        <CardContent>
          <Typography dangerouslySetInnerHTML={{ __html: post.html }} />
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </CardContent>
      </Card>
    )
  }
}

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPost)

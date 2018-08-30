import React from 'react'
import PropTypes from 'prop-types'

import Disqus from 'disqus-react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import BlogPostHeader from './BlogPostHeader'

const styles = {
  cardSpacing: {
    marginBottom: '2.5em'
  }
}

class BlogPost extends React.Component {
  render () {
    const { classes, post, avatar, siteUrl } = this.props
    const disqusShortname = 'ajgon'
    const disqusConfig = {
      url: `https://www.rzegocki.pl${post.frontmatter.path}`,
      identifier: post.id,
      title: post.title
    }

    return (
      <Card className={classes.cardSpacing}>
        <BlogPostHeader post={post} avatar={avatar} siteUrl={siteUrl} showShare={true} />
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

import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ShareIcon from '@material-ui/icons/Share'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  menuItemLink: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

class BlogPostShare extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      anchorEl: null
    }

    this.handleClick = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    this.handleClose = () => {
      this.setState({ anchorEl: null })
    }
  }

  render () {
    const { classes, post, siteUrl } = this.props
    const { anchorEl } = this.state
    const encodedPostUrl = encodeURIComponent(`${siteUrl}${post.frontmatter.path}`)

    return (
      <React.Fragment>
        <IconButton aria-haspopup='true' aria-owns={anchorEl ? 'share-menu' : null} onClick={this.handleClick}>
          <ShareIcon />
        </IconButton>
        <Menu
          id='share-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedPostUrl};display=popup`} target='_blank' className={classes.menuItemLink}>Facebook</a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedPostUrl}&amp;title=`} target='_blank' className={classes.menuItemLink}>LinkedIn</a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href={`https://twitter.com/share?url=${encodedPostUrl}&amp;text=`} target='_blank' className={classes.menuItemLink}>Twitter</a></MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

BlogPostShare.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostShare)

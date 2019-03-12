import React from 'react'
import PropTypes from 'prop-types'
import NewWindow from 'react-new-window/umd/react-new-window'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ShareIcon from '@material-ui/icons/Share'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import WebShare from './WebShare'

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
      anchorEl: null,
      opened: {}
    }

    props.shares.forEach(share => {
      // eslint-disable-next-line
      this.state.opened[share.node.slug] = false
    })
  }

  handleOpenShareMenu (event) {
    event.preventDefault()
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose () {
    this.setState({ anchorEl: null })
  }

  toggleOpened (site) {
    this.setState(prevState => {
      prevState.opened[site] = !prevState.opened[site]
      return prevState
    })
  }

  newWindowUnloaded (site) {
    let opened = JSON.parse(JSON.stringify(this.state.opened))
    opened[site] = false
    this.setState({ opened })
  }

  render () {
    const { classes, post, siteUrl, shares } = this.props
    const { anchorEl, opened } = this.state
    const postUrl = `${siteUrl}${post.frontmatter.path}`
    const encodedPostUrl = encodeURIComponent(postUrl)
    const shareButtonId = `share-button-${post.frontmatter.id}`

    return (
      <nav aria-labelledby={shareButtonId}>
        <WebShare
          title={post.frontmatter.title}
          text=''
          url={postUrl}
          fallbackComponent={
            <IconButton
              aria-label='Share'
              id={shareButtonId}
              aria-haspopup='true'
              aria-owns={anchorEl ? 'share-menu' : null}
              onClick={event => this.handleOpenShareMenu(event)}
            >
              <ShareIcon />
            </IconButton>
          }
        >
          <IconButton aria-label='Share' id={shareButtonId}>
            <ShareIcon />
          </IconButton>
        </WebShare>
        <Menu
          id='share-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()}
        >
          {shares.map(share => {
            return (
              <MenuItem onClick={() => this.handleClose()} key={share.node.id}>
                <Typography
                  variant='button'
                  className={classes.menuItemLink}
                  onClick={() => this.toggleOpened(share.node.slug)}
                >
                  {share.node.name}
                </Typography>
              </MenuItem>
            )
          })}
        </Menu>
        {shares.map(share => {
          return (
            opened[share.node.slug] && (
              <NewWindow
                url={share.node.url.replace('%POSTURL%', encodedPostUrl)}
                features={{
                  width: share.node.width,
                  height: share.node.height
                }}
                onUnload={() => this.newWindowUnloaded(share.node.slug)}
              />
            )
          )
        })}
      </nav>
    )
  }
}

BlogPostShare.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BlogPostShare)

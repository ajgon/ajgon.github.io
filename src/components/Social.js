import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'

import IconGitHub from '../icons/social-github.svg'
import IconKeybase from '../icons/social-keybase.svg'
import IconLinkedIn from '../icons/social-linkedin.svg'

const styles = {
  mediumButton: {
    width: '60px',
    height: '60px'
  },
  mediumIcon: {
    width: '40px',
    height: '40px',
    color: '#333'
  }
}

class Social extends React.Component {
  render () {
    const { classes, node } = this.props
    const icons = {
      github: IconGitHub,
      keybase: IconKeybase,
      linkedin: IconLinkedIn
    }

    return (
      <a
        href={node.url}
        target='_blank'
        aria-label={node.name}
        id={`link-${node.slug}`}
        rel='noopener noreferrer'
      >
        <IconButton
          aria-labelledby={`link-${node.slug}`}
          className={classes.mediumButton}
        >
          <SvgIcon className={classes.mediumIcon}>
            {icons[node.slug]()}
          </SvgIcon>
        </IconButton>
      </a>
    )
  }
}

Social.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Social)

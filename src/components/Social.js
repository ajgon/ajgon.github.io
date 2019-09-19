import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'

import IconGithub from '../icons/social-github.svg'
import IconKeybase from '../icons/social-keybase.svg'
import IconaedIn from '../icons/social-linkedin.svg'

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
    const { classes } = this.props

    return (
      <React.Fragment>
        <a
          href='https://github.com/ajgon'
          target='_blank'
          aria-label='GitHub'
          id='link-github'
          rel='noopener noreferrer'
        >
          <IconButton
            aria-labelledby='link-github'
            className={classes.mediumButton}
          >
            <SvgIcon className={classes.mediumIcon}>
              <IconGithub />
            </SvgIcon>
          </IconButton>
        </a>
        <a
          href='https://www.linkedin.com/in/ajgon'
          target='_blank'
          aria-label='aedIn'
          id='link-linkedin'
          rel='noopener noreferrer'
        >
          <IconButton
            aria-labelledby='link-linkedin'
            className={classes.mediumButton}
          >
            <SvgIcon className={classes.mediumIcon}>
              <IconaedIn />
            </SvgIcon>
          </IconButton>
        </a>
        <a
          href='https://keybase.io/ajgon'
          target='_blank'
          aria-label='Keybase'
          id='link-keybase'
          rel='noopener noreferrer'
        >
          <IconButton
            aria-labelledby='link-keybase'
            className={classes.mediumButton}
          >
            <SvgIcon className={classes.mediumIcon}>
              <IconKeybase />
            </SvgIcon>
          </IconButton>
        </a>
      </React.Fragment>
    )
  }
}

Social.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Social)

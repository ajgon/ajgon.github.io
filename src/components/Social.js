import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import IconGithub from '../icons/social-github.svg'
import IconKeybase from '../icons/social-keybase.svg'
import IconLinkedIn from '../icons/social-linkedin.svg'
import IconTwitter from '../icons/social-twitter.svg'

const styles = {
  mediumIcon: {
    width: '32px',
    height: '32px'
  }
}

class Social extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <OutboundLink href='https://github.com/ajgon' target='_blank' aria-label='GitHub' id='link-github' rel='noopener'>
          <IconButton aria-labelledby='link-github'>
            <SvgIcon className={classes.mediumIcon}><IconGithub /></SvgIcon>
          </IconButton>
        </OutboundLink>
        <OutboundLink href='https://www.linkedin.com/in/ajgon' target='_blank' aria-label='LinkedIn' id='link-linkedin' rel='noopener'>
          <IconButton aria-labelledby='link-linkedin'>
            <SvgIcon className={classes.mediumIcon}><IconLinkedIn /></SvgIcon>
          </IconButton>
        </OutboundLink>
        <OutboundLink href='https://twitter.com/ajgon' target='_blank' aria-label='Twitter' id='link-twitter' rel='noopener'>
          <IconButton aria-labelledby='link-twitter'>
            <SvgIcon className={classes.mediumIcon}><IconTwitter /></SvgIcon>
          </IconButton>
        </OutboundLink>
        <OutboundLink href='https://keybase.io/ajgon' target='_blank' aria-label='Keybase' id='link-keybase' rel='noopener'>
          <IconButton aria-labelledby='link-keybase'>
            <SvgIcon className={classes.mediumIcon}><IconKeybase /></SvgIcon>
          </IconButton>
        </OutboundLink>
      </React.Fragment>
    )
  }
}

Social.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Social)

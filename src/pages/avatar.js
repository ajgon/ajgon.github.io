import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'

import AvatarAjgon from '../images/avatars/ajgon.png'
import AvatarProgramajor from '../images/avatars/programajor.png'

import Section from '../components/Section.js'

const styles = {
  autoFit: {
    maxWidth: '100%'
  }
}

class Avatar extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Section>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <a href={AvatarAjgon} download='ajgon.png'>
              <img src={AvatarAjgon} alt='' className={classes.autoFit} />
            </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <a href={AvatarProgramajor} download='programajor.png'>
              <img src={AvatarProgramajor} alt='' className={classes.autoFit} />
            </a>
          </Grid>
        </Grid>
      </Section>
    )
  }
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Avatar))

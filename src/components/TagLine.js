import React from 'react'
import PropTypes from 'prop-types'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  tagLineSize: {
    fontSize: '3rem'
  }
}

class TagLine extends React.Component {
  render () {
		const { classes } = this.props

    return (
      <React.Fragment>
        <Hidden smUp>
          <Typography variant='headline' gutterBottom component="h2">
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography variant='display3' className={classes.tagLineSize} gutterBottom component="h2">
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
      </React.Fragment>
    )
  }
}

TagLine.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TagLine)




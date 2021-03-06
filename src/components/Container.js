import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => {
  return {
    root: {
      '& a': {
        // color: theme.palette.secondary.main,
        color: '#b3003d',
        textDecoration: 'none'
      },
      paddingLeft: 'env(safe-area-inset-left)',
      paddingRight: 'env(safe-area-inset-right)'
    },
    containerPositioner: {
      marginTop: '2.5rem',
      justifyContent: 'center',
      display: 'flex'
    },
    limitedContainer: {
      maxWidth: '1000px',
      overflow: 'hidden'
    }
  }
}

class Container extends React.Component {
  render () {
    const { classes, location } = this.props

    return (
      <Grid container justify='center' className={classes.root} role='main'>
        <Grid
          item
          xs={location.pathname.match(/\/blog\/.+/) ? 12 : 11}
          md={9}
          className={classes.containerPositioner}
        >
          <div className={classes.limitedContainer}>{this.props.children}</div>
        </Grid>
      </Grid>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)

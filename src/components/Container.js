import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = (theme) => {
  return({
    root: {
      '& a': {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
      }
    },
    limitedContainer: {
      maxWidth: '1000px',
      marginTop: '150px'
    }
  })
}

class Container extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={10} className={classes.limitedContainer}>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)
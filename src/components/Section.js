import React from 'react'
import PropTypes from 'prop-types'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      minHeight: '600px',
      padding: '0 5px',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 5px 0'
    }
  },
  strongHeader: {
    fontWeight: 'bold',
    marginBottom: '20px'
  }
})

class Section extends React.Component {
  render () {
    const {
      children,
      classes,
      component,
      headline,
      idName,
      className
    } = this.props
    const headlineLabel = `arialabel-${(headline || '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')}`

    if (!headline) {
      return (
        <section className={`${classes.root} ${className || ''}`}>
          {children}
        </section>
      )
    }

    return (
      <section
        className={`${classes.root} ${className || ''}`}
        id={idName || headline.toLowerCase()}
        aria-labelledby={headlineLabel}
      >
        <Hidden smUp implementation='css'>
          <Typography
            variant='h3'
            className={classes.strongHeader}
            id={headlineLabel}
            component={component || 'h2'}
          >
            {headline}
          </Typography>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Typography
            variant='h1'
            className={classes.strongHeader}
            id={headlineLabel}
            component={component || 'h2'}
          >
            {headline}
          </Typography>
        </Hidden>
        {children}
      </section>
    )
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Section)

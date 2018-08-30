import React from 'react'
import PropTypes from 'prop-types'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    paddingTop: '5rem'
  },
  strongHeader: {
    fontWeight: 'bold',
    marginBottom: '20px'
  }
}

class Section extends React.Component {
  render () {
    const { children, classes, headline, idName } = this.props
    const headlineLabel = `arialabel-${headline.toLowerCase().replace(/[^a-z0-9]/g, '')}`

    return (
      <section className={classes.root} id={idName || headline.toLowerCase()} role='region' aria-labelledby={headlineLabel}>
        <Hidden smUp>
          <Typography variant='display2' className={classes.strongHeader} id={headlineLabel}>{headline}</Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography variant='display4' className={classes.strongHeader} id={headlineLabel}>{headline}</Typography>
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

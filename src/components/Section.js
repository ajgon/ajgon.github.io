import React from 'react'
import PropTypes from 'prop-types'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    marginTop: '5rem',
  },
	strongHeader: {
		fontWeight: 'bold',
		marginBottom: '20px'
	}
}

class Section extends React.Component {
  render () {
		const { children, classes, headline, idName } = this.props

    return (
      <section className={classes.root} id={idName || headline.toLowerCase()}>
        <Typography variant='display4' className={classes.strongHeader}>{headline}</Typography>
        {children}
      </section>
    )
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Section)





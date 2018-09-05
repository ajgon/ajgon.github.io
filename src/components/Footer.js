import React from 'react'
import PropTypes from 'prop-types'

import Obfuscate from 'react-obfuscate'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: '#ffc400',
    padding: '7.5rem 5px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10rem'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '15rem'
    }
  },
  strongHeader: {
    fontWeight: 'bold',
    marginBottom: '20px',
    '& a': {
      color: '#333'
    },
    '& a:hover': {
      textDecoration: 'underline'
    }
  }
})

class Footer extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <section className={classes.root} id='contact' role='region' aria-label='Contact'>
        <Hidden mdUp>
          <Typography variant='display2' className={classes.strongHeader}><Obfuscate email='igor@rzegocki.pl' headers={{ subject: 'Yo Igor!' }} /></Typography>
        </Hidden>
        <Hidden smDown>
          <Typography variant='display4' className={classes.strongHeader}><Obfuscate email='igor@rzegocki.pl' headers={{ subject: 'Yo Igor!' }} /></Typography>
        </Hidden>
      </section>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)

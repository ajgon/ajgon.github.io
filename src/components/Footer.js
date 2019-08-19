import React from 'react'
import PropTypes from 'prop-types'

import Obfuscate from 'react-obfuscate'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: '#ffc400',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem'
    },
    [theme.breakpoints.down('md')]: {
      padding: '7.5rem 5px',
      marginTop: '15rem'
    },
    [theme.breakpoints.up('md')]: {
      margin: '40vh 0 0',
      height: '60vh',
      minHeight: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
      <section className={classes.root} id='contact' aria-label='Contact'>
        <Hidden mdUp implementation='css'>
          <Typography variant='h3' className={classes.strongHeader}>
            <Obfuscate
              email='igor@rzegocki.pl'
              headers={{ subject: 'Yo Igor!' }}
            />
          </Typography>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Typography variant='h1' className={classes.strongHeader}>
            <Obfuscate
              email='igor@rzegocki.pl'
              headers={{ subject: 'Yo Igor!' }}
            />
          </Typography>
        </Hidden>
      </section>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)

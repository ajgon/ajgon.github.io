import React from 'react'
import PropTypes from 'prop-types'

import Obfuscate from 'react-obfuscate'

import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: '#b5b5b5',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '5rem 5px',
      marginTop: '7rem'
    },
    [theme.breakpoints.up('md')]: {
      margin: '15rem 0 0',
      height: '40vh',
      minHeight: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  strongHeader: {
    [theme.breakpoints.down('sm')]: {
      '& a': {
        fontSize: '2rem'
      }
    },
    fontWeight: 'bold',
    marginBottom: '20px',
    '& a': {
      color: '#333',
      textDecoration: 'none'
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

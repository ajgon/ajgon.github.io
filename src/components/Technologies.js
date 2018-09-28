import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import IconAWS from '../icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
import IconCSS from '../icons/css3/css3-plain-wordmark.svg'
import IconDocker from '../icons/docker/docker-plain-wordmark.svg'
import IconGit from '../icons/git/git-plain-wordmark.svg'
import IconHtml from '../icons/html5/html5-plain-wordmark.svg'
import IconJavaScript from '../icons/javascript/javascript-plain.svg'
import IconLinux from '../icons/linux/linux-plain.svg'
import IconNginx from '../icons/nginx/nginx-original.svg'
import IconPostgreSql from '../icons/postgresql/postgresql-plain-wordmark.svg'
import IconRails from '../icons/rails/rails-plain-wordmark.svg'
import IconReact from '../icons/react/react-original-wordmark.svg'
import IconRuby from '../icons/ruby/ruby-plain-wordmark.svg'

const styles = {
  root: {
    marginTop: '1em'
  },
  techIcon: {
    padding: '1.5rem',
    boxShadow: 'none',
    border: 'solid 1px #ccc'
  },
  block: {
    display: 'block'
  }
}

class Technologies extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconRuby className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconRails className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconJavaScript className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconReact className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconAWS className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconDocker className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconGit className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconHtml className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconCSS className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconLinux className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconPostgreSql className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Paper className={classes.techIcon}>
            <IconNginx className={classes.block} />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

Technologies.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Technologies)

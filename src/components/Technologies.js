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
  cardSpacing: {
    marginBottom: '2.5em'
  },
  cellPadding: {
    padding: '1rem'
  },
  block: {
    display: 'block'
  }
}

class Technologies extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container spacing={24} className={classes.cardSpacing}>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconRuby className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconRails className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconJavaScript className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconReact className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconAWS className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconDocker className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconGit className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconHtml className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconCSS className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconLinux className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
            <IconPostgreSql className={classes.block} />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.cellPadding}>
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

import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  sideMenu: {
    position: 'fixed',
    right: '0',
    top: '20%',
    zIndex: '100',
    '& a': {
      textDecoration: 'none'
    }
  }
}

class SideMenu extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.sideMenu}>
        <MenuList>
          <Link to="/"><MenuItem>About</MenuItem></Link>
          <Link to="/#technologies"><MenuItem>Technologies</MenuItem></Link>
          <Link to="/#projects"><MenuItem>Projects</MenuItem></Link>
          <Link to="/#blog"><MenuItem>Blog</MenuItem></Link>
          <Link to="/#contact"><MenuItem>Contact</MenuItem></Link>
        </MenuList>
      </Paper>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)




import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import { Link as ScrollLink } from 'react-scroll'

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
    const { classes, mainPage, menuItems } = this.props

    return (
      <Paper className={classes.sideMenu} role='navigation'>
        <MenuList>
          {menuItems.map(menuItem => {
            if (mainPage) {
              return (
                <ScrollLink to={menuItem.node.to} smooth hashSpy key={menuItem.node.id}><MenuItem>{menuItem.node.name}</MenuItem></ScrollLink>
              )
            }
            return (<MenuItem component={Link} to={`/#${menuItem.node.to}`} key={menuItem.node.id}>{menuItem.node.name}</MenuItem>)
          })}
        </MenuList>
      </Paper>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)

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
    background: '#424242',
    '& a': {
      textDecoration: 'none',
      color: '#fff'
    },
    '& a li': {
      color: '#fff'
    }
  }
}

class SideMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      scrollLink: false
    }
  }

  componentDidMount () {
    this.setState({ scrollLink: true })
  }

  render () {
    const { classes, mainPage, menuItems } = this.props
    const { scrollLink } = this.state

    return (
      <Paper className={classes.sideMenu} role='navigation'>
        <MenuList>
          {menuItems.map(menuItem => {
            if (scrollLink && mainPage) {
              return (
                <ScrollLink to={menuItem.node.to} smooth key={menuItem.node.id}>
                  <MenuItem>{menuItem.node.name}</MenuItem>
                </ScrollLink>
              )
            }
            return (
              <MenuItem
                component={Link}
                to={`/#${menuItem.node.to}`}
                key={menuItem.node.id}
              >
                {menuItem.node.name}
              </MenuItem>
            )
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

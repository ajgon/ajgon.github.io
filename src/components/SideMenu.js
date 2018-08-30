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
    const { classes, mainPage } = this.props
    let menuList

    if(mainPage) {
      menuList = (
        <MenuList>
          <ScrollLink to="about" smooth={true} hashSpy={true}><MenuItem>About</MenuItem></ScrollLink>
          <ScrollLink to="technologies" smooth={true} hashSpy={true}><MenuItem>Technologies</MenuItem></ScrollLink>
          <ScrollLink to="projects" smooth={true} hashSpy={true}><MenuItem>Projects</MenuItem></ScrollLink>
          <ScrollLink to="blog" smooth={true} hashSpy={true}><MenuItem>Blog</MenuItem></ScrollLink>
          <ScrollLink to="contact" smooth={true} hashSpy={true}><MenuItem>Contact</MenuItem></ScrollLink>
        </MenuList>
      )
    } else {
      menuList = (
        <MenuList>
          <Link to="/"><MenuItem>About</MenuItem></Link>
          <Link to="/#technologies"><MenuItem>Technologies</MenuItem></Link>
          <Link to="/#projects"><MenuItem>Projects</MenuItem></Link>
          <Link to="/#blog"><MenuItem>Blog</MenuItem></Link>
          <Link to="/#contact"><MenuItem>Contact</MenuItem></Link>
        </MenuList>
      )
    }

    return (
      <Paper className={classes.sideMenu}>
        {menuList}
      </Paper>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)




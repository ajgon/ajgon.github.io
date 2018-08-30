import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import { Link as ScrollLink } from 'react-scroll'

import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MenuIcon from '@material-ui/icons/Menu'

import SideMenu from '../components/SideMenu.js'
import Social from '../components/Social.js'

const styles = (theme) => {
  return({
		flex: {
			flexGrow: 1
		},
		noUnderline: {
			textDecoration: 'none'
		},
		cleanBar: {
			background: theme.palette.background.paper,
			boxShadow: 'none'
		}
  })
}

class MenuAppBar extends React.Component {
  constructor (props) {
    super(props)

    const pathTabsMap = {
      '/': 0,
      '/blog': 1
    }
    const pathTabValue = pathTabsMap[props.location.pathname.split('/').slice(0, 2).join('/')]

    this.state = {
      drawer: false
    }
  }

  toggleDrawer (newState) {
    return () => {
      this.setState({
        drawer: newState
      })
    }
  }

  render () {
    const { classes, location, mainPage, menuItems } = this.props
    const largeScreen = isWidthUp('md', this.props.width)
    let backButton = null

    if (location.pathname.match(/\/blog\/.+/)) {
      backButton = (
        <Link to="/blog" aria-label="Go back" id="back-button">
          <IconButton aria-labelledby="back-button">
            <ArrowBackIcon />
          </IconButton>
        </Link>
      )
    }

    return (
      <React.Fragment>
        <AppBar position={largeScreen ? 'static' : 'fixed'} className={largeScreen ? classes.cleanBar : ''}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton onClick={this.toggleDrawer(true)} aria-label='Menu'>
                <MenuIcon />
              </IconButton>
            </Hidden>
            {backButton}
            <Link to='/' className={`${classes.flex} ${classes.noUnderline}`}><Typography variant='title'>Igor Rzegocki</Typography></Link>
            <Social />
          </Toolbar>
        </AppBar>
        <Drawer anchor='bottom' open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <List component='nav'>
          {menuItems.map((menuItem) => {
            return(
              <ListItem button component={mainPage ? ScrollLink : Link} to={`${mainPage ? '' : '/#'}${menuItem.node.to}`} smooth={true} key={menuItem.node.id} onClick={this.toggleDrawer(false)}>
                <ListItemText primary={menuItem.node.name} />
              </ListItem>
            )
          })}
          </List>
        </Drawer>
        <Hidden smDown>
          <SideMenu mainPage={mainPage} menuItems={menuItems} />
        </Hidden>
      </React.Fragment>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withWidth()(withStyles(styles)(MenuAppBar))

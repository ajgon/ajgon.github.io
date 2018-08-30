import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
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
    const { classes, location, mainPage } = this.props
    let backButton = null

    if (location.pathname.match(/\/blog\/.+/)) {
      backButton = <Link to="/blog"><IconButton><ArrowBackIcon /></IconButton></Link>
    }

    return (
      <React.Fragment>
        <AppBar position="static" className={classes.cleanBar}>
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
            <ListItem button component={Link} to='/'>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button component={Link} to='/blog/'>
              <ListItemText primary='Blog' />
            </ListItem>
          </List>
        </Drawer>
        <Hidden smDown>
          <SideMenu mainPage={mainPage} />
        </Hidden>
      </React.Fragment>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuAppBar)

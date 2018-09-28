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
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

import SideMenu from '../components/SideMenu.js'
import Social from '../components/Social.js'

const styles = theme => {
  return {
    root: {
      zIndex: '1500',
      paddingLeft: 'env(safe-area-inset-left)',
      paddingRight: 'env(safe-area-inset-right)',
      [theme.breakpoints.up('md')]: {
        paddingTop: '20px'
      }
    },
    flex: {
      flexGrow: 1
    },
    center: {
      justifyContent: 'center'
    },
    hidden: {
      display: 'none'
    },
    noUnderline: {
      textDecoration: 'none'
    },
    pageName: {
      fontWeight: '600',
      paddingLeft: '10px',
      fontSize: '1.6rem'
    },
    underAppBar: {
      marginTop: '56px',
      '& > div': {
        marginTop: '56px'
      }
    },
    cleanBar: {
      background: theme.palette.background.paper,
      boxShadow: 'none'
    }
  }
}

class MenuAppBar extends React.Component {
  constructor (props) {
    super(props)

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
    const { classes, mainPage, menuItems } = this.props
    const largeScreen = isWidthUp('md', this.props.width)

    return (
      <React.Fragment>
        <AppBar
          position={largeScreen ? 'static' : 'fixed'}
          className={`${largeScreen ? classes.cleanBar : ''} ${classes.root}`}
        >
          <Toolbar>
            <Hidden mdUp>
              { mainPage &&
                <IconButton
                  onClick={this.toggleDrawer(!this.state.drawer)}
                  aria-label='Menu'
                  style={{ justifyContent: 'left' }}
                >
                  <CloseIcon
                    className={this.state.drawer ? '' : classes.hidden}
                  />
                  <MenuIcon className={this.state.drawer ? classes.hidden : ''} />
                </IconButton>
              }
              {
                !mainPage &&
                <Link to='/'>
                  <IconButton aria-label='Back' style={{ justifyContent: 'left' }}>
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
              }
            </Hidden>
            <Link to='/' className={`${classes.flex} ${classes.noUnderline}`}>
              <Typography variant='title' className={classes.pageName}>Igor Rzegocki</Typography>
            </Link>
            <Hidden xsDown>
              <Social />
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='top'
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
          className={classes.underAppBar}
        >
          <List component='nav'>
            {menuItems.map(menuItem => {
              return (
                <ListItem
                  button
                  component={mainPage ? ScrollLink : Link}
                  to={`${mainPage ? '' : '/#'}${menuItem.node.to}`}
                  smooth
                  key={menuItem.node.id}
                  onClick={this.toggleDrawer(false)}
                >
                  <ListItemText primary={menuItem.node.name} />
                </ListItem>
              )
            })}
            <ListItem
              button
              onClick={this.toggleDrawer(false)}
              className={classes.center}
            >
              <Social />
            </ListItem>
          </List>
        </Drawer>
        { mainPage &&
          <Hidden smDown>
            <SideMenu mainPage={mainPage} menuItems={menuItems} />
          </Hidden>
        }
      </React.Fragment>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withWidth()(withStyles(styles)(MenuAppBar))

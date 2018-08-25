import React from 'react'
import ReactDOM from 'react-dom'
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
import MenuIcon from '@material-ui/icons/Menu'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withRoot from '../withRoot';

const styles = {
  flex: {
    flexGrow: 1
  }
}

class MenuAppBar extends React.Component {
  state = {
    value: 0,
    drawer: false
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  switchTab = (tabNumber) => () => {
    this.setState({ value: tabNumber })
    this.toggleDrawer(false)()
  }

  toggleDrawer = (newState) => () => {
    this.setState({
      drawer: newState
    })
  }

  render() {
    const { value } = this.state
    const { classes } = this.props

    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Hidden smUp>
              <IconButton onClick={this.toggleDrawer(true)} aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography className={classes.flex} variant="title">Igor Rzegocki</Typography>
            <Hidden xsDown>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="About" component={Link} to="/" />
                <Tab label="Open Source" component={Link} to="/open-source/" />
                <Tab label="Blog" component={Link} to="/blog/" />
              </Tabs>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer anchor="bottom" open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <List component="nav">
            <ListItem button component={Link} to="/" onClick={this.switchTab(0)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/open-source/" onClick={this.switchTab(1)}>
              <ListItemText primary="Open Source" />
            </ListItem>
            <ListItem button component={Link} to="/blog/" onClick={this.switchTab(2)}>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(MenuAppBar))

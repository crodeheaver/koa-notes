import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles, Drawer, AppBar, Toolbar, List, ListItem, Typography } from '@material-ui/core'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class Layout extends Component {

  render = () => {
    const { classes } = this.props
    const { isAuthenticated, location, onLogoutClick } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Notes
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {isAuthenticated ?
              (
                <div>
                  <ListItem button component={Link} to="/" >
                    All
                  </ListItem>
                  <ListItem button onClick={onLogoutClick}>
                    Logout
                  </ListItem>
                </div>
              )
              :
              location === '/login' ?
                (
                  <ListItem button component={Link} to="/signup" >
                    Sign Up
                  </ListItem>
                )
                :
                (
                  <ListItem button component={Link} to="/login" >
                    Login
                  </ListItem>
                )
            }
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const wrappedLayout = withStyles(styles)(Layout)
export { wrappedLayout as Layout }

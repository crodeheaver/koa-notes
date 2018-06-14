import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
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

class ClippedDrawer extends Component {


    render = () => {
        const { classes } = this.props
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
                        {this.props.auth.isAuthenticated ?
                            (
                                <div>
                                    <ListItem button component={Link} to="/" >
                                        All
                                </ListItem>
                                    <ListItem button component={Link} to="/" >
                                        Logout
                                </ListItem>
                                </div>
                            )
                            :
                            this.props.location.pathname === '/login' ?
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

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
})

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ClippedDrawer)));

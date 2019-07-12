import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#213458',
    boxShadow: 'none',
    fix: 'absolute',
    position: 'fixed',
    opacity: '0.95',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  clicky: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255,255,255,0.7)',
    },
    '&:active': {
      color: 'rgba(255,95,193,1)',
    },
  },
  spacing:{
    width: '250px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center'
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="absolute">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <div className={classes.spacing}>
              <div className={classes.spacing}>
                <Link to="/" style={{ textDecoration: 'none' }}><span className={classes.clicky}>Home</span></Link>
              </div>
              <div className={classes.spacing}>
                <Link to="/admin" style={{ textDecoration: 'none'}}><span className={classes.clicky}>Admin</span></Link>
              </div>
            </div>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
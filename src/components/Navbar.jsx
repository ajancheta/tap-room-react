import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {

    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  spacing:{
    width: '250px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          <div className={classes.spacing}>
            <div className={classes.spacing}>
              <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}><a className={classes.clicky}>Home</a></Link>
            </div>
            <div className={classes.spacing}>
              <Link to="/produce" style={{ textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}><a className={classes.clicky}>Administrator</a></Link>
            </div>
          </div>

        </Typography>
      </AppBar>
    </div>
  );
}


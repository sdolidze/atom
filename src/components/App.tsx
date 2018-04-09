import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { Main } from './Main';
import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  StyleRulesCallback,
} from 'material-ui';

const drawerWidth = 240;

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
    height: 700,
    zIndex: 1,
    overflow: 'hidden' as 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative' as 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {},
});

const menuItems = [
  { name: 'Home', icon: 'home', url: '/' },
  { name: 'Counter', icon: 'functions', url: '/counter' },
  { name: 'Comics', icon: 'face', url: '/comics' },
  { name: 'Swimming', icon: 'wb_sunny', url: '/swimming' },
  { name: 'Exchange Rates', icon: 'timeline', url: '/exchange-rates' },
  { name: 'Star Wars', icon: 'star_rate', url: '/star-wars' },
  { name: 'Forms', icon: 'description', url: '/forms' },
  { name: 'Material', icon: 'pets', url: '/material' },
  { name: 'Login', icon: 'account_circle', url: '/login' },
];

function App({ classes, isLoggedIn, onPush }: any) {
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <Icon>brightness_5</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" noWrap={true}>
            Sandro's React Playground
          </Typography>
        </Toolbar>
      </AppBar>

      {isLoggedIn ? (
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.toolbar} />
          <List>
            {menuItems.map(({ name, icon, url }) => (
              <ListItem button={true} onClick={() => onPush(url)} key={name}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : null}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main isLoggedIn={isLoggedIn} />
      </main>
    </div>
  );
}

export default withStyles(styles)(App);

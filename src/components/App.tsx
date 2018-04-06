import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
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

// import List from 'material-ui/List';

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

type ListItemLinkProps = { url: string; icon: string; name: string };
const ListItemLink = withRouter(
  ({
    history,
    url,
    icon,
    name,
  }: RouteComponentProps<any> & ListItemLinkProps) => (
    <ListItem button={true} onClick={() => history.push(url)}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  ),
);

const menuItems = [
  { name: 'Home', icon: 'home', url: '/' },
  { name: 'Counter', icon: 'functions', url: '/counter' },
  { name: 'Comedians', icon: 'face', url: '/comedians' },
  { name: 'Swimming', icon: 'wb_sunny', url: '/swimming' },
  { name: 'Exchange Rates', icon: 'timeline', url: '/exchange-rates' },
  { name: 'Star Wars', icon: 'star_rate', url: '/star-wars' },
  { name: 'Forms', icon: 'description', url: '/forms' },
  { name: 'Material', icon: 'pets', url: '/material' },
  { name: 'Login', icon: 'account_circle', url: '/login' },
];

function ClippedDrawer({ classes }: any) {
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

      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.toolbar} />
        <List>
          {menuItems.map(props => <ListItemLink {...props} key={props.name} />)}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main />
      </main>
    </div>
  );
}

export default withStyles(styles)(ClippedDrawer);

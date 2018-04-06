import { withStyles } from 'material-ui/styles';
import * as React from 'react';
import {
  Button,
  Paper,
  StyleRulesCallback,
  Typography,
  TextField,
} from 'material-ui';

const styles: StyleRulesCallback = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: 400,
  }),
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  textField: {
    width: '100%',
  },
});

function Login({ classes }: any) {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <Typography variant="headline" component="h3">
          Login
        </Typography>
        <TextField
          id="username"
          label="Username"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          margin="normal"
          type="password"
        />
        <div className={classes.actions}>
          <Button variant="raised" color="primary" type="submit">
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Login);

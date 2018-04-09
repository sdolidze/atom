import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import * as React from 'react';
import { Redirect } from 'react-router';
import {
  Button,
  Paper,
  StyleRulesCallback,
  Typography,
  TextField,
} from 'material-ui';

export interface Props {
  classes?: any;
  username: string;
  onUsernameChange: React.ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  password: string;
  onLogin: () => void;
  error: boolean;
  loading: boolean;
  isLoggedIn: boolean;
}

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
  progress: {
    marginTop: -16,
    marginBottom: 16,
    marginLeft: -24,
    marginRight: -24,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  textField: {
    width: '100%',
  },
});

function Login({
  classes,
  loading,
  onLogin,
  error,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  isLoggedIn,
}: Props) {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <LinearProgress className={classes.progress} hidden={!loading} />
        <Typography variant="headline" component="h3">
          Login
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault();
            onLogin();
          }}
        >
          <TextField
            id="username"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={onUsernameChange}
            error={error}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            margin="normal"
            type="password"
            value={password}
            onChange={onPasswordChange}
            error={error}
            helperText={error && 'incorrect username or password'}
          />
          <div className={classes.actions}>
            <Button variant="raised" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Login);

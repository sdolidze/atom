import { withStyles } from 'material-ui/styles';
import * as React from 'react';
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
  usernameChange: React.ChangeEventHandler<HTMLInputElement>;
  passwordChange: React.ChangeEventHandler<HTMLInputElement>;
  password: string;
  onLogin: () => void;
  error: boolean;
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
  onLogin,
  error,
  username,
  password,
  usernameChange,
  passwordChange,
}: Props) {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
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
            onChange={usernameChange}
            error={error}
            margin="normal"
          />
          <TextField
            inputRef={el => (password = el)}
            id="password"
            label="Password"
            className={classes.textField}
            margin="normal"
            type="password"
            value={password}
            onChange={passwordChange}
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

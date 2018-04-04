import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Box } from './Box';

const styles = {
  div: { margin: '10px 0' },
  label: { marginRight: '10px' },
};

type FormData = {
  username: string;
  password: string;
  passwordRepeat: string;
};

const validate = ({ password, passwordRepeat }: FormData) => {
  const errors = {} as any;
  if (password !== passwordRepeat) {
    errors._error = 'Passwords do not match';
  }
  return errors;
};

const LoginFormInner = ({ handleSubmit, error }: InjectedFormProps) => {
  return (
    <Box color="green" title="Login" size="medium">
      <form onSubmit={handleSubmit}>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="username">
            Username
          </label>
          <Field name="username" component="input" type="text" />
        </div>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <Field name="password" component="input" type="password" />
        </div>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="email">
            Repeat Password
          </label>
          <Field name="passwordRepeat" component="input" type="password" />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">login</button>
      </form>
    </Box>
  );
};

export const LoginForm = reduxForm<FormData>({
  form: 'login',
  validate,
  onSubmit: (values: FormData) => {
    console.log(values);
  },
})(LoginFormInner);

import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Box } from './Box';

const styles = {
  div: { margin: '10px 0' },
  label: { marginRight: '10px' },
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialValues: FormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
};

// If you want to change form from outside, import `change` and dispatch it

const ContactFormInner = ({ handleSubmit, change }: InjectedFormProps) => {
  return (
    <Box color="purple" title="Contact" size="medium">
      <form onSubmit={handleSubmit}>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="firstName">
            First Name
          </label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <Field name="email" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => change('firstName', 'Sandro')}>
          Change name to Sandro
        </button>
      </form>
    </Box>
  );
};

export const ContactForm = reduxForm<FormData>({
  form: 'contact',
  onSubmit: (values, dispatch) => {
    console.log(values, dispatch);
  },
  initialValues,
})(ContactFormInner);

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box } from './Box';

const styles = {
  div: { margin: '10px 0' },
  label: { marginRight: '10px' },
};

const ContactFormInner = ({ handleSubmit }: any) => {
  return (
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
    </form>
  );
};

const ContactForm = reduxForm({
  form: 'contact',
  onSubmit: (values, dispatch) => {
    console.log(values, dispatch);
  },
})(ContactFormInner);

export function Forms() {
  return (
    <Box color="purple" title="Forms" size="medium">
      <ContactForm />
    </Box>
  );
}

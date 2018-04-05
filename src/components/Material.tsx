import Button from 'material-ui/Button';
import * as React from 'react';

const styles = {
  div: {
    margin: '20px',
  },
};

export function Material() {
  return (
    <div style={styles.div}>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </div>
  );
}

import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';

const ErrorState = ({ componentStyles, onSetComponentStyles, variant }) => {
  return (
    <div>
      <TextField
        id='backgroundColor'
        label='Background color'
        value={componentStyles.error?.backgroundColor || ''}
        size='small'
        style={styles.field}
        onChange={onSetComponentStyles}
      />
      <TextField
        id='borderRadius'
        label='Border radius'
        value={componentStyles.error?.borderRadius || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='color'
        label='Font color'
        value={componentStyles.error?.color || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      />
    </div>
  );
};

export default ErrorState;

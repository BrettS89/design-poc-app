import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';

const BaseState = ({ componentStyles, onSetComponentStyles, variant }) => {
  return (
    <div>
      <TextField
        id='backgroundColor'
        label='Background color'
        value={componentStyles[variant]?.backgroundColor || ''}
        size='small'
        style={styles.field}
        onChange={onSetComponentStyles}
      />
      <TextField
        id='borderRadius'
        label='Border radius (px)'
        value={componentStyles[variant]?.borderRadius || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='color'
        label='Font color'
        value={componentStyles[variant]?.color || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      />
    </div>
  );
};

export default BaseState;

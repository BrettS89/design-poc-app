import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BaseComponent from './base';
import ErrorComponent from './error';


const EditInput = ({ componentStyles, setComponentStyles, setDummyText, dummyText }) => {
  const [componentState, setComponentState] = React.useState('base');

  const onSetComponentStyles = (e) => {
    let val = e.target.type === 'number' ? Number(e.target.value) : e.target.value;

    if (!e.target.value) {
      val = null;
    }

    if (componentState === 'error') {
      setComponentStyles({
        ...componentStyles,
        error: {
          ...componentStyles.error,
          [e.target.id]: val,
        }
      });
    } else {
      setComponentStyles({
        ...componentStyles,
        [e.target.id]: val,
      });
    }
  };

  return (
    <div style={styles.container}>
      <TextField
        label='Placeholder text'
        value={dummyText}
        size='small'
        style={styles.field}
        onChange={e => setDummyText(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Component State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={componentState}
          label="Component state"
          size='small'
          style={{ marginBottom: 35 }}
          onChange={e => setComponentState(e.target.value)}
        >
          <MenuItem value='base'>Base</MenuItem>
          <MenuItem value='error'>Error</MenuItem>
        </Select>
      </FormControl>

      {componentState === 'base' && (
        <BaseComponent
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
        />
      )}

      {componentState === 'error' && (
        <ErrorComponent
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
        />
      )}

      {/* <TextField
        id='backgroundColor'
        label='Background color'
        value={componentStyles.backgroundColor || ''}
        size='small'
        style={styles.field}
        onChange={onSetComponentStyles}
      />
      <TextField
        id='borderRadius'
        label='Border radius'
        value={componentStyles.borderRadius || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='color'
        label='Font color'
        value={componentStyles.color || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      /> */}
    </div>
  );
};

export default EditInput;

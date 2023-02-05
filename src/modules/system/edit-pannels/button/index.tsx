import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BaseState from './base';
import DisabledState from './disabled';

const EditButton = ({ componentStyles, setComponentStyles, setDummyText, dummyText }) => {
  const [componentState, setComponentState] = React.useState('base');

  const onSetComponentStyles = (e) => {
    let val = e.target.type === 'number' ? `${e.target.value}px` : e.target.value;

    if (!e.target.value) {
      val = null;
    }

    if (componentState === 'disabled') {
      setComponentStyles({
        ...componentStyles,
        disabled: {
          ...(componentStyles.disabled || {}),
          [e.target.id]: val,
        },
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
        label='Button text'
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
          <MenuItem value='disabled'>Disabled</MenuItem>
        </Select>
      </FormControl>

      {componentState === 'base' && (
        <BaseState
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
        />
      )}

      {componentState === 'disabled' && (
        <DisabledState
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
        />
      )}

    </div>
  );
};

export default EditButton;

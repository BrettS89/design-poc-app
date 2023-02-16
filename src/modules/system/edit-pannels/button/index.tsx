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
  const [variant, setVariant] = React.useState('base');

  const onSetComponentStyles = (e) => {
    let val = e.target.value ?? null;

    if (val && e.target.type === 'number'){
      val = Number(e.target.value);
    }

    if (val === '') val = undefined;

    if (variant === 'disabled') {
      setComponentStyles({
        ...componentStyles,
        ['base']: {
          ...componentStyles.base,
          disabled: {
            ...(componentStyles.base?.disabled || {}),
            [e.target.id]: val,
          },
        }
      });
    } else {
      setComponentStyles({
        ...componentStyles,
        [variant]: {
          ...(componentStyles[variant] || {}),
          [e.target.id]: val,
        }
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
          value={variant}
          label="Component state"
          size='small'
          style={{ marginBottom: 35 }}
          onChange={e => setVariant(e.target.value)}
        >
          <MenuItem value='base'>Base</MenuItem>
          <MenuItem value='disabled'>Disabled</MenuItem>
        </Select>
      </FormControl>

      {variant === 'base' && (
        <BaseState
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
          variant={variant}
        />
      )}

      {variant === 'disabled' && (
        <DisabledState
          componentStyles={componentStyles}
          onSetComponentStyles={onSetComponentStyles}
          variant={variant}
        />
      )}

    </div>
  );
};

export default EditButton;

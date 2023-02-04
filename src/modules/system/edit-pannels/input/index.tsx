import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';

const EditInput = ({ componentStyles, setComponentStyles, setDummyText, dummyText }) => {
  const onSetComponentStyles = (e) => {
    let val = e.target.type === 'number' ? Number(e.target.value) : e.target.value;

    if (!e.target.value) {
      val = null;
    }

    setComponentStyles({
      ...componentStyles,
      [e.target.id]: val,
    });
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
      <TextField
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
      />
    </div>
  );
};

export default EditInput;

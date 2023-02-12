import React from 'react';
import styles from './styles';
import TextField from '@mui/material/TextField';

const DisabledState = ({ componentStyles, onSetComponentStyles, variant }) => {
  return (
    <div>
      <TextField
        id='backgroundColor'
        label='Background color'
        value={componentStyles['base']?.disabled?.backgroundColor || ''}
        size='small'
        style={styles.field}
        onChange={onSetComponentStyles}
      />
      <TextField
        id='borderRadius'
        label='Border radius (px)'
        value={componentStyles['base']?.disabled?.borderRadius || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='color'
        label='Font color'
        value={componentStyles['base']?.disabled?.color || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='fontSize'
        label='Font size (px)'
        value={componentStyles['base']?.disabled?.fontSize || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='fontWeight'
        label='Font weight (px)'
        value={componentStyles['base']?.disabled?.fontWeight || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />

      <TextField
        id='paddingTop'
        label='Padding top (px)'
        value={componentStyles['base']?.disabled?.paddingTop ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingBottom'
        label='Padding bottom (px)'
        value={componentStyles['base']?.disabled?.paddingBottom ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingLeft'
        label='Padding left (px)'
        value={componentStyles['base']?.disabled?.paddingLeft ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingRight'
        label='Padding right (px)'
        value={componentStyles['base']?.disabled?.paddingRight ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
    </div>
  );
};

export default DisabledState;

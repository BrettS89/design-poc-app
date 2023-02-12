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
        id='fontSize'
        label='Font size (px)'
        value={componentStyles[variant]?.fontSize || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='fontWeight'
        label='Font weight'
        value={componentStyles[variant]?.fontWeight || ''}
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

      <TextField
        id='paddingTop'
        label='Padding top (px)'
        value={componentStyles[variant]?.paddingTop ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingBottom'
        label='Padding bottom (px)'
        value={componentStyles[variant]?.paddingBottom ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingLeft'
        label='Padding left (px)'
        value={componentStyles[variant]?.paddingLeft || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='paddingRight'
        label='Padding right (px)'
        value={componentStyles[variant]?.paddingRight || ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
    </div>
  );
};

export default BaseState;

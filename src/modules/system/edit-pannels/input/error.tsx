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
        id='borderRadius (px)'
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
        id='fontSize'
        label='Font size'
        value={componentStyles[variant]?.fontSize ?? ''}
        size='small'
        style={styles.field}
        type='number'
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

      <TextField
        id='outlineStyle'
        label='Outline style'
        value={componentStyles[variant]?.outlineStyle || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='outlineWidth'
        label='Outline width (px)'
        value={componentStyles[variant]?.outlineWidth ?? ''}
        size='small'
        style={styles.field}
        type='number'
        onChange={onSetComponentStyles}
      />
      <TextField
        id='outlineColor'
        label='Outline color'
        value={componentStyles[variant]?.outlineColor || ''}
        size='small'
        style={styles.field}
        type='text'
        onChange={onSetComponentStyles}
      />
    </div>
  );
};

export default ErrorState;

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function CreateFormModal({ open, handleClose, onCreateDesignSystem }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onClickCreate = async () => {
    if (!name) return;

    await onCreateDesignSystem(name, description);

    handleClose();
  }

  return (
      <Dialog open={open} onClose={handleClose}>
        <h2 style={{ margin: 0, paddingLeft:25, marginTop: 25 }}>Create a new design system</h2>
        <DialogContent>
          <TextField
            variant='outlined'
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin="dense"
            id="description"
            label="Description"
            type="textarea"
            multiline
            rows={4}
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ marginBottom: 10, marginRight: 15, }}>
          <Button onClick={handleClose} disableElevation variant='contained'>Cancel</Button>
          <Button onClick={onClickCreate} disableElevation variant='contained'>Create</Button>
        </DialogActions>
      </Dialog>
  );
};

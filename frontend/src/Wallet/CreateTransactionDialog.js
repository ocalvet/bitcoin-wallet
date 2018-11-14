import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CreateTransactionDialog = ({ open, handleClose }) => {
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Transaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the amount and the wallet address to create the transaction
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="To"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Amount"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default CreateTransactionDialog;

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CreateTransactionDialog extends React.Component {
  state = {
    to: 'Ovi',
    amount: 1.232323
  };

  handleChange = property => (event) => {
    this.setState({ [property]: event.target.value });
  }

  render() {
    const { open, onCancel, onCreate } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onCancel}
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
            onChange={this.handleChange('to')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Amount"
            type="number"
            onChange={this.handleChange('amount')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
            </Button>
          <Button onClick={() => onCreate(this.state)} color="primary">
            Create
            </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default CreateTransactionDialog;

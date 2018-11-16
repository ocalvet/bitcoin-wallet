import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateTransactionDialog from './CreateTransactionDialog';
import TransactionList from './TransactionList';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Wallet extends React.Component {
  state = {
    openTransactionDialog: false,
    transactions: []
  }

  closeTransactionDialog = () => {
    // console.log('Closing dialog');
    this.setState({ openTransactionDialog: false });
  }

  openTransactionDialog = () => {
    // console.log('Opening transactions dialog');
    this.setState({ openTransactionDialog: true });
  }

  render() {
    const { classes, wallet } = this.props;
    const { transactions } = this.state;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {wallet.title}
          </Typography>
          <Typography component="p">
            {wallet.description}
          </Typography>
          <Typography component="p">
            Private Key: {wallet.key}
          </Typography>
          <TransactionList transactions={transactions} />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.openTransactionDialog}>Add Transaction</Button>
        </CardActions>
        <CreateTransactionDialog open={this.state.openTransactionDialog} handleClose={this.closeTransactionDialog} />
      </Card>
    );
  }
}

Wallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wallet);
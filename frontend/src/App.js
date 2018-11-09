import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import WalletList from './Wallet/WalletList';

const wallets = [{ 
  title: 'Public',
  description: 'A wallet to interface publicly' 
}, { 
  title: 'Private',
  description: 'A wallet to keep coins but not to be use externally'
}];

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Bitcoin Wallet - Testing</h1>
        <WalletList wallets={wallets} />
      </div>
    );
  }
}

export default withStyles(styles)(App);

import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import WalletList from './Wallet/WalletList';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    wallets: []
  }
  onGenerateAddress = async () => {
    const response = await fetch(`http://localhost:8480/api/generatekey`);
    const wallet = await response.text();
    console.log(wallet);
    this.setState({
      wallets: [...this.state.wallets, { 
        title: `Wallet ${this.state.wallets.length + 1}`,
        description: 'A wallet to interface publicly',
        key: wallet,
      }]
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Bitcoin Wallet - Testing</h1>
        <Button onClick={this.onGenerateAddress}>Generate</Button>
        <WalletList wallets={this.state.wallets} />
      </div>
    );
  }
}

export default withStyles(styles)(App);

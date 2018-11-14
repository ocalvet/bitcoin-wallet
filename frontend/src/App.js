import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import WalletList from './Wallet/WalletList';

// const wallets = [{ 
//   title: 'Public',
//   description: 'A wallet to interface publicly' 
// }, { 
//   title: 'Private',
//   description: 'A wallet to keep coins but not to be use externally'
// }];

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
    const response = await fetch(`http://localhost:8480/api/generateKey`);
    const wallet = response.text();
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

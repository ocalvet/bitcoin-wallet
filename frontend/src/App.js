import React, { Component } from 'react';
import WalletList from './Wallet/WalletList';

const wallets = [{ 
  title: 'Public',
  description: 'A wallet to interface publicly' 
}, { 
  title: 'Private',
  description: 'A wallet to keep coins but not to be use externally'
}];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bitcoin Wallet - Testing</h1>
        <WalletList wallets={wallets} />
      </div>
    );
  }
}

export default App;

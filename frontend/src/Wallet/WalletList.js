import React from 'react';
import Wallet from './Wallet';

export default ({ wallets }) => {
    return (
        <div>
            {wallets.map((wallet, idx) => <Wallet key={idx} wallet={wallet} />)}
        </div>
    )
}
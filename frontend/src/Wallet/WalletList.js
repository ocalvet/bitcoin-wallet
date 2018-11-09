import React from 'react';
import Wallet from './Wallet';

export default ({ wallets }) => {
    return (
        <div>
            {wallets.map(wallet => <Wallet wallet={wallet} />)}
        </div>
    )
}
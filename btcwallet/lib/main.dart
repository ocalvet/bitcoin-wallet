import 'package:btcwallet/wallets_screen.dart';
import 'package:flutter/material.dart';

void main() => runApp(BTCWalletApp());

class BTCWalletApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BTC Wallet',
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      home: WalletsScreen(),
    );
  }
}

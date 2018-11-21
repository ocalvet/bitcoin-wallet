import 'dart:math';

import 'package:flutter/material.dart';

class WalletsScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _WalletsScreen();
  }
}

class _WalletsScreen extends State<WalletsScreen> {
  int nextIdx = 3;
  List<Wallet> wallets = [
    Wallet(name: 'Wallet 1'),
    Wallet(name: 'Wallet 2'),
  ];
  Future<Wallet> createWallet(String name) {
    return Future.delayed(Duration(seconds: 1), () {
      return Wallet(name: name, walletId: '123abc321cba');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Wallet Home Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: wallets.map((w) {
              return Text(
              w.name,
              style: Theme.of(context).textTheme.display1,
            );
            }).toList(),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed:  () async {
          Wallet newWallet = await createWallet('$nextIdx Wallet');
          this.setState(() {
            wallets.add(newWallet);
            nextIdx++;
          });
        },
        tooltip: 'Not sure yet',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

class Wallet {
  Wallet({this.name, this.walletId});
  final String name;
  final String walletId;
}
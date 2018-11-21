import 'package:btcwallet/wallet_model.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class WalletsScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _WalletsScreen();
  }
}

class _WalletsScreen extends State<WalletsScreen> {
  int nextIdx = 3;
  List<Wallet> wallets = [];
  createWallet(String name) async {
    http.Response resp = await http.get('http://localhost:8480/api/generatekey');
    return Wallet(name: name, walletId: resp.body);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Wallets'),
      ),
      body: Center(
        child: ListView(
          padding: EdgeInsets.all(15),
          children: wallets.map((w) {
              return ListTile(
                leading: Icon(Icons.enhanced_encryption),
                title: Text(w.name),
                subtitle: Text(w.walletId),
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
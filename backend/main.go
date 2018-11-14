package main

import (
	"log"
	"net/http"

	"github.com/btcsuite/btcd/btcec"
)

var btcWallet = newWallet()

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/pulse", healthCheck)
	mux.HandleFunc("/api/generatekey", generatePrivateKey)
	log.Fatal(http.ListenAndServe(":8480", mux))
}
func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{ "status": "beat" }`))
}

func generatePrivateKey(w http.ResponseWriter, r *http.Request) {
	key, _ := btcWallet.GeneratePrivateKey()
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(key))
}

// Wallet defines a structure to encapsulate wallet information
type wallet struct {
	privateKeys []string
}

func newWallet() *wallet {
	return &wallet{}
}

// GeneratePrivateKey generates a private key
func (w *wallet) GeneratePrivateKey() (string, error) {
	key, err := btcec.NewPrivateKey(btcec.S256())
	if err != nil {
		log.Fatal(err)
	}
	return key.D.String(), nil
}

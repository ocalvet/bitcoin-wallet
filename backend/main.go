package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/btcsuite/btcd/btcec"
	"github.com/rs/cors"
)

var btcWallet = newWallet()

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/pulse", healthCheck)
	mux.HandleFunc("/api/generatekey", generatePrivateKey)
	handler := cors.Default().Handler(mux)
	log.Fatal(http.ListenAndServe(":8480", handler))
}
func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{ "status": "beat" }`))
}

func generatePrivateKey(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
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

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// GeneratePrivateKey generates a private key
func (w *wallet) GeneratePrivateKey() (string, error) {
	key, err := btcec.NewPrivateKey(btcec.S256())
	if err != nil {
		log.Fatal(err)
	}
	return fmt.Sprintf("%x", key.D), nil
}

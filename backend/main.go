package main

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"
	"net/http"
)

var btcWallet = newWallet()

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/generatekey", generatePrivateKey)
	log.Fatal(http.ListenAndServe(":8480", mux))
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
	privateKey, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	log.Printf("Length: %v", privateKey.D.BitLen())
	src := privateKey.D.Bytes()

	dst := make([]byte, hex.DecodedLen(privateKey.D.BitLen()))
	n, err := hex.Decode(dst, src)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s\n", dst[:n])
	if err != nil {
		return "", err
	}
	return string(n), nil
}

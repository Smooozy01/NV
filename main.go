package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	// Serve files in "styles" directory
	http.Handle("/styles/", http.StripPrefix("/styles/", http.FileServer(http.Dir("./styles"))))

	http.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})

	port := ":8081"
	fmt.Println("Server is running on port" + port)

	log.Fatal(http.ListenAndServe(port, nil))

}

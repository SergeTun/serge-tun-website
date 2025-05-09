#! /bin/bash
echo "Starting http server on port 8080 on localhost..."
echo "Go to http://localhost:8080"
cd src; python3 -m http.server 8080

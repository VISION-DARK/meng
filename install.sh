#!/usr/bin/bash

apt-get update
apt-get upgrade
pkg install wget
pkg install ffmpeg
pkg install nodejs
pkg install npm
pkg install tesseract
npm i
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

echo "[*] SUKSES BRO SILAHKAN KETIK \"node index.js\" Powered by Ramlan ID"

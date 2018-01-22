#!/bin/bash
# Gerar app express

echo "Informe o nome do app: "
read appName

sudo npm install express-generator -g
express --view=pug $appName
cd $appName
npm install
DEBUG=$appName:* npm start
set DEBUG=$appName:* & npm start


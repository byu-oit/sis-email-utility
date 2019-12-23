#!/bin/sh

echo "Installing Node Modules"
npm install

echo "Linting"
npm run lint

echo "Building production package"
npm run build
cp package*.json dist
cd dist
npm install --production

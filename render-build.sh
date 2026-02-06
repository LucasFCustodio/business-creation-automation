#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# Run the installation script via node to bypass binary permission errors
node node_modules/puppeteer/install.mjs
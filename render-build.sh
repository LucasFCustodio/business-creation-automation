#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# Run the script via node to bypass binary permission issues
node node_modules/puppeteer/install.mjs
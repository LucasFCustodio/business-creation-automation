#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# This installs the default browser version for your puppeteer version
npx puppeteer browsers install chrome
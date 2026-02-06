#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# This command downloads the necessary Chrome binary specifically for the Render environment
npx puppeteer browsers install chrome
#!/usr/bin/env bash
echo "Building package for Firefox..."

mkdir -p build/firefox build/chrome

zip -q -r build/firefox/antishort.xpi README.md manifest.json LICENSE images antishort.js background.js

echo -e "$(tput setaf 2)Successfully packaged for Firefox$(tput setaf 7)\n"

echo "Building package for Chrome..."

cp chrome_manifest.json build/chrome/manifest.json
cp -r images antishort.js background.js LICENSE README.md build/chrome

cd build/chrome || exit
zip -q -r antishort.zip ./*
rm -rf images antishort.js background.js LICENSE README.md manifest.json


echo "$(tput setaf 2)Successfully packaged for Chrome"

#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide a version number for deploy"
  exit 1
fi

echo "Deleting old build..."
rm -rf docs/*

echo "Building new..."
npm run build

echo "Copying new build to /docs for deploy..."
cp -r dist/* docs

echo "$1" > version

echo "Deploying to GitHub"
git add -A && git commit -m ":tada: Deploying Version $1" && git push
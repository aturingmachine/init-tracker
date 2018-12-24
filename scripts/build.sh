#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide a version number for deploy"
  exit 1
fi

OLDVER=$(cat version)

if (( $(echo "$OLDVER >= $1" | bc -l) )); then
  echo "Please provide a version number higher than $OLDVER"
  exit 2
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
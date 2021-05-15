#!/bin/bash

echo "Previous Version:"
cat ./version

echo "Please Enter a Version number:"
read NEW_VERSION_NUMBER

if [ -z "$NEW_VERSION_NUMBER" ]; then
  echo "Please provide a version number for deploy"
  exit 1
fi

echo "Deleting old build..."
rm -rf docs/*

echo "Building new..."
npm run build

echo "Copying new build to /docs for deploy..."
cp -r dist/* docs

echo "Updating Version Number..."
echo "$NEW_VERSION_NUMBER" > version

echo "Compiled and Ready to deploy. Continue?"

read -r -p "Are You Sure? [Y/n] " CON
 
case $CON in
    [yY][eE][sS]|[yY])
  echo "Deploying to GitHub"
  git add -A && git commit -m ":tada: Deploying Version $NEW_VERSION_NUMBER" && git push
  ;;
    [nN][oO]|[nN])
  echo "Aborting Deploy."
  exit 1
  ;;
    *)
  echo "Aborting Deploy."
  exit 1
 ;;
esac


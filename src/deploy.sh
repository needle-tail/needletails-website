#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add .
git commit -m "New website build"
git push -f origin git@github.com:needle-tail/github-pages.git main:gh

cd ..

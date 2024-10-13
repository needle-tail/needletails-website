#!/usr/bin/env sh

# Exit on errors
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Add all changes to the existing repository
git add .

# Commit the changes
git commit -m "New website build"

# Force push to the gh-pages branch
git push -f origin HEAD:gh-pages  # Push the current HEAD to the gh-pages branch

# Navigate back to the original directory
cd ..

echo "Deployment complete!"

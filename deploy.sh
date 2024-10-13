#!/usr/bin/env sh

# Exit on errors
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Check if the current directory is a git repository
if [ ! -d .git ]; then
  # If not, initialize a new Git repository
  git init
  git remote add origin git@github.com:needle-tail/needletails-website/github-pages.git
else
  # Check if the remote already exists
  if ! git remote get-url origin > /dev/null 2>&1; then
    git remote add origin git@github.com:needle-tail/needletails-website/github-pages.git
  fi
fi

# Add all changes to the existing repository
git add .

# Commit the changes
git commit -m "New website build" || echo "No changes to commit."

# Force push to the gh-pages branch
if ! git push -f origin HEAD:gh-pages; then
  echo "Failed to push to remote repository. Check your permissions and repository URL."
  echo "Current remote URLs:"
  git remote -v  # Show remote URLs for debugging
  exit 1
fi

# Navigate back to the original directory
cd ..

echo "Deployment complete!"

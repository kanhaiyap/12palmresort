#!/bin/bash
# deploy.sh — commit & push to main, triggers deploy.yml workflow

set -e

# Default commit message if none passed
MESSAGE=${1:-"update"}

# Stage, commit, and push
git add .
git commit -m "$MESSAGE" || echo "⚠️ Nothing to commit"
git push origin main

echo "✅ Pushed to main with message: $MESSAGE"
echo "⏳ GitHub Actions workflow (deploy.yml) will now build & publish your site."

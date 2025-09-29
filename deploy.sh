#!/bin/bash
# deploy.sh — commit to main, build, and publish to gh-pages

set -euo pipefail

# ---- CONFIG: set your GitHub info ----
USER_NAME="kanhaiyap"
USER_EMAIL="kanhaiyapandey396@gmail.com"
REPO_URL="$(git remote get-url origin 2>/dev/null || echo "")"
GH_PAGES_BRANCH="gh-pages"
PUBLIC_URL="https://kanhaiyap.github.io/12palmresort/"

# Commit message (default: "update"); pass one like: ./deploy.sh "tweak hero copy"
MESSAGE="${1:-update}"

echo "➤ Committing to main..."
git add .
git commit -m "$MESSAGE" || echo "ℹ️  Nothing to commit."
git push origin main

echo "➤ Building site..."
npm run build

echo "➤ Adding SPA fallback (404.html)..."
cp dist/index.html dist/404.html

echo "➤ Publishing dist/ to $GH_PAGES_BRANCH..."
if [ -n "$REPO_URL" ]; then
  npx gh-pages -d dist -b "$GH_PAGES_BRANCH" -u "$USER_NAME <$USER_EMAIL>" -r "$REPO_URL"
else
  # Fallback if no 'origin' remote is set
  npx gh-pages -d dist -b "$GH_PAGES_BRANCH" -u "$USER_NAME <$USER_EMAIL>"
fi

echo "✅ Deployed! Live (once Pages updates): $PUBLIC_URL"
# Auto-open the site (macOS → open, Linux → xdg-open, Windows Git Bash → start)
open "$PUBLIC_URL" 2>/dev/null || xdg-open "$PUBLIC_URL" 2>/dev/null || start "$PUBLIC_URL" 2>/dev/null || true

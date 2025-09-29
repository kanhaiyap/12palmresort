#!/bin/bash
# deploy.sh — quick commit & push script for 12palmresort repo

# Stop on errors
set -e

# Default commit message
MESSAGE=${1:-"update"}

# Add all changes
git add .

# Commit with message (use arg1 if provided, otherwise "update")
git commit -m "$MESSAGE"

# Push to main branch
git push origin main

echo "✅ Changes pushed to GitHub (branch: main) with message: $MESSAGE"

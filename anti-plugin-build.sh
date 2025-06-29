#!/bin/bash

# Anti-plugin build script - prevents Netlify from detecting Gatsby
echo "🚀 Starting anti-plugin build process..."

# Clean all caches
echo "🧹 Cleaning caches..."
rm -rf .cache
rm -rf public
rm -rf node_modules/.cache

# Make sure we have the gatsby config in place
if [ ! -f "gatsby-config.js" ]; then
    echo "📝 Restoring gatsby-config.js..."
    cp gatsby.config.backup.js gatsby-config.js
fi

# Install dependencies quietly
echo "📦 Installing dependencies..."
npm ci --silent --prefer-offline --no-audit

# Run gatsby clean and build
echo "🏗️ Building site..."
npx gatsby clean
npx gatsby build

echo "✅ Build completed successfully!"

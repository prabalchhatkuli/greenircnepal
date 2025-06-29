#!/bin/bash

# Netlify build hook to prevent Gatsby plugin issues
echo "🧹 Cleaning all cache directories..."

# Remove all potential cache directories
rm -rf .cache
rm -rf public
rm -rf node_modules/.cache
rm -rf .parcel-cache
rm -rf .next
rm -rf dist

echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🚀 Starting Gatsby build with cache disabled..."
GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --verbose

echo "✅ Build completed successfully!"

#!/bin/bash

# Netlify build script to prevent cache issues
echo "Starting Netlify build process..."

# Remove problematic cache directories
echo "Cleaning problematic cache directories..."
rm -rf .cache/adapters/node_modules/.bin
rm -rf .cache/adapters/node_modules/.cache

# Run the build
echo "Running Gatsby build..."
npm run build

echo "Build completed successfully!"

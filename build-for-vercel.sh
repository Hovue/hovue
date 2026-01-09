#!/bin/bash
# Build script for Vercel deployment
# Builds playground and website, copying playground to website's public directory

set -e

echo "🔨 Building for Vercel deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build playground first (generate static files)
echo "🎮 Building playground..."
cd playground
pnpm generate
cd ..

# Copy playground output to website's public directory
echo "📋 Copying playground to website..."
mkdir -p packages/website/public/playground
cp -r playground/.output/public/* packages/website/public/playground/

# Build website
echo "🌐 Building website..."
cd packages/website
pnpm build

echo "✅ Build complete!"
echo "📍 Output: packages/website/dist"
echo "📍 Playground: packages/website/dist/playground"


#!/bin/bash
# Script to set up playground for local development

set -e

echo "🎮 Setting up playground for local development..."

# Build playground
cd ../..
pnpm --filter hovue-playground generate

# Copy to website public directory
cd packages/website
mkdir -p public/playground
cp -r ../../playground/.output/public/* public/playground/

echo "✅ Playground ready at http://localhost:4321/playground/"
echo "💡 Run this script whenever playground code changes"


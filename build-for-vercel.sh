#!/bin/bash
set -e

echo "🔨 Building for Vercel deployment..."

# Build playground first (allow failure)
echo "🎮 Building playground..."
if pnpm --filter hovue-playground generate; then
  # Copy playground output if build succeeded
  if [ -d "playground/.output/public" ]; then
    echo "📋 Copying playground to website..."
    mkdir -p packages/website/public/playground
    cp -r playground/.output/public/* packages/website/public/playground/ || true
  fi
else
  echo "⚠️  Playground build failed, continuing without it..."
fi

# Build website (this must succeed)
echo "🌐 Building website..."
pnpm --filter @hovue/website build

echo "✅ Build complete!"
echo "📍 Output: packages/website/dist"

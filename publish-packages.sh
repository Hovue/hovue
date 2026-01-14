#!/bin/bash
# Script to publish all Hovue packages to npm

set -e

echo "🚀 Publishing Hovue packages to npm"
echo ""

# Check if logged in
if ! npm whoami &>/dev/null; then
  echo "❌ Not logged into npm. Please run: npm login"
  exit 1
fi

echo "✅ Logged in as: $(npm whoami)"
echo ""

# Build all packages first
echo "📦 Building all packages..."
pnpm build

echo ""
echo "🔍 Verifying package contents..."

# Verify each package
for package in icons nuxt cli; do
  echo ""
  echo "Checking @hovue/$package..."
  cd "packages/$package"
  
  # Check if dist exists
  if [ ! -d "dist" ]; then
    echo "❌ dist/ directory not found for @hovue/$package"
    exit 1
  fi
  
  # Check if LICENSE exists (if required)
  if [ "$package" = "icons" ] && [ ! -f "LICENSE" ]; then
    echo "⚠️  LICENSE file missing for @hovue/$package"
  fi
  
  # Dry run to see what will be published
  echo "📋 Package contents:"
  npm pack --dry-run 2>&1 | grep -E "(package\.json|README|LICENSE|dist)" | head -10 || true
  
  cd ../..
done

echo ""
echo "⚠️  Review the package contents above before publishing."
echo ""
read -p "Continue with publishing? (y/N) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Publishing cancelled"
  exit 1
fi

# Publish packages
echo ""
echo "📤 Publishing packages..."
echo ""

for package in icons nuxt cli; do
  echo "📦 Publishing @hovue/$package..."
  cd "packages/$package"
  npm publish --access public
  echo "✅ @hovue/$package published successfully!"
  echo ""
  cd ../..
done

echo "🎉 All packages published successfully!"
echo ""
echo "Verify at:"
echo "  - https://www.npmjs.com/package/@hovue/icons"
echo "  - https://www.npmjs.com/package/@hovue/nuxt"
echo "  - https://www.npmjs.com/package/@hovue/cli"


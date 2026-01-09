# @hovue/cli

CLI tool for working with Hovue icons.

## Installation

```bash
pnpm add -D @hovue/cli
# or
npm install -D @hovue/cli
```

## Usage

### List available icons

```bash
npx hovue list
```

### Initialize configuration

```bash
npx hovue init
```

This creates a `hovue.config.json` file in your project root.

### Add icons to your project

```bash
npx hovue add ArrowRight Check Settings
```

This will copy the icon components to your project (default: `./src/components/icons`).

### Options

```bash
# Specify output directory
npx hovue add ArrowRight --output ./components/icons

# Specify target directory
npx hovue add ArrowRight --dir ./my-project
```

## Configuration

Create a `hovue.config.json` file:

```json
{
  "prefix": "Ho",
  "outputDir": "./src/components/icons",
  "importStyle": "named"
}
```


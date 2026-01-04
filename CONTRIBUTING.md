# Contributing to Hovue

Thank you for your interest in contributing to Hovue! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/hovue/hovue/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Your environment (OS, Node version, Vue version, etc.)
   - Screenshots if applicable

### Suggesting Features

1. Check if the feature has already been suggested
2. Open an issue with:
   - A clear description of the feature
   - Use cases and examples
   - Why this feature would be valuable

### Contributing Code

#### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hovue.git
   cd hovue
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Workflow

1. Make your changes
2. Write or update tests if applicable
3. Ensure code follows the project's style guidelines
4. Test your changes thoroughly
5. Commit your changes with clear, descriptive messages
6. Push to your fork and create a Pull Request

#### Commit Message Guidelines

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 72 characters
- Add more details in the body if needed

Examples:
```
Add: New HoHeart icon component
Fix: Animation timing issue in HoLoader
Update: Documentation for Nuxt integration
```

#### Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Add a clear description of your changes
4. Reference any related issues
5. Wait for review and address feedback

### Adding New Icons

If you're contributing a new icon:

1. Follow the existing icon component structure
2. Ensure the icon is:
   - Properly animated
   - TypeScript typed
   - Accessible
   - Documented
3. Add the icon to the appropriate category
4. Update the icon showcase

### Code Style

- Use TypeScript for type safety
- Follow Vue 3 Composition API best practices
- Use consistent naming conventions
- Keep components small and focused
- Add JSDoc comments for public APIs

### Testing

- Test your changes in different Vue/Nuxt setups
- Test in both light and dark modes
- Ensure animations work correctly
- Test accessibility features

## Questions?

Feel free to open an issue for any questions or reach out to the maintainers.

Thank you for contributing to Hovue! 🎉


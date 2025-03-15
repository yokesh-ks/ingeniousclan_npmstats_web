# Contributing to NpmStats

First off, thank you for considering contributing to NpmStats! It's people like you that make NpmStats such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [ksyokesh98@gmail.com](mailto:ksyokesh98@gmail.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain the behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## Development Process

1. Clone the repository
```bash
git clone https://github.com/yokesh-ks/ingeniousclan_npmstats_web.git
cd ingeniousclan_npmstats_web
```

2. Install dependencies
```bash
pnpm install
```

3. Create a branch
```bash
git checkout -b feature/my-feature
# or
git checkout -b fix/my-fix
```

4. Make your changes and commit them
```bash
git add .
git commit -m "feat: add some feature"
```

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

### JavaScript/TypeScript Styleguide

* Use TypeScript for all new code
* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Use template literals for string interpolation
* Use arrow functions over function expressions
* Use async/await over promises
* Use destructuring assignment
* Use the spread operator
* Use meaningful variable names

### CSS/SCSS Styleguide

* Use Tailwind CSS utility classes when possible
* Follow BEM naming convention for custom CSS
* Use CSS modules for component-specific styles
* Keep selectors as shallow as possible
* Use CSS variables for theming

## Project Structure

```
ingeniousclan_npmstats_web/
├── app/                    # Next.js app directory
├── src/components/            # React components
├── src/lib/                   # Utility functions and helpers
├── public/               # Static assets
├── src/styles/               # Global styles
├── src/types/                # TypeScript type definitions
└── tests/                # Test files
```

## Testing

* Write tests for all new features
* Run tests before submitting a PR
* Maintain test coverage above 80%

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Documentation

* Update documentation for any changed functionality
* Write clear and concise comments
* Include JSDoc comments for functions and components
* Update the README.md if necessary

## Questions?

Feel free to contact us if you have any questions. You can reach us at:

* Create an issue
* Email: [ksyokesh98@gmail.com](mailto:ksyokesh98@gmail.com)

## License

By contributing, you agree that your contributions will be licensed under its MIT License. 
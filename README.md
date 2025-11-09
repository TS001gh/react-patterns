# React Patterns

A collection of common React design patterns and techniques with practical examples.

## About

This repository demonstrates how to use various React patterns to build scalable, maintainable, and reusable components. Each pattern solves specific problems and helps organize code effectively.

## Patterns Included

### Render Props

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-patterns.git
   cd react-patterns
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Explore patterns in the `src/patterns/` folder

## Project Structure

```
src/
├── App.jsx           # Main app component
├── patterns/         # Pattern implementations
│   ├── Toggle.jsx
│   ├── useForm.js
│   └── ...
└── components/       # Reusable components
```

## Why These Patterns?

- **Render Props**: Great for flexible, composable components
- **Custom Hooks**: Modern approach to logic reuse
- **HOC**: Useful for cross-cutting concerns
- **Context API**: Prevents prop drilling in deeply nested components

## Contributing

Add new patterns by creating a new file in `src/patterns/` and include usage examples in `App.jsx`.

## Resources

- [React Official Docs](https://react.dev)
- [Render Props Pattern](https://react.dev/reference/react/Children)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

## License

MIT

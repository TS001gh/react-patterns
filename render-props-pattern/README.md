### Render Props
Passes a function as a prop to customize component rendering. Enables logic reuse without wrapper components.

**Example:**
```jsx
<Toggle render={(isOpen) => <p>Status: {isOpen ? "Open" : "Closed"}</p>} />
```

**Use cases:** Conditional rendering, state sharing, component composition

### Custom Hooks
Extract component logic into reusable functions. Cleaner alternative to render props and HOCs.

**Example:**
```jsx
const { isOpen, toggle } = useToggle();
```

**Use cases:** Form handling, API calls, authentication logic

### Higher-Order Components (HOC)
Wraps a component to add functionality or modify behavior.

**Use cases:** Theme injection, authentication guards, prop manipulation

### Context API
Share state across components without prop drilling.

**Use cases:** Theme switching, user authentication, global settings

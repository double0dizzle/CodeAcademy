// Child Components Update Sibling Components
// Patterns within patterns within patterns!

// In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.

// In lesson 2, you learned that lesson 1's pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent's state.

// In this lesson, we will expand the pattern one last time. A child component updates its parent's state, and the parent passes that state to a sibling component.
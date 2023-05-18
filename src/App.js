import * as React from 'react'
import ReactDOM from 'react-dom'
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function City({name}) {
    return <div>Hello, visit {name.toUpperCase()}</div>
}

function Country({capital}) {
    return <div>Hello, visit {capital.toUpperCase()}</div>
}

export default function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}  onReset={(details) => {
      // Reset the state of your app so the error doesn't happen again
    }}>
      <Country />
      <City />
    </ErrorBoundary>
  )
}
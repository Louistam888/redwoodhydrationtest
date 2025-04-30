import { useState, useEffect } from 'react'

const DummyComponent = () => {
  const [isClient, setIsClient] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Ensuring this runs only in the browser (post-hydration)
    setIsClient(true)
  }, [])

  const increment = () => {
    if (isClient) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  return (
    <div>
      <h1>Dummy Component</h1>
      <p>This is a dummy component for prerendering test.</p>
      {isClient ? (
        <>
          <p>Current count: {count}</p>
          <button onClick={increment}>Increment Count</button>
        </>
      ) : (
        <p>Loading client-side functionality...</p>
      )}
    </div>
  )
}

export default DummyComponent


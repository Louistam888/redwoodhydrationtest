// web/src/components/DummyComponent.js
import { useState } from 'react';

const DummyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Dummy Component</h1>
      <p>This is a dummy component for prerendering test.</p>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};

export default DummyComponent;

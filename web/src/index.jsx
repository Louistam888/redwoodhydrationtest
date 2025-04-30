import ReactDOM from 'react-dom/client';
import App from './App';

// Directly hydrate the root element with the App component
ReactDOM.hydrateRoot(
  document.getElementById('root'),  // The DOM element where the app is rendered
  <App />  // Your root component that will be hydrated
);

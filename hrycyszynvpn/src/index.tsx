import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ClientContextProvider } from './context/main';
import { ErrorFallback } from './components/Error';
import { NymMixnetTheme } from './theme';
import './fonts/fonts.css';

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ClientContextProvider>
      <NymMixnetTheme>
        <div>The app</div>
      </NymMixnetTheme>
    </ClientContextProvider>
  </ErrorBoundary>
);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

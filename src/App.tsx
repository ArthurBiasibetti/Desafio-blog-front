import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';

const App: React.FunctionComponent = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </Router>
);

export default App;

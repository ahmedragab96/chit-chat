import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { AuthProvider } from './authProvider';

export default function Providers() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}

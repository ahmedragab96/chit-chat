import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';

export default function Providers() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

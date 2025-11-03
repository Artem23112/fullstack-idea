import { TrpcInitProvider } from '@components/providers/trpcInitialProvider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TrpcInitProvider>
      <App />
    </TrpcInitProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: import.meta.env.VITE_DATADOG_CLIENT_TOKEN,
  site: 'us5.datadoghq.com',
  env: import.meta.env.DEV ? 'local' : 'production',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).datadogLogs = datadogLogs

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

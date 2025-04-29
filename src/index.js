import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import {
  FpjsProvider,
  FingerprintJSPro
} from '@fingerprintjs/fingerprintjs-pro-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: "lnwCCf88WMUrFyf4MA3i",
        endpoint: [
          "https://anelfdz.com/x2ng7V5plTxX0JjY/7MoMUqe42O8t7ACh",
          FingerprintJSPro.defaultEndpoint
        ],
        scriptUrlPattern: [
          "https://anelfdz.com/x2ng7V5plTxX0JjY/3eFIYOqVDftPPd3i?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>",
          FingerprintJSPro.defaultScriptUrlPattern
        ]
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);

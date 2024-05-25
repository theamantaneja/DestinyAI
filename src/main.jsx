import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="970956949450-poutn2uupmma847aqhom9874e7631isf.apps.googleusercontent.com">
      <ContextProvider>
          <App />
      </ContextProvider>,
  </GoogleOAuthProvider>
  
)

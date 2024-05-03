import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import { Amplify } from 'aws-amplify'
import store from './store'
import { Provider } from 'react-redux'

//Amplify.configure({
//  Auth: {
//    mandatorySignIn: true,
//    region: process.env.REACT_APP_REGION,
//    userPoolId: process.env.REACT_APP_USER_POOL_ID,
//    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
//    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
//  },
//  Storage: {
//    region: process.env.REACT_APP_REGION,
//    bucket: process.env.REACT_APP_BUCKET,
//    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
//  },
//  API: {
//    endpoints: [
//      {
//        name: "notes",
//        endpoint: process.env.REACT_APP_API_URL,
//        region: process.env.REACT_APP_REGION,
//      },
//    ],
//  },
//});

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "api",
        endpoint: process.env.REACT_APP_API_URL,
        region: process.env.REACT_APP_REGION,
      },
    ],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopcontextprovider from './Context/shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Shopcontextprovider>
     <App/>
  </Shopcontextprovider>
    );

export default App;

  



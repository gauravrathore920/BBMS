import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import ListDonorComponent from './components/ListDonorComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <router>
        
          <HeaderComponent />
            <div className="container">
              <switch>
                <route path = "/" component = {ListDonorComponent}></route>
                <route path = "/donors" component = {ListDonorComponent}></route>
                <ListDonorComponent />
              </switch>
            </div>
          <FooterComponent />
        
      </router>
    </div>
  );
}

export default App;

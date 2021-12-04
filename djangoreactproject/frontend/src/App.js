import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link , Routes, useLocation} from 'react-router-dom'
import  CustomersList from './CustomersList'
import  CustomerCreateUpdate  from './CustomerCreateUpdate'
import './App.css';

const BaseLayout = () => {
  let location = useLocation();
  console.log(location)
  return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Django React Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">CUSTOMERS</a>
              <a className="nav-item nav-link" href="/customer">CREATE CUSTOMER</a>

            </div>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" exact element={<CustomersList/>}/>
            <Route path="/customer/:pk" element={<CustomerCreateUpdate/>}/>
            <Route path="/customer/" exact element={<CustomerCreateUpdate/>}/>
          </Routes>


        </div>

      </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;

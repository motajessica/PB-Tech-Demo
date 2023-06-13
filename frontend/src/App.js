import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "PB Tech - Saving you money since 1993";
  }, []);
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;

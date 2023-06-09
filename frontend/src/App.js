import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header'

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

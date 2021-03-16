import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Index from "./Pages/Home";

function App() {
  return (
    <Router>
        <Route path="/" component={Index}/>
    </Router>
  );
}

export default App;

// import Components
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";

// import css-Files
import './App.css';

class App extends React.Component {

  render () {
    
    return (

      <BrowserRouter>
        <div> 
          {navigation("test")}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

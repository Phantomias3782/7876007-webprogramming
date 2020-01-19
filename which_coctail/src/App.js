// import Components
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";

// import css-Files
import './App.css';

class App extends React.Component {
  state = {
    coctails: 
    [ 
      {Coctail:"Californication", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Nie wieder."},
      {Coctail:"Mojito", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Sehr viel Zucker."},
      {Coctail:"Sex_on_the_Beach", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Der Drink.."}
    ],
    ingredients : 
    [ 
      {Zutat:"Tomaten", Ausgewählt:false}, 
      {Zutat:"Kürbis", Ausgewählt:false}, 
      {Zutat:"Apfel", Ausgewählt:false}
    ]
  }
  

  render () {
    console.log("app_rons", this.state)
    
    return (

      <BrowserRouter>
        <div> 
          {navigation(this.state)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

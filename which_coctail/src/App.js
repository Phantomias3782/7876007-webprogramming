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
      {Coctail:"Californication", Zutaten: ["Vodka", "Malibu"], Rezept: ["Schritt4", "Schritt2"], Beschreibung: "Nie wieder. (Denke ich)", Bild: "../../images/californication.jpg"},
      {Coctail:"Mojito", Zutaten: ["Malibu", "Rum"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Sehr viel Zucker.", Bild: "../../../images/mojito.jpg"},
      {Coctail:"Sex_on_the_Beach", Zutaten: ["Vodka", "Rum"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Der Drink, nicht die Tat.", Bild: "../../../images/sotb.jpg"}
    ],
    ingredients : 
    [ 
      {Zutat:"Vodka", Ausgewählt:false}, 
      {Zutat:"Rum", Ausgewählt:false}, 
      {Zutat:"Malibu", Ausgewählt:false}
    ]
  }
  

  render () {
    
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

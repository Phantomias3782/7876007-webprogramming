import React from 'react';
import {coctaillist} from "../../components/coctaillist/coctaillist.jsx"

class coctailoverview extends React.Component{

    state = {
        coctails: 
        [ 
        {Coctail:"Californiaction", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Nie wieder."},
        {Coctail:"Mojito", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Sehr viel Zucker."},
        {Coctail:"Sex on the Beach", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Der Drink.."}
    ]
    }

    render () {

        return (
            <div>
                {coctaillist(this.state.coctails)}
            </div>
        );
    }
}

export default coctailoverview;
import React from 'react';
import {coctail} from "../../components/coctaillist/coctail/coctail.jsx";

class RecipeView extends React.Component{

    state =  {
        coctail: {Coctail:"Mojito", Zutaten: ["Zutat1", "Zutat2"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Sehr viel Zucker."}
    }

    render () {

        return (
            <div>
                { coctail(this.state.coctail)}
            </div>
        );
    }
}

export default RecipeView;
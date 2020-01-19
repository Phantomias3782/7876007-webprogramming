import React from 'react';
import {coctail} from "../../components/coctaillist/coctail/coctail.jsx";

class RecipeView extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  probs
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
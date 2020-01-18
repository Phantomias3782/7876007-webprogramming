import React from 'react';
import {coctail} from "../../components/coctaillist/coctail/coctail.jsx";

class ReciepeView extends React.Component{

    render () {

        return (
            <div>
                { coctail(this.probs)}
                Das ist die Komponente RecipeView
            </div>
            // rest is missing
        );
    }
}

export default ReciepeView;
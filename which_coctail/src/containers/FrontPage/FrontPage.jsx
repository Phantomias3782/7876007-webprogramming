import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { chooseIngredients } from '../../components/chooseingredients/chooseingredients';

class FrontPage extends React.Component{

    state = {
        ingredients : [ {Zutat:"Tomaten", Ausgewählt:false}, {Zutat:"Kürbis", Ausgewählt:false}, {Zutat:"Apfel", Ausgewählt:false} ]
    }
    


    render () {

        return (
            <div id = "FrontPagechooseingredients" >
                
                {chooseIngredients(this.state.ingredients)}

                <hr // Adapt in css
                    style= {{
                    color: "red",
                    backgroundColor: "red",
                    height: 5
                    }}> 
                </hr>

                <p>
                    Fehlende Zutaten miteinbeziehen?
                    <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </p>

                <hr // Adapt in css
                    style= {{
                    color: "blue",
                    backgroundColor: "blue",
                    height: 5
                    }}> 
                </hr>

                <Button>
                    Suche passende Coctails
                </Button>

            </div>
            // rest is missing
        );
    }
}

export default FrontPage;
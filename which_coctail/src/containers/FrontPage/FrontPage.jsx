import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ChooseIngredients } from '../../components/chooseingredients/chooseingredients';
import { Link} from 'react-router-dom';

class FrontPage extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  probs
    }

    /*handleChange = (id) => {

    var index = this.state.ingredients.findIndex(function(item, i){
    return item.name === id
    });

    console.log("zutat", id)
    var tmpelement = this.state.ingredients[index]
    console.log("index", index)
    console.log("tmpelement", tmpelement)
    //tmpelement.Ausgewählt = !tmpelement.Ausgewählt

    this.setState(this.state.ingredients[index] = tmpelement)
    console.log("state after button", this.state)

    console.log(index);

    }*/

    render () {

        return (
            <div id = "FrontPagechooseingredients" >
                
                {ChooseIngredients(this.state.ingredients)}

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

                <Link to = "/coctailübersicht" >
                    <Button>
                        Suche passende Coctails
                    </Button>
                </Link>

            </div>
        );
    }
}

export default FrontPage;
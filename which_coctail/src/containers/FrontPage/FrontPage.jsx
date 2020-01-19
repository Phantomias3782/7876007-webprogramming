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
    
    
    getActiveIngretients = (data) => {
        //this.setState({activeIngretients: data})
        this.activedata = data
        console.log("so sieht es aus:", this.activedata)
    }

    render () {

        return (
            <div id = "FrontPagechooseingredients" >
                
                {ChooseIngredients(this.state.ingredients, this.getActiveIngretients)}
                {console.log("Output", this.activedata) /* test if everything works*/} 

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
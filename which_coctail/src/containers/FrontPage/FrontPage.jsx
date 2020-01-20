import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ChooseIngredients } from '../../components/chooseingredients/chooseingredients';
import Coctailoverview from '../coctailoverview/coctailoverview';
//import {Link} from 'react-router-dom';

class FrontPage extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  {ingredients: probs.ingredients, cockTail: false, coctails: probs.coctails} // if backup --> here this.state = probs
        this.activedata = 0 // actual problem with rerender: cant go back!
    }

    coctailstoload = () => {
        //in this function there should be evaluated wich coctails Coctailoverview should load
        // save coctail with his ingredients | form: [coctailname, [zutat1, zutat2, ...]]
        let coctailingredients = []
        let tmpvar = 0
        this.state.coctails.forEach((element) => (
            tmpvar = [element.Coctail, element.Zutaten],
            coctailingredients.push(tmpvar)
        ));

        // save all checked ingredients to list
        let activeingredients = []
        this.state.ingredients.forEach((element) => (
                element.Ausgewählt ?
                activeingredients.push(element.Zutat)
            :
            null
        ));

        // match ingredients with coctails
        let checker = (activeingredients, tmpelement) => (tmpelement.every(v => activeingredients.includes(v)))
        let tmpelement = 0
        let tmpvalue = 0
        let possiblecoctails = []
        coctailingredients.forEach((element) => (
            tmpelement = element[1],
            tmpvalue = checker(activeingredients, tmpelement),

            // if true save name of coctail
            (tmpvalue ? possiblecoctails.push(element[0]) : null)
        ));
        console.log("possible coctails", possiblecoctails)
        
        // load all elements of possible coctails
        console.log("all coctails", this.state.coctails)
        let allcoctails = []
        let add = 0
        possiblecoctails.forEach((element) => (
            this.state.coctails.forEach((element2) => (
                add = (element === element2.Coctail),
                console.log("add", add),
                console.log("coctail", element2),
                ( element === element2.Coctail ? allcoctails.push(element2) : null )
            ))
        ))
        console.log("allcoctails", allcoctails)
        // save possible coctail with their attributes to state
        this.setState({coctails : allcoctails})
        console.log("possible coctail full list", this.state)

        //this.setState({coctails: choosencoctails})
    }
    
    openCoctails = () => {
        console.log("das wird übergeben:", this.activedata)
        //console.log("probs", this.state) same as activedata?
        this.coctailstoload() // update state variabel from all coctails to only selected coctails
        
        this.setState({cockTail:true})
    }
    
    getActiveIngretients = (data) => {
        //this.setState({activeIngretients: data})
        this.activedata = data
        this.setState({ingredients: this.activedata})
    }

    render () {

        return (
            <div> 
                {this.state.cockTail ?
                    < Coctailoverview {...this.state}/>
                :
                <div id = "FrontPagechooseingredients" >
    
                    <h2>
                        Welche Zutaten sind da?
                    </h2>
                    
                    {ChooseIngredients(this.state.ingredients, this.getActiveIngretients)}
    
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
                    
                    <Button onClick = {this.openCoctails}  >
                        Suche passende Coctails!
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}

export default FrontPage;
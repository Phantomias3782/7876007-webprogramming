import React from 'react';
import { Checkbox } from '@material-ui/core';

export function ChooseIngredients(probs, getActiveIngretients) {

    const handleChange = (event) => {
        update_ingredient_list(event);
        console.log(choosen_ingredients)
        // get data to FrontPage
        returnActiveIngredients()
    };

    const returnActiveIngredients = () => {
        getActiveIngretients(choosen_ingredients)
    }
    
    const update_ingredient_list = (event) => {

        // save index for acces suiting object
        let index = choosen_ingredients.findIndex(x => x.key === event.target.id)

        if (index === -1) { 
            // save new object 
            choosen_ingredients.push( {key: event.target.id, value: event.target.checked}) }
        else {
            // set opposite status, if object already exists
            let status = choosen_ingredients[index].value
            let rstatus = true
            if (status === true) {rstatus = false} else {rstatus = true}
            choosen_ingredients[index].value = rstatus}
    }

    // initialize choosen ingredients
    let choosen_ingredients = []

    let content = []
    probs.map((element) => 
        content.push(
            <tr id = {element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox id = {element.Zutat}
                        value = "unchecked"
                        inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                        onChange = {handleChange}
                        />
                </td>
            </tr>
        )
    )

    return (
        <div>
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}

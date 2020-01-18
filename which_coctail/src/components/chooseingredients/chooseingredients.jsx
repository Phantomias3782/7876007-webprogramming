import React from 'react';
import { Checkbox } from '@material-ui/core';

export function chooseIngredients(probs) {

    let content = []
    probs.map((element) => 
        content.push(
            <tr id = {element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox 
                        value = "uncontrolled" 
                        inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                        id = {element.Zutat} 
                        /*onChange = {}*/ />
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

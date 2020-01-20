import React from "react";
import { Checkbox } from '@material-ui/core';

export function coctail(probs) {

    let zutaten = []
    let rezept = []
    console.log(probs)
    probs.Zutaten.map((element) => 
        zutaten.push(
            <tr>
                <td>
                    {element}
                </td>
            </tr>
        )
    )

    probs.Rezept.map((element) => 
        rezept.push(
            <tr>
                <td>
                    {element}
                </td>
                <td>
                <Checkbox 
                        value = "uncontrolled" 
                        inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                        id = {element} 
                        />
                </td>
            </tr>
        )
    )

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {probs.Coctail}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {zutaten}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {rezept} 
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
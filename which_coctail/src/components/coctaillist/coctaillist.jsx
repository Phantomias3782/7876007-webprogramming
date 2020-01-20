import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export function coctaillist(probs) {

    let content = []
    console.log("probscoctaillist", probs)
    probs.map((element) => 
        content.push(
            <tr id = {element.Coctail} >
                <Link to = {element.Coctail}>
                    <Button>
                        <td>
                            Hier wird ein Bild angezeigt werden.
                        </td>
                        <td>
                            {element.Coctail}
                        </td>
                        <td>
                            {element.Beschreibung}
                        </td>
                    </Button>
                </Link>
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
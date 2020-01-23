import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// import css-Files
import './coctaillist.css';

export function coctaillist(probs) {

    let content = [];
    console.log("probscoctaillist", probs);

    let img = ""

    probs.map((element) => (

        img = require('../../images/'+element.Coctail+'.jpg'),
    
        content.push(
            <div>
                <tr id = {element.Coctail} >
                    <Link to = {element.Coctail}>
                        <Button>
                            <td>
                                <img src = {img} />
                            </td>
                            <td className = "tabledatacoctaillist">
                                {element.Coctail}
                            </td>
                            <td>
                                {element.Beschreibung}
                            </td>
                        </Button>
                    </Link>
                </tr>
            <br />
            </div>
        )
    )
    )

    return (
        <div id = "coctaillisttable">
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}
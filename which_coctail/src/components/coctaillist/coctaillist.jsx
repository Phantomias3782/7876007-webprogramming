import React from "react";
import Button from '@material-ui/core/Button';
import RecipeView from "../../containers/RecipeView/RecipeView.jsx"
import { Switch, Link, Route, HashRouter} from 'react-router-dom';

export function coctaillist(probs) {

    let content = []
    probs.map((element) => 
        content.push(
            <tr id = {element.Coctail} >
                <Link to = {element.Coctail}>
                    <Button /*onClick = {handleclick(element)}*/>
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
        
        <HashRouter>
            <div>
                <nav>
                    <table>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </nav>

                <Switch>

                    <Route path = "/Mojito" conponent = {RecipeView} exact />
                    <Route path = "/Sex%20on%20the%20Beach" exact conponent = {RecipeView} />
                    <Route path = "/Californication" exact conponent = {RecipeView} />

                </Switch>
            </div>
        </HashRouter>
    );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import FrontPage from "../../containers/FrontPage/FrontPage.jsx";
import coctailoverview from "../../containers/coctailoverview/coctailoverview.jsx";
import Recipeview from "../../containers/Recipeview/Recipeview.jsx";

export function navigation(probs) {

    console.log("navprobs", probs.ingredients)
    // load all coctails
    let coctails = probs.coctails
    // load all ingredients and save them to variable
    let ingredients = {ingredients: probs.ingredients}
    console.log("ingredients", ingredients)

    // save each coctail to own variable
    let mojito = {coctail: coctails[1]}
    let californication = {coctail: coctails[0]}
    let sotb = {coctail: coctails[2]}

    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/zutatenwahl">
                    <Button id = "chooseingredients" variant = "contained" color = "default" size = "large" >
                        Zutatenauswahl
                    </Button>
                </Link>

                <br />

                <Link to = "/coctailübersicht">
                    <Button id = "CoctailOverview" variant = "contained" color = "default" size = "large">
                        Coctailübersicht
                    </Button>
                </Link>

                <br />

                <Link to = "/coctailname">
                    <Button id = "RecipeView" variant = "contained" color = "default" size = "large">
                        CoctailName
                    </Button>
                </Link>

            </nav>

            <Switch>
                
                <Route path = "/zutatenwahl" render = {() => <FrontPage {...ingredients} />} />

                <Route path = "/coctailübersicht" component = {coctailoverview} />
                
                <Route path = "/coctailname" render = {() => <Recipeview {...mojito} />} />

                <Route path = "/Mojito" render = {() => <Recipeview {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipeview {...sotb} />} />
                
                <Route path = "/Californication" render = {() => <Recipeview {...californication} />} />

            </Switch>

        </div>
    );
}

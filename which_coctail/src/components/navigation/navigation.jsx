import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import FrontPage from "../../containers/FrontPage/FrontPage.jsx";
import coctailoverview from "../../containers/coctailoverview/coctailoverview.jsx";
import Recipeview from "../../containers/Recipeview/Recipeview.jsx";

export function navigation(siteToLoad) {

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
                
                <Route path = "/zutatenwahl" component = {FrontPage} />

                <Route path = "/coctailübersicht" component = {coctailoverview} />
                
                <Route path = "/coctailname" conponent = {Recipeview} />

                <Route path = "/Mojito" conponent = {Recipeview} />

                <Route path = "/Sex%20on%20the%20Beach"  conponent = {Recipeview} />
                
                <Route path = "/Californication" conponent = {Recipeview} />

            </Switch>

        </div>
    );
}

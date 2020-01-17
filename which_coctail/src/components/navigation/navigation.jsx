import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import FrontPage from "../../containers/FrontPage/FrontPage.jsx";
import coctailoverview from "../../containers/coctailoverview/coctailoverview.jsx";
import RecipeView from "../../containers/RecipeView/RecipeView.jsx";

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
                    <Button id = "ReciepeView" variant = "contained" color = "default" size = "large">
                        CoctailName
                    </Button>
                </Link>
            </nav>

            <Switch>

                <Route path = "/zutatenwahl" component = {FrontPage} />

                <Route path = "/coctailübersicht" component = {coctailoverview} />

                <Route path = "/coctailname" component = {RecipeView} />

            </Switch>
        </div>
    );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import FrontPage from "../../containers/FrontPage/FrontPage.jsx";
import Coctailoverview from "../../containers/coctailoverview/coctailoverview.jsx";
import Recipeview from "../../containers/Recipeview/Recipeview.jsx";

// import css-Files
import './navigation.css';

export function navigation(probs) {

    // load all coctails
    let coctails = {coctails : probs.coctails}
    
    // load all ingredients and save them to variable
    //let ingredients = {ingredients: probs.ingredients} replaced - old code

    // save each coctail to own variable
    let mojito = {coctail: coctails.coctails[1]}
    let californication = {coctail: coctails.coctails[0]}
    let sotb = {coctail: coctails.coctails[2]}
    let martini = {coctail: coctails.coctails[3]}
    let capri = {coctail: coctails.coctails[4]}


    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/zutatenwahl">
                    <Button id = "chooseingredients" variant = "contained" color = "default" size = "large" >
                        Zutatenauswahl
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/coctailübersicht">
                    <Button id = "CoctailOverview" variant = "contained" color = "default" size = "large">
                        Coctailübersicht
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/coctailname">
                    <Button id = "RecipeView" variant = "contained" color = "default" size = "large">
                        Coctail
                    </Button>
                </Link>

            </nav>

            {/* Switch to suiting page and load corresponding coctail */}
            
            <Switch>
                
                <Route path = "/zutatenwahl" render = {() => <FrontPage {...probs} />} /> {/* replaced ...ingredients by ...probs */}

                <Route path = "/coctailübersicht" render = {() => <Coctailoverview {...probs} />} /> {/*replaced ...coctails by ...props */}
                
                <Route path = "/coctailname" render = {() => <Recipeview {...mojito} />} />

                <Route path = "/Mojito" render = {() => <Recipeview {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipeview {...sotb} />} />
                
                <Route path = "/Californication" render = {() => <Recipeview {...californication} />} />

                <Route path = "/Martini" render = {() => <Recipeview {...martini} />} />

                <Route path = "/Caprihana" render = {() => <Recipeview {...capri} />} />

            </Switch>

        </div>
    );
}

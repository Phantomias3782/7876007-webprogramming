import React from 'react';
import {coctaillist} from "../../components/coctaillist/coctaillist.jsx"

// import css-Files
import './coctailoverview.css';

class Coctailoverview extends React.Component{
    constructor(probs) {
        super(probs)
        this.state = {coctails: probs.coctails}
        console.log("coctailoverview",probs)
        let showEmpty = false
        this.state.coctails && this.state.coctails.length ? this.showEmpty = false : this.showEmpty = true
        this.text = probs.shoppingtext
        this.showText = probs.showText
    }

    render () {

        return (
            <div id = "coctailoverview">
                {this.showEmpty ? 
                    <p>
                        <h1> 
                            Leider hast du nicht genügend Zutaten für einen Coctail! 
                            Seite wird neu geladen.
                        </h1>
                        {setTimeout(() => { window.location.reload() }, 1000)}
                    </p>
                :
                <div id = "coctaillist">
                    {this.showText ? this.text : null}
                    {<br />}
                    {coctaillist(this.state.coctails)}
                </div>
                }
            </div>
        );
    }
}

export default Coctailoverview;
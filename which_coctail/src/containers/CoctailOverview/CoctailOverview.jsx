import React from 'react';
import {coctaillist} from "../../components/coctaillist/coctaillist.jsx"

class Coctailoverview extends React.Component{
    constructor(probs) {
        super(probs)
        this.state = {coctails: probs.coctails}
        console.log("coctailoverview",probs)
        let showEmpty = false
        this.state.coctails && this.state.coctails.length ? this.showEmpty = false : this.showEmpty = true
    }

    render () {

        return (
            <div>
                {this.showEmpty ? 
                    <p>
                        <h1> 
                            Leider hast du nicht genügend Zutaten für einen Coctail! 
                            Seite wird neu geladen.
                        </h1>
                        {setTimeout(() => { window.location.reload() }, 1000)}
                    </p>
                :
                <div>
                    {coctaillist(this.state.coctails)}
                </div>
                }
            </div>
        );
    }
}

export default Coctailoverview;
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
                        Leider keine Coctails gefunden! Bitte Seite neuladen und zurückkehren
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
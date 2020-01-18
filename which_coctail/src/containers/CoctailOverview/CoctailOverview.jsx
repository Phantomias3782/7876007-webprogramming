import React from './node_modules/react';
import { Button } from '@material-ui/core';

class coctailoverview extends React.Component{

    render () {

        return (
            <div>
                {coctaillist(this.state.coctails)}
            </div>
            // rest is missing
        );
    }
}

export default coctailoverview;
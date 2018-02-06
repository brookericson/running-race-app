import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import RaceList from '../../components/RaceList/RaceList';

class Header extends Component  {
    state = {
       races: {
           name: 'Race Name',
           location: 'Race Location',
           start_date: 'Race Date'
       }

    }
    render () {
        return (
            <Aux>
                <RaceList races={this.state.races}/>
                <div>Race Details</div>
            </Aux>
        );
    }
}

export default Header;
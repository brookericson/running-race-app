import React, { Component } from 'react';
import Request from 'superagent';


class RaceItem extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }
    componentWillMount(){
        var url = "https://runsignup.com/Rest/Races/?format=json";
        Request.get(url).then((response) => {
            this.setState({
                races: response
            })
        })
    }
    componentDidMount() {
        fetch("https://runsignup.com/Rest/Races/?format=json")
            .then(results => {
                results.json();
            }).then(data => {
                let races = data.results.map((race) => {
                    return(
                        <div key={race.results}>
                            <ul>
                                <li>{race.name}</li>
                                <li>{race.city}</li>
                                <li>{race.state}</li>
                            </ul>
                        </div>
                    )
                });
            this.setState({races: races});
                console.log("state", this.state.races);
        })
    }

    render() {
        return (
            <div>{this.state.races}</div>
    )
    }
}

//     render() {
//         let raceItem =
//             <div className={raceItem}>
//                 <ul>
//                     <li>Name</li>
//                     <li>Location</li>
//                     <li>Date</li>
//                 </ul>
//             </div>;
//         return raceItem;
//     }
// }

export default RaceItem;
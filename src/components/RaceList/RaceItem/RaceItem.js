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
        var url = "https://runsignup.com/Rest/races/?format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_event_days=T&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&state=ID&distance_units=K&api_key=bKueVsywo2rxTfZ7Ip2QSP44RR0HFGZz&api_secret=NS4x0tJWMQZpTDJGpkCihtdN0MX5vx5D\n";
        Request.get(url).then((response) => {
            this.setState({
                races: response
            })
        })
    }
    componentDidMount() {
        fetch("https://runsignup.com/Rest/races/?format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_event_days=T&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&state=ID&distance_units=K&api_key=bKueVsywo2rxTfZ7Ip2QSP44RR0HFGZz&api_secret=NS4x0tJWMQZpTDJGpkCihtdN0MX5vx5D\n")
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
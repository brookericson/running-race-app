import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';


class RaceItem extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
        };
    }

    componentWillMount() {
        const url = "https://runsignup.com/Rest/races/?format=json&events=T&race_headings=T&race_links=T&include_waiver=F&include_event_days=T&sort=date+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&state=ID&distance_units=M&api_key=bKueVsywo2rxTfZ7Ip2QSP44RR0HFGZz&api_secret=NS4x0tJWMQZpTDJGpkCihtdN0MX5vx5D";
        Request.get(url).then((response) => {
            this.setState({
                races: response.body.races
            });
        });
    }

//     componentDidMount() {
//         fetch("https://runsignup.com/Rest/races/?format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_event_days=T&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&state=ID&distance_units=K&api_key=bKueVsywo2rxTfZ7Ip2QSP44RR0HFGZz&api_secret=NS4x0tJWMQZpTDJGpkCihtdN0MX5vx5D")
//             .then(results => {
//                 results.json();
//             }).then(data => {
//                 let races = data.results.map((race) => {
//                     return(
//                         <div key={race.results}>
//                             <ul>
//                                 <li>{race.name}</li>
//                                 <li>{race.city}</li>
//                                 <li>{race.state}</li>
//                             </ul>
//                         </div>
//                     )
//                 });
//             this.setState({races: races});
//                 console.log("state", this.state.races);
//         })
//     }
//
    render() {
        var races = _.map(this.state.races, (race) => {
            return <li className="raceItem">
                        <ul>
                            <li><img src={race.race.logo_url} alt="logo"></img></li>
                            <li><h3>{race.race.name}</h3></li>
                            <li>{race.race.address.city}, {race.race.address.state}</li>
                            <li>{race.race.next_date}</li>
                            <li><a href={race.race.url}>Learn More</a></li>
                            <li><a href="#">Create a Training Plan</a></li>
                        </ul>
            </li>
        })
        return (
            <ul className="raceList">{races}</ul>
    )
    }
}

export default RaceItem;
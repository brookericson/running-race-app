import React, { Component } from 'react';
import './App.css';
import Race from './Race/Race';

class App extends Component {
    state = {
        races: [
            { id: '1', name: 'Teton Dam Marathon', date: 'June 4, 2018', city: 'Rexburg', state: 'ID', type: ['Marathon', 'Half Marathon', '10k']},
            { id: '2', name: 'Salt Lake City Marathon', date: 'April 21, 2018', city: 'Salt Lake City', state:'UT', type: ['Marathon', 'Half Marathon', '10k']},
            { id: '3', name: 'Deseret News Marathon', date: 'July 24, 2018', city: 'Salt Lake City', state: 'UT', type: ['Marathon', 'Half Marathon', '10k']},
            { id: '4', name: 'Bolder Boulder', date: 'May 25, 2018', city: 'Bolder', state: 'CO', type: '10k'}
        ]
    }

    switchNameHandler = () => {
        console.log('Was Clicked');
    }

    render() {
        return (
          <div onLoad="getLocation()" className="App">
              <h1>RUN THE WORLD</h1>
              <div>Search Races</div>
                  <div>
                    {this.state.races.map((race, index) => {
                        return <Race
                            click={() => this.displayRaceDescription(index)}
                            name={race.name}
                            date={race.date}
                            city={race.city}
                            state={race.state}
                            type={race.type}
                            key={race.id}/>
                  })}
                  </div>
          </div>
      );
  }
}

export default App;

import React from 'react';

import RaceItem from './RaceItem/RaceItem';

const raceList = (props) => {
    // const transformedRaces = Object.keys(props.races)
    //     .map(raceKey => {
    //         return [...Array(props.races[raceKey])].map((_, i) => {
    //             return <RaceItem key={raceKey + i} />;
    //         });
    //     })
    //     .reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);
    // console.log(transformedRaces);
  return (
      <div>
          <RaceItem/>
          <RaceItem/>
          <RaceItem/>
          <RaceItem/>
          <RaceItem/>
      </div>
  );
};

export default raceList;
import React, { useState, useEffect } from 'react';
import createStatesObject from './appService';
// import State from '../Components/State';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      try {
        const response = await fetch('https://covidtracking.com/api/states/daily', requestOptions);
        const resJson = await response.json();
        setData(resJson);
        const statesObject = createStatesObject(resJson);
        console.log(statesObject);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Yo</h1>
      {(data && data.map((state) => <p>{state.state}</p>)) || <p>Loading...</p>}
    </div>
  );
};

export default App;

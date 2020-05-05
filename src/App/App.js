import React, { useState, useEffect } from 'react';
import createStatesObject from './appService';
// import State from '../Components/State';
import useDropdown from '../useDropdown';

const App = () => {
  const [data, setData] = useState(null);
  const [states, setStates] = useState([]);
  const [territory, TerritoryDropdown, setTerritory] = useDropdown('Territory/State', '', states);
  const [dataTable, setDataTable] = useState({});

  useEffect(() => {
    setData([]);
    setTerritory('');

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
        setDataTable(statesObject);
        setStates(Object.keys(statesObject));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setTerritory]);

  console.log(states);

  return (
    <main>
      <header>State COVID19 Tracker</header>
      {/* {(data && data.map((state) => <p>{state.state}</p>)) || <p>Loading...</p>} */}
      <TerritoryDropdown />
    </main>
  );
};

export default App;

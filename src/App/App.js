import React, { useState, useEffect } from 'react';
import { createStatesObject, getData } from './appService';
import State from '../Components/State/State';
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
      const res = await getData();
      setData(res);
      const statesObject = createStatesObject(res);
      setDataTable(statesObject);
      setStates(Object.keys(statesObject));
    })();
  }, [setTerritory, setData]);

  const stateData = dataTable[territory];
  console.log(stateData);
  return (
    <main>
      <header>State COVID19 Tracker</header>
      {(data && <p>Select a State or Territory to View Information</p>) || <p>Loading...</p>}
      <TerritoryDropdown />
      {(!stateData && <p>No territory selected</p>) || <State stateData={stateData} territory={territory} />}
    </main>
  );
};

export default App;

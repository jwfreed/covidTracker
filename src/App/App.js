import React, { useState, useEffect } from 'react';
import { createStatesObject, getData } from './appService';
import State from '../Components/State/State';
import useDropdown from '../useDropdown';

const App = () => {
  const [setData] = useState(null);
  const [states, setStates] = useState([]);
  const [territory, TerritoryDropdown, setTerritory] = useDropdown('Territory/State', '', states);
  const [dataTable, setDataTable] = useState(JSON.parse(localStorage.getItem('statesObj')) || {});
  const date = new Date();
  const dayMonthYear = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  useEffect(() => {
    if (dataTable && dataTable.dateCreated === dayMonthYear) {
      setStates(Object.keys(dataTable));
      return;
    }
    setData([]);
    setTerritory('');
    (async () => {
      const res = await getData();
      setData(res);
      const statesObject = createStatesObject(res);
      localStorage.setItem('statesObj', JSON.stringify(statesObject));
      setDataTable(statesObject);
      setStates(Object.keys(statesObject));
    })();
  }, [dataTable, dayMonthYear, setTerritory, setData]);

  const stateData = dataTable[territory];

  return (
    <main>
      <header>State COVID19 Tracker</header>
      {(dataTable && <p>Select a State or Territory to View Information</p>) || <p>Loading...</p>}
      <TerritoryDropdown />
      {(!stateData && <p>No territory selected</p>) || <State stateData={stateData} territory={territory} />}
    </main>
  );
};

export default App;

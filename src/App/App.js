import React, { useState, useEffect } from 'react'
import getData from './appService';
import State from '../Components/State';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const covidData = getData();
    setData(covidData);
  }, [])

  const renderStates = () => {
    data.map((state, index) => {
      return <State
        key={index}
        positive={state.positive}
        hospitalizedCurrently={state.hospitalizedCurrently}
        totalTestResults={state.totalTestResults}
        negative={state.negative}
        positiveIncrease={state.positiveIncrease}
      />
    })
  }
  return (
    
  )
}

export default App;
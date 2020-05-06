import React from 'react';

const State = ({ stateData, territory }) => {
  console.log(stateData[0]);
  console.log(territory);

  return (
    <div>
      {territory}
    </div>
  );
};

export default State;

const createStatesObject = (data) => {
  const statesObject = {};
  data.forEach((state) => {
    const stateAbr = state.state;
    if (!statesObject[stateAbr]) {
      statesObject[stateAbr] = [];
    }
    statesObject[stateAbr].push(state);
  });
  return statesObject;
};

export default createStatesObject;

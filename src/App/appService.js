export const createStatesObject = (data) => {
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

// export default createStatesObject;

export async function getData() {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  try {
    const response = await fetch('https://covidtracking.com/api/states/daily', requestOptions);
    const resJson = await response.json();
    return await resJson;
  } catch (error) {
    console.error(error);
  }
}

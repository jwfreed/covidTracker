const getData = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('https://covidtracking.com/api/states/daily', requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export default getData;

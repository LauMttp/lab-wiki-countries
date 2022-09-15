import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/ContryDetails';
import countries from './countries.json';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countriesFetch, setCountriesFetch] = useState([]);
  const config = {
    method: 'get',
    url: 'https://ih-countries-api.herokuapp.com/countries',
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setCountriesFetch(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesFetch={countriesFetch} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesFetch={countriesFetch} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

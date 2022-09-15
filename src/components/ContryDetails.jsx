import { Link, useParams, useSearchParams } from 'react-router-dom';

function CountryDetails({ countriesFetch }) {
  const { id } = useParams();
  if (!countriesFetch.length) return <div>Loading....</div>


  const currentCountry = countriesFetch.find((country) => {
    return country.alpha3Code === id;
  });



  const cca2 = currentCountry.alpha2Code.toLowerCase();
  const url = `https://flagpedia.net/data/flags/icon/72x54/${cca2}.png`;
  return (
    <div className="CountryDetails col-7" key={currentCountry.alpha3Code}>
      <h2>
        {currentCountry.name.common} <img src={url} alt="flag" />
      </h2>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.forEach((element) => {
                  return <Link>{element}</Link>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

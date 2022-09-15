import { Link } from 'react-router-dom';

function CountriesList({ countriesFetch }) {
  if (!countriesFetch.length) return <div>Loading....</div>;
  return (
    <div className="CountriesList col-5">
      {countriesFetch.map((country) => {
        return (
          <span className="list-group-item list-group-item-action">
            <Link to={`/${country.alpha3Code}`}> {country.name.common}</Link>
          </span>
        );
      })}
    </div>
  );
}

export default CountriesList;

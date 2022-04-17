import React from 'react';
import './Table.css';
import StarWarsContext from '../context/StarWarsContext';

class Table extends React.Component {
  render() {
    const { data, handleChange, filterByName } = this.context;

    const resultFilterName = data
      .filter((objData) => objData.name.includes(filterByName));

    return (
      <>
        <section className="boxMenuFilter">
          <h3>Menu Filter</h3>
          <label htmlFor="filterByName">
            <input
              type="text"
              name="filterByName"
              data-testid="name-filter"
              onChange={ handleChange }
            />
          </label>
        </section>

        <table border="2" id="tableStarWars">
          <thead className="headerTable">
            <tr>
              <th>name</th>
              <th>climate</th>
              <th>created</th>
              <th>diameter</th>
              <th>edited</th>
              <th>films</th>
              <th>gravity</th>
              <th>orbital period</th>
              <th>population</th>
              <th>rotation period</th>
              <th>surface water</th>
              <th>terrain</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody className="bodyTable">
            { resultFilterName.map((objtData) => (
              <tr key={ objtData.name }>
                <td>{ objtData.name }</td>
                <td>{ objtData.climate }</td>
                <td>{ objtData.created }</td>
                <td>{ objtData.diameter }</td>
                <td>{ objtData.edited }</td>
                <td>
                  { objtData.films.map((film) => film) }
                </td>
                <td>{ objtData.gravity }</td>
                <td>{ objtData.orbital_period }</td>
                <td>{ objtData.population }</td>
                <td>{ objtData.rotation_period }</td>
                <td>{ objtData.surface_water }</td>
                <td>{ objtData.terrain }</td>
                <td>{ objtData.url }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

Table.contextType = StarWarsContext;

export default Table;

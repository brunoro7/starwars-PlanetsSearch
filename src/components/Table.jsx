import React from 'react';
import './Table.css';
import StarWarsContext from '../context/StarWarsContext';

class Table extends React.Component {
  render() {
    const { data } = this.context;
    return (
      <>
        <section className="boxMenuFilter">
          <h3>Menu Filter</h3>
          <label htmlFor="inputTextName">
            <input
              type="text"
              name="inputTextName"
              data-testid="name-filter"
              onChange={ this.handleChange }
            />
          </label>
        </section>

        <table border="2" id="tableStarWars">
          <thead className="headerTable">
            <tr>
              <th>climate</th>
              <th>created</th>
              <th>diameter</th>
              <th>edited</th>
              <th>films</th>
              <th>gravity</th>
              <th>name</th>
              <th>orbital period</th>
              <th>population</th>
              <th>rotation period</th>
              <th>surface water</th>
              <th>terrain</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody className="bodyTable">
            {data.map((objtData) => (
              <tr key={ objtData.name }>
                <td>{ objtData.climate }</td>
                <td>{ objtData.created }</td>
                <td>{ objtData.diameter }</td>
                <td>{ objtData.edited }</td>
                <td>
                  { objtData.films.map((film) => film) }
                </td>
                <td>{ objtData.gravity }</td>
                <td>{ objtData.name }</td>
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

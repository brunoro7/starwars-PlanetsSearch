import React from 'react';
import './Table.css';
import StarWarsContext from '../context/StarWarsContext';

class Table extends React.Component {
  render() {
    const { data, handleChange, filterByName, handleClickFilter } = this.context;

    const resultFilterName = data
      .filter((objData) => objData.name.includes(filterByName));

    return (
      <main className="boxMain">
        <section className="boxMenuFilter">
          <h3>Menu Filter</h3>
          <label htmlFor="filterByName">
            Pesquisa por nome:
            {' '}
            <input
              type="text"
              name="filterByName"
              data-testid="name-filter"
              onChange={ handleChange }
            />
          </label>
          {' '}
          <label htmlFor="columnFilter">
            Coluna:
            {' '}
            <select
              name="columnFilter"
              data-testid="column-filter"
              type="select"
              onChange={ handleChange }
            >
              <option name="columnFilter" value="population">
                population
              </option>
              <option name="columnFilter" value="orbital_period">
                orbital_period
              </option>
              <option name="columnFilter" value="diameter">
                diameter
              </option>
              <option name="columnFilter" value="rotation_period">
                rotation_period
              </option>
              <option name="columnFilter" value="surface_water">
                surface_water
              </option>
            </select>
          </label>
          {' '}
          <label htmlFor="comparisonFilter">
            Operador:
            {' '}
            <select
              name="comparisonFilter"
              data-testid="comparison-filter"
              type="select"
              onChange={ handleChange }
            >
              <option name="comparisonFilter" value="maior que">
                maior que
              </option>
              <option name="comparisonFilter" value="menor que">
                menor que
              </option>
              <option name="comparisonFilter" value="igual a">
                igual a
              </option>
            </select>
          </label>
          {' '}
          <label htmlFor="valueFilter">
            Quantidade:
            {' '}
            <input
              type="number"
              name="valueFilter"
              data-testid="value-filter"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClickFilter }
          >
            Filtrar
          </button>
        </section>

        <table border="2" id="tableStarWars">
          <thead className="headerTable">
            <tr>
              <th>name</th>
              <th>diameter</th>
              <th>climate</th>
              <th>orbital period</th>
              <th>rotation period</th>
              <th>terrain</th>
              <th>surface water</th>
              <th>gravity</th>
              <th>population</th>
              <th>created</th>
              <th>edited</th>
              <th>films</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody className="bodyTable">
            { resultFilterName.map((objtData) => (
              <tr key={ objtData.name }>
                <td>{ objtData.name }</td>
                <td>{ objtData.diameter }</td>
                <td>{ objtData.climate }</td>
                <td>{ objtData.orbital_period }</td>
                <td>{ objtData.rotation_period }</td>
                <td>{ objtData.terrain }</td>
                <td>{ objtData.surface_water }</td>
                <td>{ objtData.gravity }</td>
                <td>{ objtData.population }</td>
                <td>{ objtData.created }</td>
                <td>{ objtData.edited }</td>
                <td>
                  { objtData.films.map((film) => film) }
                </td>
                <td>{ objtData.url }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

Table.contextType = StarWarsContext;

export default Table;

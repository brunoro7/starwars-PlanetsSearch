import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

class StarWarsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterByName: '',
      columnFilter: 'population',
      comparisonFilter: 'maior que',
      valueFilter: 0,
      filterByNumericValues: [],
      isNumericFilter: false,
      newData: [],
      defaultColumnFilter: [
        'population', 'orbital_period', 'diameter',
        'rotation_period', 'surface_water',
      ],
    };
  }

  async componentDidMount() {
    const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const callAPI = await fetch(urlApi);
    const responseAPI = await callAPI.json();

    const resultsData = responseAPI.results;

    // Referência da desestruturação ==> https://pt.stackoverflow.com/questions/343436/como-remover-uma-chave-de-um-json
    const filterData = resultsData.map(({ residents, ...objData }) => objData);

    this.setState({
      data: filterData,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleNumericFilter = () => {
    const { columnFilter, comparisonFilter,
      valueFilter } = this.state;

    const objNumericFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    this.setNumericFilter(objNumericFilter);
  }

  setNumericFilter = (objNumericFilter) => {
    // console.log(objNumericFilter.column);

    const { defaultColumnFilter } = this.state;
    const updateColumnFilter = defaultColumnFilter
      .filter((column) => column !== objNumericFilter.column);

    this.setState((prevState) => ({
      filterByNumericValues: [...prevState.filterByNumericValues, objNumericFilter],
      isNumericFilter: true,
      columnFilter: '',
      comparisonFilter: '',
      valueFilter: 0,
      defaultColumnFilter: [...updateColumnFilter],
    }), () => this.numericFilterON());
  }

  numericFilterON = () => {
    const { data, filterByNumericValues } = this.state;

    let newData = data;

    filterByNumericValues.forEach((objNumericFilter) => {
      if (objNumericFilter.comparison === 'menor que') {
        newData = newData
          .filter((objDataFilt) => Number(objDataFilt[objNumericFilter.column])
          < Number(objNumericFilter.value));

        this.setState({
          newData,
        });
      }
      if (objNumericFilter.comparison === 'maior que') {
        newData = newData
          .filter((objDataFilt) => Number(objDataFilt[objNumericFilter.column])
        > Number(objNumericFilter.value));

        this.setState({
          newData,
        });
      }
      if (objNumericFilter.comparison === 'igual a') {
        newData = newData
          .filter((objDataFilt) => Number(objDataFilt[objNumericFilter.column])
        === Number(objNumericFilter.value));

        this.setState({
          newData,
        });
      }
    });
  };

  handleClickFilter = () => {
    this.handleNumericFilter();
  }

  render() {
    const { Provider } = StarWarsContext;
    const { children } = this.props;
    return (
      <Provider
        value={ { ...this.state,
          handleChange: this.handleChange,
          handleClickFilter: this.handleClickFilter,
        } }
      >
        { children }
      </Provider>
    );
  }
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;

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
    this.setState((prevState) => ({
      filterByNumericValues: [...prevState.filterByNumericValues, objNumericFilter],
      isNumericFilter: true,
      columnFilter: '',
      comparisonFilter: '',
      valueFilter: 0,
    }), () => this.numericFilterON());
  }

  numericFilterON = () => {
    const { data, filterByNumericValues } = this.state;

    let newData;
    if (filterByNumericValues[0].comparison === 'menor que') {
      newData = data
        .filter((objDataFilt) => Number(objDataFilt[filterByNumericValues[0].column])
        < Number(filterByNumericValues[0].value));

      this.setState({
        newData,
      });
    }
    if (filterByNumericValues[0].comparison === 'maior que') {
      newData = data
        .filter((objDataFilt) => Number(objDataFilt[filterByNumericValues[0].column])
        > Number(filterByNumericValues[0].value));

      this.setState({
        newData,
      });
    }
    if (filterByNumericValues[0].comparison === 'igual a') {
      newData = data
        .filter((objDataFilt) => objDataFilt[filterByNumericValues[0].column]
        === filterByNumericValues[0].value);

      this.setState({
        newData,
      });
    }
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

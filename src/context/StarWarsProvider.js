import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

class StarWarsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterByName: '',
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

  render() {
    const { Provider } = StarWarsContext;
    const { children } = this.props;
    return (
      <Provider
        value={ { ...this.state,
          handleChange: this.handleChange,
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

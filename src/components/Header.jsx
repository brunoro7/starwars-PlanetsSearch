import React from 'react';
import './Header.css';
import StarWarsContext from '../context/StarWarsContext';

class Header extends React.Component {
  handleClick = () => {
    const { data } = this.context;

    console.log(this.context);
    console.log(data);
  }

  render() {
    return (
      <header className="boxHeader">
        <h1>Star Wars Project</h1>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Chamada da Api
        </button>
      </header>
    );
  }
}

Header.contextType = StarWarsContext;

export default Header;

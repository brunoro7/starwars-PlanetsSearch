import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';

class Home extends React.Component {
  render() {
    return (
      <div className="boxBody">
        <Header />
        <Table />
      </div>
    );
  }
}

export default Home;

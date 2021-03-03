import styles from './App.module.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { fetchData } from './api';
import { Component, useEffect, useState } from 'react';

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Header />
        <Cards finalData={data} />
      </div>
    );
  }
}

export default App;

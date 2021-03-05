import styles from './App.module.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { fetchData, fetchJoke } from './api';
import { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';

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
      <Router>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Cards finalData={data} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

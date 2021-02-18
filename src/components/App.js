import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobGroup from "./JobGroup";
import './App.css';
import history from '../history';
import JobDetail from "./JobDetail";


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className={`App ${this.props.type ? 'light': 'dark'}`}>

          <Switch>
              <Route path="/" exact render={() =>
                  <Fragment>
                    <Header />
                    <SearchBar />
                    <JobGroup />
                  </Fragment>
                  } 
              />
              <Route path="/job/:id" exact render={() =>
                  <Fragment>
                    <Header />
                    <JobDetail />
                  </Fragment>
                  } 
              />
          </Switch>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { type: state.theme.type };
};

export default connect(mapStateToProps, {})(App);

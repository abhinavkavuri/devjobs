import React from "react";
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobGroup from "./JobGroup";
import './App.css';
import history from '../history';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className={`App ${this.props.type ? 'light': 'dark'}`}>
    
          <Header/>
          <SearchBar/>
          <JobGroup />
      
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { type: state.theme.type };
};

export default connect(mapStateToProps, {})(App);

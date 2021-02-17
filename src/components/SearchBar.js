import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../actions';
import './SearchBar.css';


class SearchBar extends React.Component {

    state = { title: "", location: "", fulltime: false};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchJobs(this.state);    
    }

    render(){
        return (
            <div className="Container">
                <div className="SearchGroup">
                    <form className="SearchForm">
                        <div className="input-group input-group--title">
                            <input 
                                id="title" 
                                placeholder="Filter by title, companies, expertise…" 
                                value={this.state.title} 
                                onChange={(event) => this.setState({title: event.target.value})} 
                                type="text"
                            />
                        </div>

                        <div className="input-divider"></div>

                        <div className="input-group input-group--location">
                            <input 
                                id="location" 
                                placeholder="Filter by location..."
                                value={this.state.location} 
                                onChange={(event) => this.setState({location: event.target.value})} 
                                type="text"
                            />
                        </div>

                        <div className="input-divider"></div>

                        <div className="input-group--checkbox">
                            <input 
                                className="input-field" 
                                type="checkbox" 
                                id="filter-by-fulltime" 
                                checked={this.state.fulltime} 
                                onChange={(event) => this.setState({fulltime: event.target.checked})} 
                            />
                            <label className="input-label" htmlFor="filter-by-fulltime">Full Time Only</label>
                        </div>

                        <button onClick={this.onFormSubmit} className="btn btn-search" type="submit">Search</button>

                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
};

export default connect(mapStateToProps, { fetchJobs })(SearchBar);
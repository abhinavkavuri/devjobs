import React from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../actions";
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = { title: "", location: "", fulltime: false, lat: "", long: "" };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                long: position.coords.latitude,
                lat: position.coords.longitude,
            });
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchJobs(this.state);
    };

    render() {
        return (
            <div className="Container">
                <div className="SearchGroup">
                    <form className="SearchForm">
                        <div className="InputGroup InputTitle">
                            <input
                                id="title"
                                placeholder="Filter by title, companies, expertise…"
                                value={this.state.title}
                                onChange={(event) =>
                                    this.setState({ title: event.target.value })
                                }
                                type="text"
                            />
                        </div>

                        <div className="InputDivider"></div>

                        <div className="InputGroup InputLocation">
                            <input
                                id="location"
                                placeholder="Filter by location..."
                                value={this.state.location}
                                onChange={(event) =>
                                    this.setState({
                                        location: event.target.value,
                                    })
                                }
                                type="text"
                            />
                        </div>

                        <div className="InputDivider"></div>

                        <div className="InputCheckbox">
                            <input
                                id="fulltime-checkbox"
                                className="input-field"
                                checked={this.state.fulltime}
                                onChange={(event) =>
                                    this.setState({
                                        fulltime: event.target.checked,
                                    })
                                }
                                type="checkbox"
                            />
                            <label
                                className="InputLabel"
                                htmlFor="fulltime-checkbox"
                            >
                                Full Time Only
                            </label>
                        </div>

                        <button
                            onClick={this.onFormSubmit}
                            className="btn btn-search"
                            type="submit"
                        >
                            Search
                        </button>
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

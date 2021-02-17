import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { darkOn, darkOff } from '../actions';
import './Header.css';
import sun from '../static/moon.png';
import moon from '../static/sun.png';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasScrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset;
    
        if(scrollTop > 50){
          this.setState({ hasScrolled: true });
        } else {
          this.setState({ hasScrolled: false });
        }
    }

    onSwitch = (event) => {
        if(this.props.type === 'light') 
            this.props.darkOn();
        else 
            this.props.darkOff();
    }

    toggle = () => {
        return (
            <div className="Toggle">
                <div className="ToggleIcon">
                    <img src={moon} alt="icon"/>
                </div>
                <div className="toggle-container" onClick={this.onSwitch}>
                    <div className={`dialog-button ${this.props.type === 'light' ? "disabled" : ""}`}>
                    </div>
                </div>
                <div className="ToggleIcon">
                    <img src={sun} alt="icon"/>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                    <div className="HeaderGroup">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                devjobs
                            </div>
                        </Link>
                        {this.toggle()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { type: state.theme.type };
};

export default connect(mapStateToProps, { darkOn, darkOff })(Header);
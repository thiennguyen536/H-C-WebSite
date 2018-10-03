import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <Link to={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </Link>
    </li>
  );
}


class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand"><Link className="navbar-brand-link" to="/"><img className="logo" src={logo} alt="golf" /></Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto my-2 my-lg-0">
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <NavItem path="/" name="Home" />
            <NavItem path="/page1" name="Page1" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Page3" />
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;
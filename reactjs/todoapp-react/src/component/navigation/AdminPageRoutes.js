import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TodoContainer from '../todos/containers/todoContainer';
import logo from '../../assets/logo.png';

export const AdminPage = ({ match }) => {
    return (
        <div className="wrapper">
            <aside>
                {/* <div className="navbar-brand">
                    <Link className="navbar-brand-link" to={match.url}>
                        <img className="logo" src={logo} alt="golf" />
                        <span></span>
                    </Link>
                </div> */}
                <ul>
                    <li>
                        <Link to={match.url}>
                            <span>Home</span>
                            <span></span>
                        </Link>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/tea-milk`}>
                            <span>TeaMilk</span>
                            <span></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/food`}>
                            <span>Food</span>
                            <span></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/beverage`}>
                            <span>Beverage</span>
                            <span></span>
                        </NavLink>
                    </li>
                </ul>
            </aside>

            <main role="main" className="Dashboard">
                <div className="clearfix"></div>
                <Route path={`${match.url}/tea-milk`} component={TodoContainer} />
                <Route path={`${match.url}/food`} component={TodoContainer} />
                <Route path={`${match.url}/beverage`} component={TodoContainer} />
                <Route exact path={match.url} render={() => (
                    <div>
                        <h2>Lorem Table</h2>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>Lorem</td>
                                        <td>ipsum</td>
                                        <td>dolor</td>
                                        <td>sit</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>amet</td>
                                        <td>consectetur</td>
                                        <td>adipiscing</td>
                                        <td>elit</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>Integer</td>
                                        <td>nec</td>
                                        <td>odio</td>
                                        <td>Praesent</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>libero</td>
                                        <td>Sed</td>
                                        <td>cursus</td>
                                        <td>ante</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>dapibus</td>
                                        <td>diam</td>
                                        <td>Sed</td>
                                        <td>nisi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )} />
            </main>
        </div>
    )
};
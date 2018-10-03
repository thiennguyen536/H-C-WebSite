import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navigation from './component/navigation/Nav';
import {AdminPage} from './component/navigation/AdminPageRoutes';
// The Todo Container Component

import TodoContainer from './component/todos/containers/todoContainer';
import Content from './component/todos/containers/Content';
import Content1 from './component/todos/containers/Content1'

const Home = () => (
    <div>
      <h1>Welcome to the H&C Website!</h1>
    </div>
  )


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    let currentpath = props.currentpath.slice(1,11);
    return (
        <BrowserRouter>
            
                {   
                    (currentpath === 'admin-page') 
                    ?
                    (
                        <div>
                            <Switch>
                                <Route path="/admin-page" component={AdminPage}/>
                            </Switch>
                        </div>
                    ) 
                    :
                    (
                        <div>
                            <Navigation />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/page1" component={Content} />
                                <Route path="/page2" component={Content} />
                                <Route path="/page3" component={Content1} />
                                <Route path="/admin-page" component={AdminPage} exact/>
                            </Switch>
                        </div>
                    )
                }
        </BrowserRouter>
    )
}


export { Routes }
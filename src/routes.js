import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Routes extends React.Component {
  state = {
    activeClass: 'top',
    navExpanded: false,
    isLoggedIn: false
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'top';
       if(window.scrollY > 50){
           activeClass = 'normal';
       }
       this.setState({ activeClass });
    });
  }

  handleNavExpand = () => {
    this.setState(preState => ({navExpanded: !preState.navExpanded}));
  }

  render () {
    const { activeClass, navExpanded } = this.state;
    return (
      <Router>
        <Header
          activeClass={activeClass}
          navExpanded={navExpanded}
          handleNavExpand={this.handleNavExpand}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/courses" exact component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

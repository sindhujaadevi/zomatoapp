let React = require('react');
let ReactDOM = require('react-dom');
let {browserHistory, Route, Router, IndexRoute} = require('react-router');
// let {Favs} = require('./components/js/view');
let NavBar = require('./components/sample/NavBar');
// let Favs = require('./components/sample/js/Favs');
let Search = require('./components/sample/clientapp1.jsx');
import Favs from './components/sample/clientapp2.jsx';
let login = require('./components/sample/login.jsx');


let MainComp = React.createClass({
  render: function() {
    return(
      <div>
      <NavBar/>
        {this.props.children}
      </div>
    );
  }
});
MainComp.propTypes = {
  children: React.PropTypes.object
};
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={login}/>
              <Route component={MainComp}>
               <Route path='/home' component={Search}/>
               <Route path="/view" component={Favs}/>
              </Route>
  </Router>, document.getElementById('mountapp'));

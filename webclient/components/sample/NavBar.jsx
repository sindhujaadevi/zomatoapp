let React = require('react');
let {Link} = require('react-router');
import {Menu} from 'semantic-ui-react';

class NavBar extends React.Component {
    state = {
        status: 'login'
    }

    itemClick = (e, {name}) => this.setState({status: name})

    render() {
        const {status} = this.state;

        return (
            <Menu pointing>
              <Link to="/">
                  <Menu.Item name='login' active={status === 'login'} onClick={this.itemClick}/>
              </Link>
                <Link to="/home">
                    <Menu.Item name='Home' active={status === 'home'} onClick={this.itemClick}/></Link>
                <Link to="/view">
                    <Menu.Item name='View' active={status === 'view'} onClick={this.itemClick}/>
                </Link>

            </Menu>
        );
    }
}
module.exports = NavBar;

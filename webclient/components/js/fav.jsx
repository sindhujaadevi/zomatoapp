import React from 'react';
import $ from 'jquery';
let Display = require('./Display.jsx');

class Favourites extends React.Component {
  constructor() {
        super();
        this.state = {viewArray: []};
        this.change = this.change.bind(this);
        this.view = this.view.bind(this);
    }
    view() {
      $.ajax({
       url: 'http://localhost:8080/restaurants/displayall',
       success: function(data) {
         this.setState({viewArray: data});
       }.bind(this)
     });
    }

    componentDidMount() {
      this.view();
    }

    change() {
      this.view();
    }

    render() {
        return (
          <div>
              <Display viewArray={this.state.viewArray} detail='update' change={this.change}/>
          </div>
        );
    }
}
Favourites.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  address: React.PropTypes.string,
  image: React.PropTypes.string,
  detail: React.PropTypes.string,
  votes: React.PropTypes.string,
  rating: React.PropTypes.string,
  cuisines: React.PropTypes.string,
  comment: React.PropTypes.func,
  change: React.PropTypes.func,
  refresh: React.PropTypes.func
};
export default Favourites;

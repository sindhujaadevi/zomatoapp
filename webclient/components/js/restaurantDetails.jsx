let React = require('react');
let ListItem = require('./view.jsx');
import {Card} from 'semantic-ui-react';
let List = React.createClass({
  render: function() {
    let ingredients = this.props.result;
    let detail = this.props.detail;

    if(ingredients.length > 0)
    {
    let ListItems = ingredients.map(function(item) {
        return <ListItem key={arguments[1]} id={item.restaurant.R.res_id}
          name={item.restaurant.name} address = {item.restaurant.location.address}
          image = {item.restaurant.featured_image}
          rating = {item.restaurant.user_rating.aggregate_rating}
          votes={item.restaurant.user_rating.votes}
          cuisine = {item.restaurant.cuisines} detail={detail}/>
      });
        return <Card.Group style={{padding: 40}}>{ListItems}</Card.Group>;
    }
    else {
      return <h1>Hello :)</h1>;
    }
  }
});
List.propTypes = {
  id: React.PropTypes.string,
  result: React.PropTypes.array,
  detail: React.PropTypes.string
};
module.exports = List;

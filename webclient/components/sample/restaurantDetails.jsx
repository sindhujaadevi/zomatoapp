import React from 'react';
var Cards = require('./card.jsx');
import { Card, Icon, Image, Button } from 'semantic-ui-react';

class RestaurantDetailsComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
			var divStyle = {
     margin: 70
   };
        var json = this.props.result;
			console.log(JSON.stringify(json));
				var list = "";
	        var restaurants = this.props.result.map(function(item) {
	            return (<Cards img={item.restaurant.featured_image}
								name={item.restaurant.name}
								 address={item.restaurant.location.address}
							 cuisines={item.restaurant.cuisines}
						 	ratings={item.restaurant.user_rating.aggregate_rating}/>);
	        });
        return (
					<div style={divStyle}><Card.Group>{restaurants}</Card.Group></div>
				);
    }
}

module.exports = RestaurantDetailsComponent;

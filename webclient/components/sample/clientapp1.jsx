import React from 'react';
import $ from 'jquery';
let Search = require('./../js/search.jsx');
let RestDetails = require('./../js/restaurantDetails.jsx');
class MainComponent extends React.Component {
   constructor () {
       super();
       // this.onClick = this.onClick.bind(this);
       this.getRestaurantData = this.getRestaurantData.bind(this);
       this.state = {result: [], id: ''};
       this.getRestaurantLocation = this.getRestaurantLocation.bind(this);
   }
   getRestaurantData (location, cuisine)
   {
     if(location === null || location === '')
     {
       alert('Location cannot be empty')
     }

   $.ajax({
       url: 'https://developers.zomato.com/api/v2.1/cities?q=' + location,
       type: 'GET',
       beforeSend: function (request)
      {
             request.setRequestHeader('user-key', 'e20951f61a62821e99914a65f52cc447');
       },
      success: function(data)
      {
        // console.log('Successfully got JSON from Zomato' + data);
        this.setState({id: data.location_suggestions[0].id});
              this.getRestaurantLocation(this.state.id, cuisine)
      }.bind(this),
     });
   }
      getRestaurantLocation (location, cuisine)
   {
     //console.log(location);
   $.ajax({
        url : 'https://developers.zomato.com/api/v2.1/search?entity_id=' + location + '&entity_type=city&q=' + cuisine,
       type: 'GET',
       beforeSend: function (request)
      {
             request.setRequestHeader('user-key', 'e20951f61a62821e99914a65f52cc447');
       },
      success: function(data)
      {
      //   console.log('Successfully got JSON from Zomato' + data);
              this.setState({result: data.restaurants})
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
   }
      render () {
          return (
              <div>
                      <Search change ={this.getRestaurantData}/>
                  <RestDetails result={this.state.result} detail='save'/>
              </div>
          );
      }
   }
   module.exports = MainComponent;

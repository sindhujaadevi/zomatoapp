import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
let ChildComponent = require('./components/sample/search.jsx');
let ChildComponent1 = require('./components/sample/restaurantDetails.jsx');

class MainComponent extends React.Component {
   constructor () {
       super();
       // this.onClick = this.onClick.bind(this);
       this.state = {result: []};
   }
   getResturantDataFromZomato (location, cuisine)
   {
    //  if(location === null || location === '')
    //  {
    //    alert('Location cannot be empty');
    //  }

   $.ajax({
       url: 'https://developers.zomato.com/api/v2.1/cities?q='+location,
       type: 'GET',
       beforeSend: function (request)
      {
             request.setRequestHeader('user-key', '20bb1099ac63c667e7d38e9e3b76d511');
       },
      success: function(data)
      {
        console.log('Successfully got JSON from Zomato' + data);
              this.getResturantDataFromZomatoLoc(data.location_suggestions[0].id, cuisine)
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
   }
      getResturantDataFromZomatoLoc (location, cuisine)
   {
     console.log(location);
   $.ajax({
        url : 'https://developers.zomato.com/api/v2.1/search?entity_id='+location + '&entity_type=city&q='+cuisine+'&count=20',
       type: 'GET',
       beforeSend: function (request)
      {
             request.setRequestHeader('user-key', '20bb1099ac63c667e7d38e9e3b76d511');
       },
      success: function(data)
      {
        console.log('Successfully got JSON from Zomato' + data);
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
                      <ChildComponent change ={this.getResturantDataFromZomato.bind(this)}/>
                  <ChildComponent1 result={this.state.result}/>
              </div>
          );
      }
   }
   ReactDOM.render(
      <MainComponent />, document.getElementById('mountapp')
   );

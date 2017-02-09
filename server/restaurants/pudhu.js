function rtest(location)
{
console.log('!@#$%^&*()');
  $.ajax({

     url:"https://developers.zomato.com/api/v2.1/search?&q="+location+"",
     type:'GET',
     beforeSend: function (request)
                 {
                     request.setRequestHeader("user-key", "f223de3b1ce5762153437e3818321cae");
                 },
    success: function(data)
    {
for(var i in data.restaurants)
  {
    if(data.restaurants[i].restaurant.location.city == location && data.restaurants[i].restaurant.cuisines.includes("Chinese") )
    {
      // let image = data.restaurants[i].restaurant.zomato_events[0].event.photos[0].photo.thumb_url;
    //console.log('Successfully got JSON from Zomato ' + data.restaurants[i].restaurant.name);
    // <div class='image'><img src="+image+" alt='Restaurant'/></div>
     let code = "<div class='ui card'><div class='content'><div class='header'>"+data.restaurants[i].restaurant.name+"____"+data.restaurants[i].restaurant.cuisines+"</div></div></div>";
  $('#div1').append(code);
}
}
    }.bind(this),
    error: function(err)
    {
      console.log('error occurred on AJAX');
      console.log(err);
    }.bind(this)
  });
};

rtest("Bangalore");

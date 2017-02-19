$(document).ready(function(){
  $('button').click(function(){
    let entityid = Number($('#cityid').val());
  let entityname = $('#cuisinename').val();
    let url = "https://developers.zomato.com/api/v2.1/search?entity_type=city&apikey=1f97c4974b1c3562863bbcac4988bf30&entity_id="+entityid;
    $.getJSON(url, function(answer){
      $.each(answer.restaurants, function(key,value){
        let id = value.restaurant.R.res_id;
              let name = value.restaurant.name;
              let location = value.restaurant.location.address;
              let image = value.restaurant.featured_image;
              let rating = value.restaurant.user_rating.aggregate_rating;
              //$("div").append(image+ "Restaurant Id:" + id+",Name: "+name + ",Location:"+location+"<br/>");
              let code = "<div class='ui card'><div class='image'><img src="+image+" alt='Restaurant' /></div><div class='content'><div class='header'>"+id+":"+name+"</div><div class='description'>"+location+"</div></div><div class='extra content'><a><i class='location Smile icon'></i>"+rating+"</a></div></div>";
              $('#div').append(code);
      });
    });
  });
});

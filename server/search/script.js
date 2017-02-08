// var express = require ('express');
// var app= express();
// var bodyparser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
// extended:true
// }))
// app.listen(8080);
$(document).ready(function(){
    $('#btnSearch').on('click',function(){
        $('#results').html("");
        var title=$("#search").val();
          $.getJSON('https://developers.zomato.com/api/v2.1/search?cuisines='+title+'&apikey=e20951f61a62821e99914a65f52cc447=',function(json){
                displayResult(json);
              });
    });
    function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["Search"];
        $("#tempelate").tmpl(movieArray).appendTo("#results");
      }
    }
});

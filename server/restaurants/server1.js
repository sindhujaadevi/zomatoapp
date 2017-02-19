var express = require ('express');
var app= express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
extended:true
}))
app.get("/", function(request,response){
   response.send('Hello from Express');
})
app.get("/message", function(request,response){
   response.send('Hello from message');
})
app.get("/product/:a/:b", function(request,response){
  let a = Number(request.params.a);
  let b = Number(request.params.b);
  let c = a*b;
   response.send(''+c);
})
app.get("/add", function(request,response){
  //console.log(request.query.num1);
  let a = Number(request.query.num1);
  let b = Number(request.query.num2);
  let c = a+b;
   response.send(''+c);
})
app.get("/data", function(request,response){
  let obj1= {
    "name":"Amit",
    "age":"26",
    "location":"Bangalore"
  }
  response.send(obj1);
})

app.get("data/:js", function(request,response){
  var obj = {
    "product":"Mobile",
    "price":"12000",
  }
response.send(obj);
})

app.get('/:cuisines',(req,res)=>{
var u = res.redirect('https://developers.zomato.com/api/v2.1/search?cuisines='+req.params.cuisines+'where location=Bangalore&apikey=e20951f61a62821e99914a65f52cc447');
})
app.post("/calculate/add", function(request,response){
  let a = Number(request.body.num1);
  let b = Number(request.body.num2);
  let c = a+b;
   response.send(''+c);
})

app.post('/delete',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
let id1 = req.body.id;
let name1 = req.body.name;

if(id1==null ||name1==null )
{
  res.send("Enter some value")
}
if(id1=="" || name1=="")
{
res.send("Enter valid input");
}
else {
  res.send("done");

}

})

app.post('/add',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
let id1 = req.body.id;
let name1 = req.body.name;

if(id1==null ||name1==null )
{
  res.send("Enter some value")
}
if(id1=="" || name1=="")
{
res.send("Enter valid input");
}
else {
  res.send("done");

}
})
app.put('/update',(req,res)=>{
var input = Number(req.body.id);

if(req.body.id ==null)
{
 res.send('Enter valid id');
}
if(input == "")
{
 res.send('Enter the correct id');
}
else {
 res.send('Resturant updated');
}
})

app.listen(8080);

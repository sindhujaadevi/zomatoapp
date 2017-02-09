const should = require("chai").should();
const assert = require ("chai").assert;
const supertest = require("supertest");
const app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurants");

describe("Testing POST route", function(err){

     it("should not be empty", function(done){
       url
           .post("/add")
           .send({_id:null})
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
             res.text.should.equal('enter a valid restaurant Id');
             done();
           });
        });
        // it("should handle info", function(done){
        //   url
        //       .post("/add")
        //       .send({ _id: "4" , location: "Bangalore" })
        //       .expect(200)
        //       .end(function(err,res){
        //         should.not.exist(err);
        //         res.text.should.equal("Restaurant saved successfully");
        //         done();
        //       });
        //    });
      });

      describe("Testing PUT route", function(err){
       it("should handle and send the computed info", function(done){
         url
             .put("/update")
             .send({ _id: "4", location: "Bangalore" })
             .expect(200)
             .end(function(err,res){
               should.not.exist(err);
               res.text.should.equal("Restaurant updated successfully");
               done();
             });
       });
       it("should provide comment", function(done){
         url
             .put("/update")
             .send({_id:null})
             .expect(200)
             .end(function(err,res){
               should.not.exist(err);
               res.text.should.equal('enter a valid restaurantId');
               done();
             });
           });
      });

  describe("Testing DELETE route", function(err){
 it("should handle and send the computed info", function(done) {
   url
       .delete("/delete")
       .send({_id: "1" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Restaurant deleted successfully');
         done();
       });
 });
 it("should handle and send the computed info", function(done) {
   url
       .delete("/delete")
       .send({_id:null})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("enter a valid restaurant Id");
         done();
       });
 });
});
describe("Testing DISPLAY route", function(err){
it("should handle and send the computed info", function(done) {
 url
     .post("/display")
     .send({_id: "1" })
     .expect(200)
     .end(function(err,res){
       should.not.exist(err);
         let myjson = JSON.parse(res.text)[0]._id;
       // console.log(myjson._id);
       myjson.should.equal('1');
       done();
     });
});
});

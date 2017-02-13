const should = require("chai").should();
const expect = require("chai").expect;
const assert = require ("chai").assert;
const supertest = require("supertest");
const app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurants");

/* post data to check data insertion */
  describe("Testing POST route", function(err){
   it("should add details", function(done){
     url
         .post("/add")
         .send({"_id": "7","name": "Le Promanade","address": "Pondicherry","image" : "hbc" , "rating" : "3", "comments" : "good"})
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           res.text.should.equal('Restaurant saved successfully');
           done();
         });
      });
    it("should have new id and all details", function(done){
        url
            .post("/add")
            .send({"_id": "7","name": "Le Promanade","address": "Pondicherry","image" : "hbc" , "rating" : "3", "comments" : "good"})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              res.text.should.equal('enter new id');
              done();
            });
      });
     it("should not be empty", function(done){
       url
           .post("/add")
           .send({})
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
             res.text.should.equal('enter some data');
             done();
           });
        });
  });


/* update details based on request */
describe("Testing PUT route", function(err){
 it("should update the details", function(done){
   url
       .put("/update")
       .send({"_id": "7","name": "Le Promanade","address": "Pondicherry","image" : "hbc" , "rating" : "3", "comments" : "bad"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("Updated");
         done();
       });
 });
 });


/* should delete based on id */
describe("Testing DELETE route", function(err){
 it("should delete details of specified id", function(done){
   url
       .delete("/deleteid")
       .send({id : "7"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Deleted the id 7 successfully');
         done();
       });

 });
 it("should delete all the details", function(done){
   url
       .delete("/deleteall")
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Deleted all the restaurants successfully');
         done();
       });

 });
});

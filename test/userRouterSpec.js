const should = require("chai").should();
const expect = require("chai").expect;
const assert = require ("chai").assert;
var sinon = require('sinon');
const supertest = require("supertest");
const app = require("../bin/www");

var url = supertest("http://localhost:8080/users");

/* adding data to collection */
  describe("Testing POST route", function(err){
   it("should add details", function(done){
     url
         .post("/add")
         .send({"_id": 1,"name": "admin", "password":"1234"})
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           res.text.should.equal('User saved successfully');
           done();
         });
      });
    it("should add details", function(done){
        url
            .post("/add")
            .send({"_id": 1,"name": "admin", "password":"1234"})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              res.text.should.equal('some error occurred');
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
             res.text.should.equal('enter details');
             done();
           });
        });
  });


  /* displaying the details */
  describe("Testing the user route", function(err){
    it("should handle the request", function(done){
      url
          .get("/display/admin")
          .expect(200)
          .end(function(err,res){
            if (err) {
  				        throw err;
  			    }
            JSON.parse(res.text)[0].name.should.equal('admin');
            done();
          });
    });
    it("should not handle the request", function(done){
        url
            .get("/display/Shree")
            .expect(200)
            .end(function(err,res){
              if (err) {
    				        throw err;
    			    }
              res.text.should.equal('user does not exist');
              done();
            });
      });
  });


/* updating the details */
describe("Testing PUT route", function(err){
 it("should update data", function(done){
   url
       .put("/update")
       .send({"name": "admin","password": "shree"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("Updated successfully");
         done();
       });
 });
 it("should provide all the details", function(done){
   url
       .put("/update")
       .send({"name": "","password":"lol"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('enter a user');
         done();
       });
     });
     it("should provide all the details", function(done){
       url
         .put("/update")
         .send({"name": "sindhu","password":"lol"})
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           res.text.should.equal('user does not exist');
           done();
         });
       });
});


/* deleting the details */
describe("Testing DELETE route", function(err){
 it("should delete particular user", function(done){
   url
       .delete("/delete")
       .send({"name" : "admin"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Deleted admin successfully');
         done();
       });

 });
 it("should throw error if user is not there", function(done){
   url
       .delete("/delete")
       .send({name : "shree"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('wrong user');
         done();
       });
 });
 // it("should delete all users", function(done){
 //   url
 //       .delete("/deleteall")
 //       .expect(200)
 //       .end(function(err,res){
 //         should.not.exist(err);
 //         res.text.should.equal('Deleted all successfully');
 //         done();
 //       });
 // });
});

const should = require("chai").should();
const expect = require("chai").expect;
const assert = require ("chai").assert;
const supertest = require("supertest");
const user = require("../server/users/userEntity.js");

/*checks whether the fields are required*/
describe("for entity",function(){
  it("name should be mandatory",function(done){
      let use = new user();
      use.validate(function(err){
        expect(err.errors.name).to.exist;
        done();
      });
  });
  it("password should be mandatory",function(done){
      let use = new user();
      use.validate(function(err){
        expect(err.errors.password).to.exist;
        done();
      });
  });
});

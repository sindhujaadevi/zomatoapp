
const should = require('chai').should();
const assert = require('chai').assert;
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../server/users/userEntity.js').userModel;

/* testing the required field for name */
describe('Entity user test', function(err) {
    it('should handle the entity name', function(done) {
        let res = new app();
        res.validate(function(err) {
            expect(err.errors.userName).to.exist;
            done();
        });
    });
});

/* testing the required field for password */
describe('Entity user test', function(err) {
    it('should handle the password', function(done) {
        let res = new app();
        res.validate(function(err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });
});

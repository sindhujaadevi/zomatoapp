'use strict';
const logger = require('../applogger');
const should = require('chai').should(),
    assert = require('chai').assert,
    supertest = require('supertest'),
    app = require('../bin/www');
let url = supertest('http://localhost:8080/users');

/* view request with object */
describe('Testing the first route', function(err) {
    it('should handle the request', function(done) {
        url
            .get('/find')
            .expect(200)
          .end(function(err, res) {
                if (err) {
                    logger.debug(err);
                    throw err;
                }

                let myjson = JSON.parse(res.text)[0].password;
                  logger.debug(typeof myjson);
                myjson.should.equal("Smile@1234");
                done();
            });
    });

});


/* Add request without object */
describe('Testing add route request parameter', function(err) {
    it('should handle and send the empty', function(done) {
        let body = {};
        url
            .post('/add')
            .send(body)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                assert.equal('enter the data', res.text, 'res.text is empty');
                done();
            });
    });
});

/* Add request with object */
describe('Testing add route request parameter', function(err) {
    it('should handle and send the name', function(done) {
        url
            .post('/add')
            .send({
                'userName': 'sindhu1',
                'password': 'sindhu1'
            })
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    logger.debug(err);
                    throw err;
                }
                assert.equal('inserted successfully', res.text, 'res.text is not matching with Data inserted');
                done();
            });
    });
});

/* delete request with object */
describe('Testing delete route request parameter', function(err) {
    it('should handle and send the id', function(done) {
        url
            .delete('/delete')
            .send({
                'userName': 'sindhu'
            })
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.text.should.equal('deleted successfully');
                done();
            });
    });
});

/* delete request with empty object */
describe('Testing delete route request parameter', function(err) {
    it('should handle and send the empty', function(done) {
        url
            .delete('/delete')
            .send({})
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.text.should.equal('response from user delete route check');
                done();
            });
    });
});

/* update request with object */
describe('Testing update route request parameter', function(err) {
    it('should handle and send the id', function(done) {
        url
            .put('/update')
            .send({
                userName: 'threka'
            })
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.text.should.equal('updated successfuly');
                done();
            });
    });
});

/* update request without object */
describe('Testing update route request parameter', function(err) {
    it('should handle and send the empty', function(done) {
        url
            .put('/update')
            .send({})
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.text.should.equal('response from user update route check');
                done();
            });
    });
});

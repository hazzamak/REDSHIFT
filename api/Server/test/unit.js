// let chai = require('chai');
// var mocha = require('mocha')
// let chaiHTTP = require('chai-http');
// // var expect = require('chai').expect;
// var describe = mocha.describe;


// const { expect, assert } = require('chai');




// chai.use(chaiHTTP);

// let server = require('../server.js');

// //Assertion Style
// chai.should();
// chai.use(chaiHTTP);
const {expect, should, assert} = require('chai');

const chai = require('chai');

const chaiHttp = require('chai-http');
const server = require('../server.js');
//const jp = require('jsonpath');

chai.use(chaiHttp);


describe('Tasks API',()=>{
    //Testing get by id
    describe("GET /vehicle/get/other",()=>{

        it("It should GET vehicles registered by persons name", (done)=>{

        
            chai.request(server)
            .get("/vehicle/get/other")
            .type('json')
            .send({
                "column": "forenames",
                "data": "Lorraine Jane"
          
            })
            .end((err, response) => {
                response.should.be.status(200);
                response.body.expect.be.a('data');
                response.body.length.should.have.property("registrationDate");
                response.body.should.have.property("vehicleRegistrationNo")
                response.body.should.have.property("make");
                response.body.should.have.property("colour");
                response.body.should.have.property("forenames");
                response.body.should.have.property("surname");
                response.body.should.have.property("address");
                response.body.should.have.property("dateOfBirth");
                response.body.should.have.property("driverLicenceID");
                response.body.should.have.property("timestamp");
                response.body.should.have.property("anprId");
                response.body.should.have.property("streetName");
                response.body.should.have.property("latitude");
                response.body.should.have.property("longitude");
                done();
                //response.body.should.have.property();

                

            });
        });
    });

    
});
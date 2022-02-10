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
const chaiJson = require('chai-json-equal');
const Sequelize = require('sequelize');


const server = require('../server.js');
//const jp = require('jsonpath');

chai.use(chaiHttp);
chai.use(chaiJson);


describe('Tasks API',()=>{
    //Testing get by id
    describe("GET /vehicle/get/other",()=>{

        it("It should GET  vehicle information( colour, make, vehicleRegistrationNo) by persons forenames", (done)=>{

        
            chai.request(server)
            .get("/vehicle/get/other")
            .type('json')
            .send({
                "column": "forenames",
                "data": "Lorraine Jane"
          
            })
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response).to.be.a("object");
                const body = response.body.data;
                
                
                body.map((info)=>{
                    expect(info).to.include.keys("colour");
                    expect(info.colour).to.be.a('string');

                    expect(info).to.include.keys("model");
                    expect(info.model).to.be.a('string');

                    expect(info).to.include.keys("longitude");
                    //console.log(info.longitude);
                    expect(info.longitude).to.be.a("double");




                });
                
            //    (response.body).should.eql("registrationDate");
               
            //     response.body.should.have("vehicleRegistrationNo")
            //     response.body.should.have.property("make");
    
                done();
                });

                //response.body.should.have.property();

                

            });
        });
        describe("GET /get/other",()=>{

            it("It should GET  all information( citizenID, placeOfBirth, sex) by persons forenames", (done)=>{
    
            
                chai.request(server)
                .get("/get/other")
                .type('json')
                .send({
                    "column": "forenames",
                    "data": "Lorraine Jane"
              
                })
                .end((err, response) => {
                    expect(response).to.have.status(200);
                    expect(response).to.be.a("object");
                    const body = response.body.data;
                    
                    
                    body.map((info)=>{
                        expect(info).to.include.keys("citizenID", "placeOfBirth", "sex");
    
                    });
                    
                //    (response.body).should.eql("registrationDate");
                   
                //     response.body.should.have("vehicleRegistrationNo")
                //     response.body.should.have.property("make");
        
                    done();
                    });
    
                    //response.body.should.have.property();
    
                    
    
                });
            });
        //This returns a timeout error
        // describe("GET /getall",()=>{

        //     it("It should GET all ", (done)=>{
    
            
        //         chai.request(server)
        //         .get("/getall")
        //         .type('json')
        //         .end((err, response) => {
        //             expect(response).to.have.status(200);
        //             expect(response).to.be.a("object");
        //             const body = response.body.data;
        //             console.log(body);
                    
        //             body.map((info)=>{
        //                 expect(info).to.include.keys("citizenID", "forenames", "surname");
    
        //             });
                    
        //         //    (response.body).should.eql("registrationDate");
                   
        //         //     response.body.should.have("vehicleRegistrationNo")
        //         //     response.body.should.have.property("make");
        
        //             done();
        //             });
    

    // });

});

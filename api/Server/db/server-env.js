/*

this is the env file to access the database, it
 shouldn't be pushed to GitHub for it has the conenctions details.
Video here explaning: 
https://www.youtube.com/watch?v=5WFyhsnU4Ik
*/

const http = require("http"); // http package for createServer
require('dotenv').config();




const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
console.log(db);
// let server = http.createServer((req, res)=>{
//     console.log('Request Registered ');
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello There')
// });

// server.listen(port, host, ()=>{
//     console.log(`server is listening on ${host}: ${port}`);
// });


db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("database connected");
});



//   async  function  getOrders() {
//     try {
//       let  pool =   db.connect();
//       let  products =   pool.request().query("SELECT * from citzen");
      
//       console.log(products);
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
//   getOrders();


// CS55-week-01

//use http package (shared code) from node.js
let myhttp = require("http");

//use http [package createServer()
// that runs a web server
let myserver = myhttp.createServer(
    // createServer() uses our function to run when a request comes in 
    function( myrequest, myresponse){ 
        console.log( myrequest.url);
        let mytext;
        if ( myrequest.url === '/hello'){
            mytext = "hows it going...";

        } else {
            mytext = "who is this";
        }
        let mytext;
        if ( myrequest.url === '/omg'){
            mytext = "For Reals";

        } else {
            mytext = "Not for reals";
        }
       
    }
);

// ask http to start listening on a tcp for incoming http request comes in
// listen() takes 2 args: 1: tcp port #, string of the ip address to listen ( 0.0.0.0)
myserver.listen(8080,"127.0.0.1");
 

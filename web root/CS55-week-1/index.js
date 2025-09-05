// CS55-week-01

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);

    let mytext = "";

    if (req.url === "/hello") {
        mytext = "hows it going...";
    } else if (req.url === "/omg") {
        mytext = "For Reals";
    } else {
        mytext = "who is this";
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(mytext);
});

server.listen(8080, "127.0.0.1");

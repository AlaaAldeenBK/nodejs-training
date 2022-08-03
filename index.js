const server = require('http');
const urlModule = require('url');
const serverApp = server.createServer((req, res) =>{
    res.setHeader("Content-Type","text/html");
    res.statusCode = 404;
    // res.write(req.url);
    // var link = req.url;
    // console.log(link);
    // var linkParts = req.url.split("/");
    // console.log(linkParts);

    const urlObj = urlModule.parse("http://127.0.0.1:3002/login/user?id=4&type=customer",true);
    if(urlObj.hostname =="/")
    {
        res.write("Welcome to home page");
        res.end();
    }
    else if(urlObj.hostname == "/Product")
    {
        res.write("Welcome to home page");
        res.end();
    }
    else if(urlObj.hostname == "login")
    {
        if(req.method == "POST")
        {
            res.write("Welcome to home page");
            res.end();
        }
        else
        {
            req.statusCode = 302
        }
    }
    // const queryItem = urlObj.query;
    // res.write(queryItem.id);
    // res.write(req.url);
    // res.write(linkParts[3]);
    res.end();
});
serverApp.listen("3003");
console.log("server start");
let http = require('http')
http.createServer(function(request, response){
    response.writeHead(200, {"content-type":"text/plain"})
    response.write("Welcome to my Server!")
    response.end()
}).listen(8888)
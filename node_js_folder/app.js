const http = require('http');
const server = http.createServer((req,res)=>{
     console.log(req);
     console.log('Prerna Raj');
}); 

server.listen(4000);
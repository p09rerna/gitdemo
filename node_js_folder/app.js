const http= require('http');
const server = http.createServer((req,res)=>{
const url=req.url;
 if(url==='/home'){
     res.write('<html>');
     res.write('<head><title>Home Page</title></head>');
     res.write('<body><h1>Welcome home</h1></body>');
     res.write('</html>');
     return res.end();
 }
if(url==='/about'){
     res.write('<html>');
     res.write('<head><title>About Page</title></head>');
     res.write('<body><h1>Welcome to About us page</h1></body>');
     res.write('</html>');
     return res.end();
}
if(url==='/node'){
     res.write('<html>');
     res.write('<head><title>Node Project Page</title></head>');
     res.write('<body><h1>Welcome to my Node.js Project</h1></body>');
     res.write('</html>');
     return res.end();
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js Server</h1></body>');
res.write('</html>');
res.end();
});  

server.listen(4000);
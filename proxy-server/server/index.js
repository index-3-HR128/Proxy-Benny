const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'..','client','dist')))

app.all('/photogallery', createProxyMiddleware({ target: 'http://localhost:3004'}));
app.all('/reviews', createProxyMiddleware({ target: 'http://localhost:3002'}));
app.all('/calendar', createProxyMiddleware({ target: 'http://localhost:3001'}));
app.all('/carousel', createProxyMiddleware({ target: 'http://localhost:3003'}));


// app.all('/', createProxyMiddleware({ target: 'http://localhost:3003'}));
// app.all('/', createProxyMiddleware({ target: 'http://localhost:3004'}));
// app.all('/', createProxyMiddleware({ target: 'http://localhost:3002'}));
// app.all('/', createProxyMiddleware({ target: 'http://localhost:3001'}));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
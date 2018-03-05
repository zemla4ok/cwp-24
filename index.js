const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('client connected');


  socket.on('sendInfo', (data) => {
    
  });
});

http.listen(3000, 'localhost', () => {
  console.log('Server is running');
})
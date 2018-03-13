const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Worker = require('./worker');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const worker = new Worker();
io.on('connection', (socket) => {
  let data = worker.getData();
  const keys = Object.keys(data);
  let interval = -1;


  socket.on('send', data => {
    console.log(data);
    worker.setTimer(data.sec * 1000);
    clearInterval(interval);
    interval = setInterval(() => {
      socket.emit('btc', worker.getData()[data.id])
    }, data.sec * 1000);
  })

  
})



http.listen(3000, 'localhost', () => {
  console.log('Server is running');
})
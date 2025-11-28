require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('کاربر وصل شد:', socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`سرور روی پورت ${PORT} روشن شد`);
});

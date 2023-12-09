/**
 * fakeUDPServer.js
 * Запуск:  node fakeUDPServer <port>
 */

const util = require('util');
const dgram = require('dgram');

let port;
try {
  port = process.argv[2];
  if (!port) throw { message: 'Expected port as first arg!' };
  if (isNaN(port)) throw { message: 'Expected port number!' };
  port = Number(port);
} catch (e) {
  console.log('Fake UDP server. ' + e.message);
  process.exit();
}

const socket = dgram.createSocket('udp4');
socket.on('listening', () => {
  address = socket.address();
  console.log(`UDP server listening ${address.address}:${address.port}`, 1);
});
socket.bind(port);

socket.on('message', (msg, rinfo) => {
  console.log(`UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

  const reply = msg == 'PING' ? 'PONG' : 'Unknown keyword!';
  socket.send(reply, 0, reply.length, rinfo.port, rinfo.address, err => {
    if (err) {
      console.log('Send ERROR: ' + util.inspect(err));
    } else {
      console.log('Send ' + reply, 1);
    }
  });
});

socket.on('error', err => {
  const mes = e.code == 'EADDRINUSE' ? 'EADDRINUSE: Address in use' : +err.code;
  console.log(`UDP server port: ${port} error! ${mes}`);
});

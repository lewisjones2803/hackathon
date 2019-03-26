import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

function subscribeAccelerometer(cb) {
  socket.on('ACCELEROMETER_CHANGE', cb);
}

function subscribeButtonPress(cb) {
  socket.on('BUTTON_PRESS', cb);
}

function subscribeMagnetometer(cb) {
  socket.on('MAGNETOMETER_CHANGE', cb);
}

export {
  subscribeAccelerometer,
  subscribeButtonPress,
  subscribeMagnetometer
};

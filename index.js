const express = require('express');
//Bring the socket.io module
const app = express();
const PORT = 5051;
//Create a httpServer

const httpServer = app.listen(PORT);
const { Server} = require('socket.io');

//Create a new instance of Socket.io Server
const ioServer = new Server(httpServer);


const staticDisplay = express.static('public-display');


app.use('/display', staticDisplay);
app.use(express.json());

const { SerialPort, ReadlineParser } = require('serialport');


let action = 0;




ioServer.on('connection', (socket) => {
    console.log(`Connected`, socket.id);


   
});

//Opens up the port
//MAC: /dev/cu.usbmodem1412401
//WIN: COM4
const protocolConfiguration = {   
    path: 'COM4', 
    baudRate: 9600
}

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());

parser.on('data', (data) => { 

    let dataArray = data.split(" ");  
    dataArray.splice(-1);
    console.log(dataArray);

    //Convert the array into numbers

    let dataArrayInt = dataArray.map(i =>
        parseInt(i)
    );
    // Parse the Strings to Integer (Cambio de color y tamaño)
    action = dataArrayInt[0];
    console.log(dataArrayInt, action);

    if(action == 1){
        //send make action
        ioServer.emit('action1');
    }

    if(action == 2){
        //send make action
        ioServer.emit('action2');
    }

    if(action == 3){
        //send make action
        ioServer.emit('action3');
    }

    if(action == 4){
        //send make action
        ioServer.emit('action4');
    }

});



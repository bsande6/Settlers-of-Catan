var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var game = require('./game.js');

var app = express();

var server = http.Server(app);

var io = socketIO(server);

app.set('port', 5000);
app.get('/',function(req, res) {
  res.sendFile(__dirname + '/client/webpage.html');
});
//app.use('/client', express.static(__dirname + '/client'));\
app.use(express.static('client'));

server.listen(5000);

//var p_num = 0;
var socketList = [];
var idArray = [];
io.sockets.on('connection', function(socket) {
  console.log('client connected');

  console.log(socket.id);
  if(socketList.length < 4) {
    socketList.push(socket);

    console.log('player');
    io.sockets.emit('newPlayer', {length: socketList.length});
  }
//  socket.emit('addPlayer', {id:socket.id});
  /*socket.on("join room", roomID => {
        if (users[roomID]) {
            const length = users[roomID].length;
            if (length === 4) {
                socket.emit("room full");
                return;
            }
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);
*/
      //  socket.emit("all users", usersInThisRoom);
    //});

//    socket.on("sending signal", payload => {
  //      io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
  //  });

    //socket.on("returning signal", payload => {
      //  io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    //});

  //  socket.on('disconnect', () => {
      //  const roomID = socketToRoom[socket.id];
  //      let room = users[roomID];
  //      if (room) {
  //          room = room.filter(id => id !== socket.id);
    //        users[roomID] = room;
  //      }
//    });

  socket.broadcast.emit('add-users', {
    users: [socket.id]
  });

  idArray.push(socket.id);
  console.log(socketList.length);
  if (socketList.length === 1) {
    io.sockets.emit('isPlayerOne');
  }
  else if(socketList.length == 2) {
    socket.emit('isPlayerTwo');
  }
  else if (socketList.length == 3) {
    socket.emit('isPlayerThree');
  }
  else if (socketList.length == 4) {
    socket.emit('isPlayerFour');
  }
  //socket.emit('initCam', {id: socket.id, });
  socket.on('newGame', function() {
    console.log('new');
    shuffleArrays();
    io.sockets.emit('removeNewGame');
    io.sockets.emit('newBoard', {port_array: port_array, hex_array: hex_array, num_array: num_array});
  });
/*  socket.on('disconnect', function() {
    console.log('disconnect');
    socketList.splice(socketList.indexOf(socket.id), 1);
    io.sockets.emit('remove-user', socket.id);
  }); */
  socket.on('make-offer', function (data) {
    console.log('makeoffer');
    console.log(data.to);
    console.log(socket.id);
    socket.to(data.to).emit('offer-made', {
      offer: data.offer,
      socket: socket.id
    });
  });
  socket.on('make-answer', function (data) {
    console.log('made');
    console.log(data.to);
    socket.to(data.to).emit('answer-made', {
      socket: socket.id,
      answer: data.answer
    });
  });
  socket.on('Begin', function() {
    console.log('beg');
      firstTurn = Math.floor(Math.random()*socketList.length);
      turn = firstTurn;
    io.sockets.emit('gameStart', {firstTurn: firstTurn});
  });

  socket.on('nextRoll', function() {
    console.log('next');
    var index = socketList.indexOf(socket);
    io.sockets.emit('gameStart', {firstTurn});
  });

  socket.on('setup', function(data) {
    console.log('set');
    console.log(data.firstTurn);
    io.sockets.emit('settlementSetup', {firstTurn: data.firstTurn});
  });

  socket.on('updateSpaces', function(data) {
    openSpace[data.index] = false;
  });

  socket.on('buildSettle', function(data) {
    io.sockets.emit('buildSettlement', {data: player, data: node} )
  });
  socket.on('displayRoll', function(data) {
    console.log(data.roll);
    io.sockets.emit('Roll', {roll: data.roll});
  });
  socket.on('bottom', function(data) {
    console.log('bot');
    io.sockets.emit('bottomSpace', {turn: turn, id: data.id});
  });

  socket.on('space', function(data) {
    io.sockets.emit('rightSpace', {turn: turn, id: data.id});
  });

  socket.on('roads', function(data) {
    socketList[turn].emit('rightRoads', {id: data.id, turn: data.turn, topKey: data.topKey,
                                        leftKey: data.leftKey, rightKey: data.rightKey});
  });

  socket.on('bRoads', function(data) {
    console.log('road');
    socketList[turn].emit('botRoads', {id: data.id, turn: data.turn, leftKey: data.leftKey,
                                       rightKey: data.rightKey, botKey: data.botKey});
  });
  socket.on('place', function() {
    console.log(socketList.length);
    console.log('length');
    console.log(turn);
    console.log(count)
    if (count == socketList.length || count == 0) {
      turn = turn;
    }
    else if (count < socketList.length) {
      console.log('b');
      if (turn < socketList.length - 1) {
        console.log('a');
        turn++;
      }
      else {
        turn = 0;
      }
    }
    else if (count > socketList.length) {
      console.log('greater');
      console.log(turn);
      if (turn > 0) {
        console.log('turn');
        turn = turn - 1;
      }
      else {
        turn = socketList.length - 1;
      }
    }
    console.log(turn);
    if (count == socketList.length*2) {
      turn = 0;
      console.log(turn);
      console.log(firstTurn);
      console.log('c');
      socket.emit('main', {turn: turn, firstTurn: firstTurn});
    }
    else {
      socketList[turn].emit('placeSettlement', {openSpace: openSpace});
    }
    count++;
  });

  socket.on('botRoad', function(data) {
    io.sockets.emit('bottomRoad', {id: data.id, turn: data.turn,
                                  botKey: data.botKey});
  });
  socket.on('leftRoad', function(data) {
    io.sockets.emit('leftBotRoad', {id: data.id, turn: data.turn,leftKey: data.leftKey});
  });
  socket.on('rightRoad', function(data) {
    io.sockets.emit('rightBotRoad', {id: data.id, turn: data.turn, rightKey: data.rightKey});
  });
  socket.on('topRoad', function(data) {
    io.sockets.emit('tRoad', {id: data.id, turn: data.turn,
                              topKey: data.topKey});
  });
  socket.on('leftRoadRightSpace', function(data) {
    io.sockets.emit('leftRoad', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey,
                              botKey: data.botKey});
  });
  socket.on('rightRoadRightSpace', function(data) {
    io.sockets.emit('rightRoad', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey,
                              botKey: data.botKey});
  });
  socket.on('nextTurn', function(){
    console.log('main');
    turn++;
    console.log((turn + firstTurn) % socketList.length);
    socketList[(turn + firstTurn) % socketList.length].emit('main', {turn: turn, firstTurn: firstTurn})
  });
  socket.on('robber', function(data) {
    io.sockets.emit('rob', {id: data.id, robber: data.robber});
  });
  socket.on('discard', function(data) {
    socketList[data.player].emit('discardResources', {cards: data.card, player: data.player});
  });

  socket.on('removeDie', function() {
    io.sockets.emit('removeRoll');
  });
  socket.on('buildCity', function(data) {
    io.sockets.emit('city', {player: data.player, settle: data.settle });
  });
  socket.on('distribute', function(data) {
    io.sockets.emit('distributeResources', {roll: data.roll});
  });
  socket.on('dev', function(data) {
    var card = dev_cards.pop();
    io.sockets.emit('returnDev', {card: card, turn: data.turn});
    socket.emit('addCard', {card: card, turn: data.turn});
  });


  socket.on('trade', function(data) {
    socketList[data.player].emit('playerTrade', {current: data.current, player: data.player , wood: data.wood, brick: data.brick,
        sheep: data.sheep, wheat: data.wheat, ore: data.ore});
  });
  socket.on('tradeResource', function(data) {
    io.sockets.emit('tradeResources', {player: data.player, wood: data.wood, brick: data.brick,
        sheep: data.sheep, wheat: data.wheat, ore: data.ore});
  });
  socket.on('updateResources', function(data) {
    io.sockets.emit('updateResource', {player: data.player, resource: data.resource, val: data.val});
  });
});
//  agx.initGame(io, socket);




/*
io.sockets.on('newBoard', function(data){
  console.log('a');
  console.log(socketList.length);
  for (var i in socketList) {
    console.log('c');
    socket.emit('new', {
      reason: data
    });
  }
});


var colorArray = ['blue', 'red', 'yellow', 'green'];
/*io.on('connection', function(socket) {
  console.log('new player');
  player = Player(colorArray[p_num]);
  playerList.push(player);
  p_num++;
  console.log(playerList.length);
})*/
var firstTurn = 0;
turn = firstTurn;
console.log(firstTurn);
var count = 0;
var hex_array = ['Wood', 'Wood', 'Wood', 'Wood', 'Wheat', 'Wheat', 'Wheat',
                    'Wheat', 'Sheep','Sheep','Sheep','Sheep', 'Rock', 'Rock',
                    'Rock', 'Brick', 'Brick', 'Brick','Desert'];
var num_array = ['2', '3','3','4','4','5','5','6','6','8','8','9','9','10','10','11','11','12'];
var port_array = ['Sheep Port', 'Wood Port', 'Wheat Port', 'Rock Port', 'Brick Port', "3-1", '3-1', '3-1', '3-1'];
var dev_cards = ['Knight', 'Knight', 'Knight', 'Knight', 'Knight', 'Knight', 'Knight',
                  'Knight','Knight', 'Knight', 'Knight', 'Knight' ,'Knight',
                  'Knight', 'Victory Point','Victory Point', 'Victory Point',
                  'Victory Point','Victory Point', 'Monopoly', 'Monopoly',
                  'Road Building', 'Road Building', 'Year of Plenty', 'Year of Plenty'];
var openSpace = [];
const VERTICES = 53
for (var i =0; i<VERTICES; i++) {
  openSpace[i] = true;
}
//var roll = 0;
Array.prototype.hex_tile_shuffle = function() {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

shuffleArrays = function() {
  port_array.hex_tile_shuffle();
  hex_array.hex_tile_shuffle();
  dev_cards.hex_tile_shuffle();
  num_array.hex_tile_shuffle();

}

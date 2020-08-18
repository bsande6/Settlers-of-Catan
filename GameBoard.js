class GameBoard {
  constructor(catan_board) {
    this.board = catan_board;
    this.vertices;
    this.setup = true;
    this.gameBoard;
    //this.socket = io();
    this.isPlayerOne = false;
    this.isPlayerTwo = false;
    this.isPlayerThree = false;
    this.isPlayerFour = false;
    this.resourceBar;
    //this.socket.on('isPlayerOne', function() {
    //  this.isPlayerOne = true;
    //});

  }
  setIsPlayerOne() {
    this.isPlayerOne = true;
  }

  blankBoard() {
    this.resourceBar = document.createElement('div');
    this.resourceBar.classList.add('resource_bar')
    this.board.appendChild(this.resourceBar);


    for (var i = 0; i < 37; i++) {
      if (i < 1) {
        var hex = document.createElement('div');
        hex.classList.add('row1','hex', 'ocean');
        //hex.classList.add('ocean');
        console.log(hex);

      }
      else if (i < 4) {
        var hex = document.createElement('div');
        hex.classList.add('ocean', 'hex');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i < 5) {
          var hex = document.createElement('div');
          var row = document.createElement('div');
          row.classList.add('hex-row');
          hex.classList.add('row2', 'hex','ocean');
          this.board.appendChild(row);
          this.board.appendChild(hex);
          document.body.appendChild(this.board);
      }
      else if (i < 8) {
        var hex = document.createElement('div');
        //if (start == 1) {
          hex.classList.add('hex');
          this.board.appendChild(hex);
          document.body.appendChild(this.board);

      }
      else if (i < 9) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i < 10) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean', 'hex-row', 'row3');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i < 14) {
        var hex = document.createElement('div');
        hex.classList.add('hex');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i < 15) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i< 16) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean', 'hex-row', 'row4');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i< 21) {
        var hex = document.createElement('div');
        hex.classList.add('hex');
        this.board.appendChild(hex);
        document.body.appendChild(this.board);
      }
      else if (i < 22) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
      }
      else if (i < 23) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean', 'hex-row', 'row3');
      }
      else if (i < 27) {
        var hex = document.createElement('div');
        hex.classList.add('hex');
      }
      else if (i < 28) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
      }
      else if (i < 29) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean', 'hex-row', 'row2');
      }
      else if (i<32) {
        var hex = document.createElement('div');
        hex.classList.add('hex');
      }
      else if (i<33) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
      }
      else if (i < 34) {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean', 'hex-row', 'row1');
      }
      else {
        var hex = document.createElement('div');
        hex.classList.add('hex','ocean');
      }
      this.board.appendChild(hex);
      document.body.appendChild(this.board);
    }
  }

  newBoard(data) {
    if (this.isPlayerOne) {
      console.log('p1');
      this.board.style.borderColor = playerList[0].color;
    }
    else if (this.isPlayerTwo) {
        this.board.style.borderColor = playerList[1].color;
    }
    else if (this.isPlayerThree) {
      this.board.style.borderColor = playerList[2].color;
    }
    else if (this.isPlayerFour) {
      this.board.style.borderColor = playerList[3].color;
    }
    var portCount = 0;
    port_number = 0;
    var count = 0;
    gameBoard = new BoardGraph(54);
    this.vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH',
                    'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR',
                    'SS', 'TT', 'UU', 'VV', 'WW', 'XX','YY','ZZ','AAA', 'BBB'];

    for (var i = 0; i<this.vertices.length; i++) {
      gameBoard.addVertex(this.vertices[i]);
    }
    gameBoard.addEdge('A', 'B');
    gameBoard.addEdge('A', 'I');
    gameBoard.addEdge('B', 'C');
    gameBoard.addEdge('C', 'D');
    gameBoard.addEdge('C', 'K');
    gameBoard.addEdge('D', 'E');
    gameBoard.addEdge('E', 'F');
    gameBoard.addEdge('E', 'M');
    gameBoard.addEdge('F', 'G');
    gameBoard.addEdge('G', 'O');
    gameBoard.addEdge('H', 'I');
    gameBoard.addEdge('H', 'R');
    gameBoard.addEdge('I', 'J');
    gameBoard.addEdge('J', 'K');
    gameBoard.addEdge('J', 'T');
    gameBoard.addEdge('K', 'L');
    gameBoard.addEdge('L', 'M');
    gameBoard.addEdge('L', 'V');
    gameBoard.addEdge('M', 'N');
    gameBoard.addEdge('N', 'X')
    gameBoard.addEdge('N', 'O');
    gameBoard.addEdge('O', 'P');
    gameBoard.addEdge('P', 'Z');
    gameBoard.addEdge('Q', 'R');
    gameBoard.addEdge('Q', 'BB');
    gameBoard.addEdge('R', 'S');
    gameBoard.addEdge('S', 'T');
    gameBoard.addEdge('S', 'DD');
    gameBoard.addEdge('T', 'U');
    gameBoard.addEdge('U', 'V');
    gameBoard.addEdge('U', 'FF');
    gameBoard.addEdge('V', 'W');
    gameBoard.addEdge('W', 'X');
    gameBoard.addEdge('W', 'HH');
    gameBoard.addEdge('X', 'Y');
    gameBoard.addEdge('Y', 'JJ');
    gameBoard.addEdge('Y', 'Z');
    gameBoard.addEdge('Z', 'AA');
    gameBoard.addEdge('AA', 'LL');
    gameBoard.addEdge('BB', 'CC');
    gameBoard.addEdge('CC', 'DD');
    gameBoard.addEdge('CC', 'MM');
    gameBoard.addEdge('DD', 'EE');
    gameBoard.addEdge('EE', 'OO');
    gameBoard.addEdge('EE', 'FF');
    gameBoard.addEdge('FF', 'GG');
    gameBoard.addEdge('GG', 'HH');
    gameBoard.addEdge('GG', 'QQ');
    gameBoard.addEdge('HH', 'II');
    gameBoard.addEdge('II', 'JJ');
    gameBoard.addEdge('II', 'SS')
    gameBoard.addEdge('JJ', 'KK');
    gameBoard.addEdge('KK', 'UU');
    gameBoard.addEdge('KK', 'LL');
    gameBoard.addEdge('MM', 'NN');
    gameBoard.addEdge('NN', 'VV');
    gameBoard.addEdge('NN', 'OO');
    gameBoard.addEdge('OO', 'PP');
    gameBoard.addEdge('PP', 'QQ');
    gameBoard.addEdge('PP', 'XX');
    gameBoard.addEdge('RR', 'ZZ');
    gameBoard.addEdge('QQ', 'RR');
    gameBoard.addEdge('RR', 'SS');
    gameBoard.addEdge('TT', 'UU');
    gameBoard.addEdge('SS', 'TT');
    gameBoard.addEdge('TT', 'BBB')
    gameBoard.addEdge('VV', 'WW');
    gameBoard.addEdge('WW', 'XX');
    gameBoard.addEdge('XX', 'YY');
    gameBoard.addEdge('YY', 'ZZ');
    gameBoard.addEdge('ZZ', 'AAA');
    gameBoard.addEdge('AAA', 'BBB');



    //for (var x = 0; x < vertices.length; x++) {
  //    var get_keys= board.AdjList.get(vertices[x]);
  //    roadMap.set(vertices[x], get_keys);
  //  }
    /*roadMap.set('A', ['R1','R6']);
    roadMap.set('B', ['R1', 'R2']);
    roadMap.set('C', ['R2', 'R3', 'R7']);
    roadMap.set('D', ['R7', 'R8']);
    roadMap.set('E', ['R8', 'R12']);


    .set('F', ['R12', 'R13']);
    roadMap.set('G', ['R13', 'R14']);
    roadMap.set('H', ['R'])
    roadMap.set('I')
    roadMap.set('J')
    roadMap.set('K')
    roadMap.set('L')
    roadMap.set()
    roadMap.set()
    roadMap.set()
    */



    //div.innerHTML = '';
    portsList = data.port_array;
    tiles = document.getElementsByClassName('hex');
    for (i = 0; i < 37; i++) {
        if (i == 0 || i == 2 || i == 8 || i == 9 || i == 21 ||
            i == 22 || i == 32 || i == 33 || i == 35) {
            this.displayPort(data.port_array[port_number], tiles[i], portCount);
            portCount ++;
            tiles[i].value = 0;
          }
        else  if ((i > 4 && i < 8) || (i>9 && i<14) || (i>15 && i<21) ||
                  (i>22 && i <27) || (i>28 && i <32)) {
          this.getResource(data.hex_array[count], tiles[i], data.num_array[num_count]);


          count++;
        }
        if (tiles[i].classList.contains('desert')) {
          robber = document.createElement('div');
          robber.classList.add('robber');
          tiles[i].appendChild(robber);
          robberLocation = i;
          console.log(robberLocation);
        }
        //tiles[i].id = i;
    }
    if (this.isPlayerOne === true) {
      console.log('beg');
      socket.emit('Begin');
    }

    this.displayResources();
//  for (var j = 0; j<37; j++) {
  //  if tiles[j].classList.contains(robber) {
//      robber = j;
//    }


      //  var hex = document.createElement('div');

        //hex.classList.add('row1', 'ocean-hex');
        //div.appendChild(hex);
        //document.body.appendChild(div);

  }

  displayResources() {

    if (this.isPlayerOne) {
        console.log(playerList[0].resources);
        this.resourceBar.innerHTML = 'Wood: ' + playerList[0].resources.wood +
        ' Brick: ' + playerList[0].resources.brick + '  Sheep: ' + playerList[0].resources.sheep +
        '  Wheat: ' + playerList[0].resources.wheat + '  Ore: ' + playerList[0].resources.ore;
    }
    else if (this.isPlayerTwo) {
        this.resourceBar.innerHTML = playerList[1].resources;
        this.resourceBar.innerHTML = 'Wood: ' + playerList[1].resources.wood +
        ' Brick: ' + playerList[1].resources.brick + '  Sheep: ' + playerList[1].resources.sheep +
        '  Wheat: ' + playerList[1].resources.wheat + '  Ore: ' + playerList[1].resources.ore;
    }
    else if (this.isPlayerThree) {
        this.resourceBar.innerHTML = playerList[2].resources;
        this.resourceBar.innerHTML = 'Wood: ' + playerList[2].resources.wood +
        ' Brick: ' + playerList[2].resources.brick + '  Sheep: ' + playerList[2].resources.sheep +
        '  Wheat: ' + playerList[2].resources.wheat + '  Ore: ' + playerList[2].resources.ore;
    }
    else if (this.isPlayerFour) {
        this.resourceBar.innerHTML = playerList[3].resources;
        this.resourceBar.innerHTML = 'Wood: ' + playerList[3].resources.wood +
        ' Brick: ' + playerList[3].resources.brick + '  Sheep: ' + playerList[3].resources.sheep +
        '  Wheat: ' + playerList[3].resources.wheat + '  Ore: ' + playerList[3].resources.ore;
    }
  }
  displayPort(port, hex, portCount) {
      var element = document.createElement('div');
      element.classList.add("port_format");
      element.style.fontSize = '20px';
      element.style.fontcolor = 'white';
      port = port.fontcolor("white");
      element.innerHTML= port;
      hex.appendChild(element);
      var portLocation = document.createElement('div');
      portLocation.classList.add('port_display');
      port_number++;
      if (portCount == 0) {
        portLocation.classList.add('bottom_right_edge');
      }
      else if (portCount == 1 || portCount == 2) {
        portLocation.classList.add('bottom_left_edge');
      }
      else if (portCount == 4) {
        portLocation.classList.add('left_edge');
      }
      else if (portCount == 3 || portCount == 5) {
        portLocation.classList.add('right_edge');
      }
      else if  (portCount == 6 || portCount == 8) {
        portLocation.classList.add('top_left_edge');
      }
      else {
        portLocation.classList.add('top_right_edge');
      }
      hex.appendChild(portLocation);
  }

  getResource(resource, hex, number) {
    if (resource == 'Wheat') {
      //var hex = document.createElement('div');
      hex.classList.add('wheat');
      var value = document.createElement('div');
      value.classList.add('hex_number');
      value.style.fontSize = "25px";
      value.innerHTML = number;
      hex.appendChild(value);
      hex.value = number;
      hex.resource = 'wheat';
      num_count++;

  //    count++;
    //  document.body.appendChild(hex);
    }
    else if (resource == 'Wood') {
    //  var hex = document.createElement('div');
      hex.classList.add('wood');
      var value = document.createElement('div');
      value.classList.add('hex_number');
      value.style.fontSize = "25px";
      value.innerHTML = number;
      hex.appendChild(value);
      hex.value = number;
      hex.resource = 'wood';
      num_count++;
    //  count++;
      //div.appendChild(hex);
  //    document.body.appendChild(hex);
    }
    else if (resource == 'Sheep') {
  //    var hex = document.createElement('div');
      hex.classList.add('sheep');
  //    var value = document.createTextMode('number');
      var value = document.createElement('div');
      value.classList.add('hex_number');
      value.style.fontSize = "25px";
      value.innerHTML = number;
      hex.appendChild(value);
      hex.value = number;
      hex.resource = 'sheep';
      num_count++;
      //count++;
    //  hex.appendChild(value);
    //  div.appendChild(hex);
  //    document.body.appendChild(hex);
    }
    else if (resource == 'Brick') {
  //    var hex = document.createElement('div');
      hex.classList.add('brick');
      var value = document.createElement('div');
      value.classList.add('hex_number');
      value.style.fontSize = "25px";
      value.innerHTML = number;
      hex.appendChild(value);
      hex.value = number;
      hex.resource = 'brick';
      num_count++;

  //  div.appendChild(hex);
  //  document.body.appendChild(hex);
    }
    else if (resource == 'Rock') {
    //  var hex = document.createElement('div');
      hex.classList.add('rock');
      var value = document.createElement('div');
      value.classList.add('hex_number');
      value.style.fontSize = "25px";
      value.innerHTML = number;
      hex.appendChild(value);
      hex.value = number;
      hex.resource = 'ore';
      num_count++;
    //  count++;
    //  div.appendChild(hex);
    //  document.body.appendChild(hex);
    }
    else {
    //  var hex = document.createElement('div');
      hex.classList.add('desert');

    //  count++;
    //  div.appendChild(hex);
      //document.body.appendChild(hex)
    }
  //  return hex;
  }
  /*socket.on('newBoard', function(data) {
    console.log('b');
    newBoard(data);
  });*/

gameStart(data) {
    switch (data.firstTurn) {
      case 0:
        alert("P1 goes first");
        break;
      case 1:
        alert("P2 goes first");
        break;
      case 2:
        alert("P3 goes first");
        break;
      case 3:
        alert("P4 goes first");
        break;
    }
    if (this.isPlayerOne === true) {
      console.log('beg');
      socket.emit('setup', {firstTurn: data.firstTurn});
    }
  }

  space(data) {
    var index = data.id;
    var currentPlayer = playerList[data.turn];
    var node = document.getElementById(data.id);
    var settle = this.buildSettlement(currentPlayer, node);
    settle.style.marginLeft = '91px';
    settle.style.marginTop ='47px';
    node.appendChild(settle);
    var get_keys= gameBoard.AdjList.get(this.vertices[index]);
    currentPlayer.roadMap.addVertex(this.vertices[index]);
    socket.emit('updateSpaces', {index: index});

    if (board.setup == true) {
      var leftKey = -1;
      var rightKey = -1;
      var topKey = -1;
      for (var k of get_keys) {
        if (this.vertices.indexOf(k) == index -1) {
          leftKey = this.vertices.indexOf(k);
        }
        else if (this.vertices.indexOf(k) - index == 1) {
          rightKey = this.vertices.indexOf(k);
        }
        else {
          topKey = this.vertices.indexOf(k);
        }
        var adj = this.vertices.indexOf(k);
        socket.emit('updateSpaces', {index: adj});
        var removeSpace = document.getElementById(adj);
        if (removeSpace) {
          removeSpace.style.visibility = 'hidden';
          removeSpace.style.pointerEvents = 'none';
        }
      }
      node.parentNode.insertBefore(node.firstChild, node);
      node.style.visibility = 'hidden';
      node.style.pointerEvents = 'none';

    // only emits one time for to create button to build roads for proper player
      console.log(data.turn);
      console.log(this.isPlayerOne);
      console.log(this.isPlayerTwo);
      console.log(this.isPlayerThree);
      console.log(this.isPlayerFour);
      switch (data.turn) {
        case 0:
          if (this.isPlayerOne)
            socket.emit('roads', {turn: data.turn, id: data.id, topKey: topKey, leftKey: leftKey, rightKey: rightKey});
          break;
        case 1:
          if (this.isPlayerTwo)
            socket.emit('roads', {turn: data.turn, id: data.id, topKey: topKey, leftKey: leftKey, rightKey: rightKey});
          break;
        case 2:
          if (this.isPlayerThree)
            socket.emit('roads', {turn: data.turn, id: data.id, topKey: topKey, leftKey: leftKey, rightKey: rightKey});
          break;
        case 3:
          if (this.isPlayerFour) {
            socket.emit('roads', {turn: data.turn, id: data.id, topKey: topKey, leftKey: leftKey, rightKey: rightKey});
          }
          break;
      }
    }
    //settle.visible = 'visible';

  }
  rightRoads(data) {
    console.log('roads');
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var topRoad = document.createElement('button');
    topRoad.innerHTML = 'Road';
    topRoad.style.marginTop = '-49px';
    topRoad.style.marginLeft = '-15px';
    var self = this;
    // checks the vertex built on to determine which roads are available to build
    if (data.id != 1 && data.id != 3 && data.id != 5) {
    topRoad.onclick = function() {
      socket.emit('topRoad', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey, topKey: data.topKey});
      console.log(self.vertices.length);
      for(var m = 0; m < self.vertices.length; m++) {
        if(document.getElementById(m)) {
          document.getElementById(m).style.visibility = 'hidden';
          document.getElementById(m).style.pointerEvents = 'none';
        }
      }

      if (leftRoad)
        leftRoad.remove();
      if (rightRoad)
        rightRoad.remove();
      if (topRoad)
        topRoad.remove();
      var end = document.createElement('button');
      end.innerHTML = 'End Turn';
      event.stopPropagation();
      end.onclick = function() {
                //socket.emit('updateSpaces');
                socket.emit('place');
                this.remove();
            }
            document.body.appendChild(end);
      }
      space.appendChild(topRoad);
      topRoad.style.visibility = 'visible';
      topRoad.style.pointerEvents = 'auto';
      }
      if (data.id != 28 && data.id != 39 && data.id != 48) {
        var leftRoad = document.createElement('button');
        leftRoad.innerHTML = 'Road';
        leftRoad.style.marginLeft = '-46px';
        leftRoad.style.marginTop = '22px';
        leftRoad.onclick = function() {
          socket.emit('leftRoadRightSpace', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey, botKey: data.botKey});
          for(var m = 0; m < self.vertices.length; m++) {
            if(document.getElementById(m)) {
              document.getElementById(m).style.visibility = 'hidden';
              document.getElementById(m).style.pointerEvents = 'none';
            }
          }

          if (leftRoad)
            leftRoad.remove();
          if (rightRoad)
            rightRoad.remove();
          if (topRoad)
            topRoad.remove();
          var end = document.createElement('button');
          end.innerHTML = 'End Turn';
          event.stopPropagation();
          end.onclick = function() {
            socket.emit('place');
            this.remove();
          }
          document.body.appendChild(end);
        }
        space.appendChild(leftRoad);
        leftRoad.style.visibility = 'visible';
        leftRoad.style.pointerEvents = 'auto';
      }

      if (data.id != 38 && data.id != 47 && data.id != 54) {
        var rightRoad = document.createElement('button');
        rightRoad.innerHTML = 'Road';
        rightRoad.style.marginLeft = '14px';
        rightRoad.style.marginTop = '-20px';
        rightRoad.onclick = function() {
          socket.emit('rightRoadRightSpace', {id: data.id, turn: data.turn,
                                    leftKey: data.leftKey,
                                    rightKey: data.rightKey, botKey: data.botKey});
          for(var m = 0; m < self.vertices.length; m++) {
            if(document.getElementById(m)) {
              document.getElementById(m).style.visibility = 'hidden';
              document.getElementById(m).style.pointerEvents = 'none';
            }
          }

          if (leftRoad)
            leftRoad.remove();
          if (rightRoad)
            rightRoad.remove();
          if (topRoad)
            topRoad.remove();
          event.stopPropagation();
          var end = document.createElement('button');
          end.innerHTML = 'End Turn';
          end.onclick = function() {
            socket.emit('place');
            this.remove();
          }
          document.body.appendChild(end);
        }
        space.appendChild(rightRoad);
        rightRoad.style.visibility = 'visible';
        rightRoad.style.pointerEvents = 'auto';
      }
  }
  topRoad(data) {
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var road = this.buildRoad(currentPlayer, document.getElementById(data.id));
    road.style.marginLeft = '-8px';
    road.style.marginTop = '-30px';
    road.style.transform = "rotate(90deg)";
    road.style.visibility = 'visible';
    currentPlayer.roadMap.addVertex(this.vertices[data.topKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.topKey], this.vertices[data.id]);
  }
  leftRoadRightSpace(data) {
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var road = this.buildRoad(currentPlayer, document.getElementById(data.id));
    road.style.marginLeft = '-35px';
    road.style.marginTop = '16px';
    road.style.transform = "rotate(-30deg)";
    road.style.visibility = 'visible';
    currentPlayer.roadMap.addVertex(this.vertices[data.leftKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.leftKey], this.vertices[data.id]);
  }
  rightRoadRightSpace(data) {
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var road = this.buildRoad(currentPlayer, document.getElementById(data.id));
    road.style.marginLeft = '17px';
    road.style.marginTop = '24px';
    road.style.transform = "rotate(30deg)";
    road.style.visibility = 'visible';
    currentPlayer.roadMap.addVertex(this.vertices[data.rightKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.rightKey], this.vertices[data.id]);
  }


  bottomSpace(data) {
    var index = data.id;
    var currentPlayer = playerList[data.turn];
    var node = document.getElementById(data.id);
    var settle = this.buildSettlement(currentPlayer, node);
    settle.style.marginLeft = '40px';
    settle.style.marginTop ='70px';
    node.appendChild(settle);
    var get_keys= gameBoard.AdjList.get(this.vertices[index]);
    currentPlayer.roadMap.addVertex(this.vertices[index]);
    socket.emit('updateSpaces', {index: index});
    //node.style.visibility = 'hidden';
    //node.style.pointerEvents = 'none';
    if (this.setup == true) {
      var leftKey = -1;
      var rightKey = -1;
      var botKey = -1;
      for (var k of get_keys) {
        console.log(k);
        console.log(data.id);
        if (this.vertices.indexOf(k) == index-1) {
          leftKey = this.vertices.indexOf(k);
        }
        else if (this.vertices.indexOf(k) - index == 1) {
          rightKey = this.vertices.indexOf(k);
        }
        else {
          console.log('botKey');
          botKey = this.vertices.indexOf(k);
        }
        var adj = this.vertices.indexOf(k);
        socket.emit('updateSpaces', {index: adj});
        var removeSpace = document.getElementById(adj);
        if (removeSpace) {
          removeSpace.style.visibility = 'hidden';
          removeSpace.style.pointerEvents = 'none';
        }
      }
      node.parentNode.insertBefore(node.firstChild, node);
      node.style.visibility = 'hidden';
      node.style.pointerEvents = 'none';

    // only emits one time to create button to build roads for proper player
    console.log(data.turn);
    console.log(this.isPlayerOne);
    console.log(this.isPlayerTwo);
    console.log(this.isPlayerThree);
    console.log(this.isPlayerFour);
      switch (data.turn) {
        case 0:
          if (this.isPlayerOne) {
            console.log('br');
            socket.emit('bRoads', {turn: data.turn, id: data.id, botKey: botKey, leftKey: leftKey, rightKey: rightKey});
          }
          break;
        case 1:
          if (this.isPlayerTwo) {
            console.log('jr');
            socket.emit('bRoads', {turn: data.turn, id: data.id, botKey: botKey, leftKey: leftKey, rightKey: rightKey});
          }
          break;
        case 2:
          if (this.isPlayerThree) {
          console.log('dr');
            socket.emit('bRoads', {turn: data.turn, id: data.id, botKey: botKey, leftKey: leftKey, rightKey: rightKey});
          }
          break;
        case 3:
          if (this.isPlayerFour) {
            console.log('broad');
            socket.emit('bRoads', {turn: data.turn, id: data.id, botKey: botKey, leftKey: leftKey, rightKey: rightKey});
          }
          break;
      }
    }
  }

  leftRoad(data) {
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var road = this.buildRoad(currentPlayer, document.getElementById(data.id));
    road.style.marginLeft = '-35px';
    road.style.marginTop = '-5px';
    road.style.transform = "rotate(30deg)";
    road.style.visibility = 'visible';
    console.log(this.vertices[data.leftKey]);
    console.log(data.leftKey);
    currentPlayer.roadMap.addVertex(this.vertices[data.leftKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.leftKey], this.vertices[data.id]);
  }
  // builds downward road of a bottom vertex
   botRoad(data) {
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    currentPlayer.roadMap.addVertex(this.vertices[data.botKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.id], this.vertices[data.botKey]);
    var road = this.buildRoad(currentPlayer, space);
    road.style.visibility = 'visible';
    road.style.marginTop = '35px';
    road.style.marginLeft = '-8px';
    road.style.transform = "rotate(90deg)";
  }
  rightRoad(data) {
    console.log(data.turn);
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    console.log(data.rightKey);
    console.log(data.id);
    currentPlayer.roadMap.addVertex(this.vertices[data.rightKey]);
    currentPlayer.roadMap.addEdge(this.vertices[data.id], this.vertices[data.rightKey]);
    var road = this.buildRoad(currentPlayer, space);
    road.style.marginLeft = '25px';
    road.style.marginTop = '-1px';
    road.style.transform = 'rotate(-30deg)';
    road.style.visibility = 'visible';
  }

  // creates buttons to choose a road that correlate to the bottom vertex of a hex
  botRoads(data) {
    console.log(data.id);
    var currentPlayer = playerList[data.turn];
    var space = document.getElementById(data.id);
    var botRoad = document.createElement('button');
    botRoad.innerHTML = 'Road';
    botRoad.style.marginTop = '25px';
    botRoad.style.marginLeft = '-19px';
    var self = this;
    // checks the vertex built on to determine which roads are available to build
    if (data.id != 48 && data.id != 50 && data.id != 52) {
    botRoad.onclick = function() {
      socket.emit('botRoad', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey, botKey: data.botKey});
      console.log(self.vertices.length);
      for(var m = 0; m < self.vertices.length; m++) {
        if(document.getElementById(m)) {
          document.getElementById(m).style.visibility = 'hidden';
          document.getElementById(m).style.pointerEvents = 'none';
        }
      }

      if (leftRoad)
        leftRoad.remove();
      if (rightRoad)
        rightRoad.remove();
      if (botRoad)
        botRoad.remove();
      var end = document.createElement('button');
      end.innerHTML = 'End Turn';
      event.stopPropagation();
      end.onclick = function() {
                //socket.emit('updateSpaces');
                socket.emit('place');
                this.remove();
            }
            document.body.appendChild(end);
      }
      space.appendChild(botRoad);
      botRoad.style.visibility = 'visible';
      botRoad.style.pointerEvents = 'auto';
      }
      if (data.id != 0 && data.id != 7 && data.id != 16) {
        var leftRoad = document.createElement('button');
        leftRoad.innerHTML = 'Road';
        leftRoad.style.marginLeft = '-48px';
        leftRoad.style.marginTop = '-48px';
        leftRoad.onclick = function() {
          socket.emit('leftRoad', {id: data.id, turn: data.turn, leftKey: data.leftKey, rightKey: data.rightKey, botKey: data.botKey});
          for(var m = 0; m < self.vertices.length; m++) {
            if(document.getElementById(m)) {
              document.getElementById(m).style.visibility = 'hidden';
              document.getElementById(m).style.pointerEvents = 'none';
            }
          }

          if (leftRoad)
            leftRoad.remove();
          if (rightRoad)
            rightRoad.remove();
          if (botRoad)
            botRoad.remove();
          var end = document.createElement('button');
          end.innerHTML = 'End Turn';
          event.stopPropagation();
          end.onclick = function() {
            socket.emit('place');
            this.remove();
          }
          document.body.appendChild(end);
        }
        space.appendChild(leftRoad);
        leftRoad.style.visibility = 'visible';
        leftRoad.style.pointerEvents = 'auto';
      }

      if (data.id != 6 && data.id != 15 && data.id != 26) {
        var rightRoad = document.createElement('button');
        rightRoad.innerHTML = 'Road';
        rightRoad.style.marginLeft = '14px';
        rightRoad.style.marginTop = '-62px';
        rightRoad.onclick = function() {
          socket.emit('rightRoad', {id: data.id, turn: data.turn,
                                    leftKey: data.leftKey,
                                    rightKey: data.rightKey, botKey: data.botKey});
          for(var m = 0; m < self.vertices.length; m++) {
            if(document.getElementById(m)) {
              document.getElementById(m).style.visibility = 'hidden';
              document.getElementById(m).style.pointerEvents = 'none';
            }
          }

          if (leftRoad)
            leftRoad.remove();
          if (rightRoad)
            rightRoad.remove();
          if (botRoad)
            botRoad.remove();
          event.stopPropagation();
          var end = document.createElement('button');
          end.innerHTML = 'End Turn';
          end.onclick = function() {
            socket.emit('place');
            this.remove();
          }
          document.body.appendChild(end);
        }
        space.appendChild(rightRoad);
        rightRoad.style.visibility = 'visible';
        rightRoad.style.pointerEvents = 'auto';
      }
    }


  settlementSetup(data) {
      var availableSpaces = document.getElementsByClassName('hex');
      alert("place settlements");
      var count = 0;
      var vertCount = 0;
       //todo cases where top and bottom roads should not be available
       // loops through all tiles on the board and creates a node for each
       // vertex at the bottom and bottom right corners of the hexagon
        for (var i = 0; i<availableSpaces.length; i++) {

          // case where ocean blocks road on rightside of the node
          if (i == 3 || i == 8|| i == 14) {
          //  if (data.openSpace[vertCount] == true) {
            //  console.log(data.openSpace);
              var bottomSpace = document.createElement('div');
              bottomSpace.id = vertCount;
              vertCount++;
              buildList.push(bottomSpace);
              bottomSpace.classList.add('open_space_bottom_vertex');
              bottomSpace.style.visibility = 'hidden';
              bottomSpace.style.pointerEvents = 'none';

            // builds a settlement associated with currentPlayer
              var self = this;
              bottomSpace.onclick = function(event) {
                var currentPlayer = playerList[data.firstTurn];
                console.log(event.target.id);
                var id = event.target.id;
                console.log(data.firstTurn);
                console.log(self.isPlayerOne);
                console.log(self.isPlayerTwo);

                socket.emit('bottom', {currentPlayer: currentPlayer, id: id});

            }
              availableSpaces[i].appendChild(bottomSpace);
          //  }
          }
          else if (i == 15 || i == 22 || i == 28) {
            var space = document.createElement('div');
            space.id = vertCount;
            vertCount++;
            buildList.push(space);
            space.classList.add('open_space_right_vertex');
            space.style.visibility = 'hidden';
            space.style.pointerEvents = 'none';
            space.onclick = function() {
              var currentPlayer = playerList[data.firstTurn];
              console.log(event.target.id);
              var id = event.target.id;
              console.log(data.firstTurn);
              console.log(self.isPlayerOne);
              socket.emit('space', {currentPlayer: currentPlayer, id: id});

          }
          availableSpaces[i].appendChild(space);
        }
        else if ((i < 32) && (i!=27) && (i!=21)) {
          var bottomSpace = document.createElement('div');
          bottomSpace.id = vertCount;
          vertCount++;
          buildList.push(bottomSpace);
          bottomSpace.classList.add('open_space_bottom_vertex');
          bottomSpace.style.visibility = 'hidden';
          bottomSpace.style.pointerEvents = 'none';

        // builds a settlement associated with currentPlayer
          var self = this;
          bottomSpace.onclick = function(event) {
            var currentPlayer = playerList[data.firstTurn];
            console.log(event.target.id);
            var id = event.target.id;
            console.log(data.firstTurn);
            console.log(self.isPlayerOne);
            console.log(self.isPlayerTwo);
            socket.emit('bottom', {currentPlayer, id});

          }

          var space = document.createElement('div');
          space.id = vertCount;
          vertCount++;
          buildList.push(space);
          space.classList.add('open_space_right_vertex');
          space.style.visibility = 'hidden';
          space.style.pointerEvents = 'none';
          space.onclick = function() {
            var currentPlayer = playerList[data.firstTurn];
            console.log(event.target.id);
            var id = event.target.id;
            console.log(data.firstTurn);
            console.log(self.isPlayerOne);
            socket.emit('space', {currentPlayer: currentPlayer, id: id});
          }

          availableSpaces[i].appendChild(space);
          availableSpaces[i].appendChild(bottomSpace);
        }
      }
      if (this.isPlayerOne) {
        socket.emit('place');
      }
  }
  placeSettlement(data) {
    for (var i = 0; i < this.vertices.length; i++) {
      if (data.openSpace[i] == true) {
        document.getElementById(i).style.visibility ='visible';
        document.getElementById(i).style.pointerEvents = 'auto';
      }
    }
  }
  buildSettlement(player, node) {
    // create settleement for free during setup
    if (this.setup == true) {
      var settlement = document.createElement('div');
      settlement.classList.add('settlement');
      settlement.style.background = player.color;
      // marks this vertex as built on
      player.settlementsMap.push(this.vertices[buildList.indexOf(node)]);
      // adds settlement to list of this players settlements
      player.settlements.push(settlement);
      player.vicPoints++;

      // distributes starting resources
      if (player.settlements.length == 2) {
          // used to determine which resources the player needs to be given
          var currentHexes = player.hexList.length;
          addHex(player, node);
          for (var i = currentHexes; i < player.hexList.length; i++) {
            player.resources[player.hexList[i].resource]+=1;
            console.log(player.resources);
          }
          this.displayResources();
      }
      else {
        addHex(player, node);
      }
      return settlement;
    }
    else {
      if (player.resources.wood >= 1 && player.resources.sheep >= 1 &&
        player.resources.brick >= 1 && player.resources.wheat >=1) {
        var settlement = document.createElement('div');
        settlement.classList.add('settlement');
        settlement.style.background = player.color;
        node.appendChild(settlement);
        player.settlementsMap.push(vertices[buildList.indexOf(node)]);
        player.settlements.push(settlement);
        addHex(player, node);
        player.updateResources('wood', -1);
        player.updateResources('brick', -1);
        player.updateResources('sheep', -1);
        player.updateResources('wheat', -1);
        ///player.resources.wood -= 1;
        //player.resouces.wheat -= 1;
      //  player.resources.brick -= 1;
      //  player.resources.sheep -= 1;
        return settlement;
      }
      board.displayResources();
    }
    //var x = node.parentNode.nodeName;
  //  x.classList.add('settlement');
  ///  var settlement = document.createElement('div');
  //  settlement.classList.add('settlement');
  //  node.appendChild(settlement);
  }
  buildCity(player, settlement) {
    console.log(player);
    console.log(settlement);
    var player = playerList[player];
    if (player.resources.wheat >= 2 && player.resources.ore >= 3) {
      player.settlements[settlement].classList.add('city');
      player.updateResources('wheat', -2);
      player.updateResources('ore', -3);
      addHex(player, player.settlementsMap(player.settlements.indexOf(settle)));
      player.vicPoints++;
    }
    else {
      alert('Not enough resouces');
    }

    board.displayResources();

  }

  buildRoad(player, node) {
    if (this.setup == true) {
      var road = document.createElement('div');
      road.classList.add('road');
      road.style.background = player.color;
      node.appendChild(road);
      console.log('v');
      //player.playerRoads.push(vertices[index]);
      //console.log(player.playerRoads);
      return road;
    }
    else {
      if (player.resources.wood >= 1 && player.resources.brick >= 1) {
        var road = document.createElement('div');
        road.classList.add('road');
        road.style.background = player.color;
        node.appendChild(road);
        player.updateResources('wood', -1);
        player.updateResources('brick', -1);
        board.displayResources();
        return road;
      }
      else {
        alert('Not enough Resources');
      }
    }
  }
  robber(data) {
    for (var j = 0; j < tiles.length; j++) {
      if (tiles[j].classList.contains('robber')) {
        tiles[j].classList.remove(getElementsByClassName('robber'))
      }
    }
    console.log(data.id);
    console.log(data.val);
    //document.getElementById(data.id).appendChild(data.robber);
    tiles[data.id].appendChild(robber);
    robberLocation = data.id;
    console.log(robberLocation);

  }
  discardResources(data) {
    // TODO implement method to allow each player to drop cards
    var player = playerList[data.player];
    var discardVal = 0;
    if (data.cards % 2 == 0) {
      discardVal = data.cards/2;
    }
    else {
      discardVal = (data.cards - 1)/2;
    }
    var discardBox = document.createElement('div');
    discardBox.innerHTML = 'Discard ' + discardVal + ' resources';
    discardBox.classList.add('resourcesBox');
    this.board.appendChild(discardBox);
    var woodVal = 0;
    var brickVal = 0;
    var sheepVal = 0;
    var wheatVal = 0;
    var oreVal = 0;
    var confirm;
    var wheat = document.createElement('button');
    wheat.innerHTML = 'Wheat: ' + wheatVal;
    wheat.style.float = 'left';
    wheat.onclick = function() {
      if (wheatVal < player.resources.wheat)
        wheatVal++;

      wheat.innerHTML = 'Wheat: ' + wheatVal;
      if (woodVal + sheepVal + brickVal + wheatVal + oreVal == discardVal) {
        confirm = document.createElement('button');
        brick.disabled = 'true';
        wood.disabled = 'true';
        sheep.disabled = 'true';
        wheat.disabled = 'true';
        ore.disabled = 'true';
        confirm.innerHTML = "Discard These Resources"
        confirm.onclick = function() {
            player.updateResources('wood', woodVal*-1);
            player.updateResources('brick', brickVal*-1);
            player.updateResources('sheep', sheepVal*-1);
            player.updateResources('ore', oreVal*-1);
            player.updateResources('wheat', wheatVal*-1);
            this.displayResources();
            discardBox.remove();
            return;
        }
        discardBox.appendChild(confirm);
      }
    }
    var removeWheat = document.createElement('button');
    removeWheat.innerHTML = 'Remove Wheat';
    removeWheat.style.float = 'left';
    removeWheat.onclick = function() {
      if (wheatVal > 0) {
        wheatVal--;
      }
      wheat.innerHTML = 'Wheat: ' + wheatVal;
      if (confirm) {
        brick.disabled = false;
        wood.disabled = false;
        sheep.disabled = false;
        wheat.disabled = false;
        ore.disabled = false;
      }
    }

    var sheep = document.createElement('button');
    sheep.innerHTML = 'Sheep: ' + sheepVal;
    sheep.style.float = 'left';
    sheep.onclick = function() {
      sheepVal++;
      sheep.innerHTML = 'Sheep: ' + sheepVal;
      if (woodVal + sheepVal + brickVal + wheatVal + oreVal == discardVal) {
        confirm = document.createElement('button');
        confirm.innerHTML = "Yes"
        confirm.onclick = function() {
            player.removeResources('wheat', wheatVal);
            player.removeResources('wood', woodVal);
            player.removeResources('brick', brickVal);
            player.removeResources('sheep', sheepVal);
            player.removeResources('ore', oreVal);
            discardBox.remove();
            this.displayResources();
            return;
        }
        discardBox.appendChild(confirm);
      }
    }
    var removeSheep = document.createElement('button');
    removeSheep.innerHTML = 'Remove Sheep';
    removeSheep.onclick = function() {
      if (sheepVal > 0) {
        sheepVal--;
      }
      sheep.innerHTML = 'Sheep: ' + sheepVal;
    }
    var wood = document.createElement('button');
    wood.style.display = 'block';
    wood.style.float = 'left';
    wood.innerHTML = 'Wood: ' + woodVal;
    wood.onclick = function() {
      if (woodVal < player.resources.wood)
        woodVal++;

      wood.innerHTML = 'Wood: ' + woodVal;
      if (woodVal + sheepVal + brickVal + wheatVal + oreVal == discardVal) {
        confirm = document.createElement('button');
        confirm.innerHTML = "Discard These Resources";
        confirm.onclick = function() {
            player.removeResources('wheat', wheatVal);
            player.removeResources('wood', woodVal);
            player.removeResources('brick', brickVal);
            player.removeResources('sheep', sheepVal);
            player.removeResources('ore', oreVal);
            this.displayResources();
            discardBox.remove();
            return;
        }
        discardBox.appendChild(confirm);
      }
    }
    var removeWood = document.createElement('button');
    removeWood.innerHTML = 'Remove Wood';
    removeWood.style.display = 'block';
    removeWood.onclick = function() {
      if (woodVal > 0) {
        woodVal--;
      }
      wood.innerHTML = 'Wood: ' + woodVal;
      if (confirm) {
        confirm.remove();
        brick.disabled = false;
        wood.disabled = false;
        sheep.disabled = false;
        wheat.disabled = false;
        ore.disabled = false;
      }
    }
    var brick = document.createElement('button');
    brick.innerHTML = 'Brick: '+ brickVal;
    brick.onclick = function() {
      if (brickVal < player.resources.brick)
        brickVal++;

      brick.innerHTML = 'Brick: ' + brickVal;
      if (woodVal + sheepVal + brickVal + wheatVal + oreVal == discardVal) {
        confirm = document.createElement('button');
        brick.disabled = 'true';
        wood.disabled = 'true';
        sheep.disabled = 'true';
        wheat.disabled = 'true';
        ore.disabled = 'true';
        confirm.innerHTML = "Discard These Resources"
        confirm.onclick = function() {
            player.removeResources('wood', woodVal);
            player.removeResources('brick', brickVal);
            player.removeResources('sheep', sheepVal);
            player.removeResources('ore', oreVal);
            player.removeResources('wheat', wheatVal);
            this.displayResources();
            discardBox.remove();
            return;
        }
        discardBox.appendChild(confirm);
      }
    }
    var removeBrick = document.createElement('button');
    removeBrick.innerHTML = 'Remove Brick';
    removeBrick.style.display = 'block';
    removeBrick.onclick = function() {
      if (brickVal > 0) {
        brickVal--;
      }
      brick.innerHTML = 'Brick: ' + brickVal;
      if (confirm) {
        confirm.remove();
        brick.disabled = false;
        wood.disabled = false;
        sheep.disabled = false;
        wheat.disabled = false;
        ore.disabled = false;
      }
    }
    var ore = document.createElement('button');
    ore.innerHTML = 'Ore: ' + oreVal;
    ore.style.float = 'left';
    ore.onclick = function() {
      if (oreVal < player.resources.ore) {
        oreVal++;
      }
      ore.innerHTML = 'Ore: ' + oreVal;
      if (woodVal + sheepVal + brickVal + wheatVal + oreVal == discardVal) {
        var confirm = document.createElement('button');
        confirm.innerHTML = "Yes"
        confirm.onclick = function() {
            player.removeResources('wheat', wheatVal);
            player.removeResources('wood', woodVal);
            player.removeResources('brick', brickVal);
            player.removeResources('sheep', sheepVal);
            player.removeResources('ore', oreVal);
            this.displayResources();
            discardBox.remove();
            return;
        }
        discardBox.appendChild(confirm);
      }

    }
    var removeOre = document.createElement('button');
    removeOre.innerHTML = 'Remove Ore';
    removeOre.style.float == 'left';
    removeOre.onclick = function() {
      if (oreVal > 0) {
        oreVal--;
      }
      ore.innerHTML = 'Ore: ' + oreVal;
      if (confirm) {
        confirm.remove();
        brick.disabled = false;
        wood.disabled = false;
        sheep.disabled = false;
        wheat.disabled = false;
        ore.disabled = false;
      }
    }
    brick.style.float = 'left';
    discardBox.appendChild(wood);
    discardBox.appendChild(brick);
    discardBox.appendChild(sheep);
    discardBox.appendChild(wheat);
    discardBox.appendChild(ore);
    discardBox.appendChild(removeWood);
    discardBox.appendChild(removeBrick);
    discardBox.appendChild(removeSheep);
    discardBox.appendChild(removeWheat);
    discardBox.appendChild(removeOre);
  }

  playerTrade(currentPlayer, trade, build, devCard, bankTrade) {
    console.log(currentPlayer);
    // creates space to display the trade options
    var tradeBox = document.createElement('div');
    tradeBox.classList.add('resourcesBox');
    this.board.appendChild(tradeBox);
    var header = document.createElement('H1');
    header.innerHTML = 'Player Trade';
    header.style.marginTop = '-20px';
    tradeBox.appendChild(header);
    var giveWood = document.createElement('button');
    var giveWoodVal = 0;
    giveWood.style.float = 'left';
    giveWood.innerHTML = 'Give Wood: ' + giveWoodVal;
    giveWood.onclick = function() {
      if (giveWoodVal < currentPlayer.resources.wood)
        giveWoodVal ++
      giveWood.innerHTML = 'Give Wood: ' + giveWoodVal;
    }
    tradeBox.appendChild(giveWood);
    var giveBrick = document.createElement('button');
    var giveBrickVal = 0;
    giveBrick.innerHTML = 'Give Brick: ' + giveBrickVal;
    giveBrick.style.float = 'left';
    giveBrick.style.marginLeft = '10px';
    giveBrick.onclick = function() {
      if (giveBrickVal < currentPlayer.resources.brick) {
        giveBrickVal++;
      }
      giveBrick.innerHTML = 'Give Brick: ' + giveBrickVal;
    }
    tradeBox.appendChild(giveBrick);
    var giveSheep = document.createElement('button');
    var giveSheepVal = 0;
    giveSheep.innerHTML = 'Give Sheep: ' + giveSheepVal;
    giveSheep.style.float = 'left';
    giveSheep.style.marginLeft = '10px';
    giveSheep.onclick = function() {
      if (giveSheepVal < currentPlayer.resources.sheep) {
        giveSheepVal++;
      }
      giveSheep.innerHTML = 'Give Sheep: ' + giveSheepVal;
    }
    tradeBox.appendChild(giveSheep);
    var giveWheatVal = 0;
    var giveWheat = document.createElement('button');
    giveWheat.innerHTML = 'Give Wheat: ' + giveWheatVal;
    giveWheat.style.float = 'left';
    giveWheat.style.marginLeft = '10px';
    giveWheat.onclick = function() {
      if (giveWheatVal < currentPlayer.resources.wheat) {
        giveWheatVal++;
      }
      giveWheat.innerHTML = 'Give Wheat: ' + giveWheatVal;
    }
    tradeBox.appendChild(giveWheat);
    var giveOreVal = 0;
    var giveOre = document.createElement('button');
    giveOre.innerHTML = 'Give Ore: ' + giveOreVal;
    giveOre.style.float = 'left';
    giveOre.style.marginLeft = '10px';
    giveOre.onclick = function() {
      if (giveOreVal < currentPlayer.resources.ore) {
        giveOreVal++;
      }
      giveOre.innerHTML = 'Give Ore: ' + giveOreVal;
    }
    tradeBox.appendChild(giveOre);


    var receiveWheat = document.createElement('button');
    var receiveWheatVal = 0;
    var receiveOreVal = 0;
    var receiveWoodVal = 0;
    var receiveBrickVal = 0;
    var receiveSheepVal = 0;
    var receiveOre = document.createElement('button');
    var receiveWood = document.createElement('button');
    var receiveSheep = document.createElement('button');
    var receiveBrick = document.createElement('button');
    receiveWood.style.display = 'block';

    receiveBrick.style.display = 'inline';
    receiveSheep.style.display = 'inline';
    receiveWheat.style.display = 'inline';
    receiveOre.style.display = 'inline';
    receiveWood.style.clear = 'both';
    receiveBrick.style.float = 'left';
    receiveSheep.style.float = 'left'
    receiveWheat.style.float = 'left';
    receiveOre.style.float = 'left';
    receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
    receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
    receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
    receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
    receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    var clear = document.createElement('button');
    clear.style.marginLeft = '20px';
    clear.innerHTML = 'Clear';
    clear.style.float = 'left';
    clear.onclick = function() {
      giveWoodVal = 0;
      giveBrickVal = 0;
      giveSheepVal = 0;
      giveWheatVal = 0;
      giveOreVal = 0;
      receiveOreVal = 0;
      receiveWoodVal = 0;
      receiveBrickVal = 0;
      receiveSheepVal = 0;
      receiveWheatVal = 0;
      giveWood.innerHTML = 'Give Wood: ' + giveWoodVal;
      giveBrick.innerHTML = 'Give Brick: ' + giveBrickVal;
      giveSheep.innerHTML = 'Give Sheep: ' + giveSheepVal;
      giveWheat.innerHTML = 'Give Wheat: ' + giveWheatVal;
      giveOre.innerHTML = 'Give Ore: ' + giveOreVal;
      receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
      receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
      receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
      receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
      receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    }
    receiveWood.onclick = function() {
      receiveWoodVal++;
      receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
    }
    receiveBrick.onclick = function() {
      receiveBrickVal++;
      receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
    }
    receiveSheep.onclick = function() {
      receiveSheepVal++;
      receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
    }
    receiveWheat.onclick = function() {
      receiveWheatVal++;
      receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    }
    receiveOre.onclick = function() {
      receiveOreVal++;
      receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
    }
    receiveBrick.style.float = 'left';
    receiveBrick.style.marginLeft = '10px';
    tradeBox.appendChild(clear);
    tradeBox.appendChild(receiveWood);
    tradeBox.appendChild(receiveBrick);
    tradeBox.appendChild(receiveSheep);
    tradeBox.appendChild(receiveWheat);
    tradeBox.appendChild(receiveOre);

    var trade = document.createElement('button');
    trade.innerHTML = 'Request Trade';
    trade.onclick = function() {
      while(tradeBox.firstChild) {
        tradeBox.removeChild(tradeBox.firstChild);
      }
      console.log(numPlayers);
      for (var i = 0; i < numPlayers; i++) {
        if (playerList[i] != currentPlayer) {
          console.log('play');
          var player = document.createElement('button');
          player.innerHTML = playerList[i].color;
          player.onclick = function() {
            console.log(playerList[0].color);
            console.log(playerList[1].color);
            console.log(this.innerHTML);
            for (var j = 0; j < numPlayers; j++) {
              if (this.innerHTML == playerList[j].color) {
                console.log('color');
                socket.emit('trade', {current: playerList.indexOf(currentPlayer), player: j, wood: (giveWoodVal- receiveWoodVal),
                    brick: giveBrickVal - receiveBrickVal, sheep: giveSheepVal - receiveSheepVal,
                    wheat: giveWheatVal - receiveWheatVal, ore: giveOreVal - receiveOreVal});
                tradeBox.remove();
              }
            }
          }
          tradeBox.appendChild(player);
        }
      }
    }
    tradeBox.appendChild(trade);
    var quit = document.createElement('button');
    quit.innerHTML = 'Cancel';
    quit.onclick = function() {
      //trade.disabled = false;
      //build.disabled = false;
      //devCard.disabled = false;
      //bankTrade.disabled = false;
      tradeBox.remove();
      return;
    }
    tradeBox.appendChild(quit);


  }
  bankTrade(currentPlayer, bankTrade) {
    var tradeBox = document.createElement('div');
    tradeBox.classList.add('resourcesBox');
    this.board.appendChild(tradeBox);
    var header = document.createElement('H1');
    header.innerHTML = 'Bank Trade';
    header.style.marginTop = '-20px';
    tradeBox.appendChild(header);

    // sets default amount of same resource needed to trade for a specific resource
    // with bank
    var woodRatio = 4;
    var brickRatio = 4;
    var sheepRatio = 4;
    var wheatRatio = 4;
    var oreRatio = 4;
    // determines the ratio of resources needed to trade with bank based on ports
    if (currentPlayer.ports.includes('Wood Port')) {
      woodRatio = 2;
    }
    else if (currentPlayer.ports.includes('3-1')) {
      woodRatio = 3;
    }
    if (currentPlayer.ports.includes('Brick Port')) {
      brickRatio = 2;
    }
    else if (currentPlayer.ports.includes('3-1')) {
      brickRatio = 3;
    }
    if (currentPlayer.ports.includes('Sheep Port')) {
      sheepRatio = 2;
    }
    else if (currentPlayer.ports.includes('3-1')) {
      sheepRatio = 3;
    }
    if (currentPlayer.ports.includes('Wheat Port')) {
      wheatRatio = 2;
    }
    else if (currentPlayer.ports.includes('3-1')) {
      wheatRatio = 3;
    }
    if (currentPlayer.ports.includes('Ore Port')) {
      oreRatio = 2;
    }
    else if (currentPlayer.ports.includes('3-1')) {
      oreRatio = 3;
    }

    // creates button to trade wood
    var giveWood = document.createElement('button');
    var giveWoodVal = 0;
    giveWood.style.float = 'left';
    giveWood.innerHTML = '(' + woodRatio + ': 1) ' + 'Give Wood: ' + giveWoodVal;
    giveWood.onclick = function() {
      if (giveWoodVal + woodRatio <= currentPlayer.resources.wood)
        giveWoodVal = giveWoodVal + woodRatio;

      giveWood.innerHTML = '(' + woodRatio + ': 1) ' + 'Give Wood: ' + giveWoodVal;
    }
    tradeBox.appendChild(giveWood);
    var giveBrick = document.createElement('button');
    var giveBrickVal = 0;
    giveBrick.innerHTML = '(' + brickRatio + ': 1) ' +'Give Brick: ' + giveBrickVal;
    giveBrick.style.float = 'left';
    giveBrick.style.marginLeft = '10px';
    giveBrick.onclick = function() {
      if (giveBrickVal + brickRatio <= currentPlayer.resources.brick) {
        giveBrickVal = giveBrickVal + brickRatio;
      }
      giveBrick.innerHTML = '(' + brickRatio + ': 1) ' +'Give Brick: ' + giveBrickVal;
    }
    tradeBox.appendChild(giveBrick);
    var giveSheep = document.createElement('button');
    var giveSheepVal = 0;
    giveSheep.innerHTML = '(' + sheepRatio + ': 1) ' +'Give Sheep: ' + giveSheepVal;
    giveSheep.style.float = 'left';
    giveSheep.style.marginLeft = '10px';
    giveSheep.onclick = function() {
      if (giveSheepVal + sheepRatio <= currentPlayer.resources.sheep) {
        giveSheepVal = giveSheepVal + sheepRatio;
      }
      giveSheep.innerHTML = '(' + sheepRatio + ': 1) ' +'Give Sheep: ' + giveSheepVal;
    }
    tradeBox.appendChild(giveSheep);
    var giveWheatVal = 0;
    var giveWheat = document.createElement('button');
    giveWheat.innerHTML = '(' + wheatRatio + ': 1) ' +'Give Wheat: ' + giveWheatVal;
    giveWheat.style.float = 'left';
    giveWheat.style.marginLeft = '10px';
    giveWheat.onclick = function() {
      if (giveWheatVal + wheatRatio <= currentPlayer.resources.wheat) {
        giveWheatVal = giveWheatVal + wheatRatio ;
      }
      giveWheat.innerHTML = '(' + wheatRatio + ': 1) ' +'Give Wheat: ' + giveWheatVal;
    }
    tradeBox.appendChild(giveWheat);
    var giveOreVal = 0;
    var giveOre = document.createElement('button');
    giveOre.innerHTML = '(' + oreRatio + ': 1) ' +'Give Ore: ' + giveOreVal;
    giveOre.style.float = 'left';
    giveOre.style.marginLeft = '10px';
    giveOre.onclick = function() {
      if (giveOreVal + oreRatio <= currentPlayer.resources.ore) {
        giveOreVal = giveOreVal + oreRatio;
      }
      giveOre.innerHTML = '(' + oreRatio + ': 1) ' +'Give Ore: ' + giveOreVal;
    }
    tradeBox.appendChild(giveOre);


    var receiveWheat = document.createElement('button');
    var receiveWheatVal = 0;
    var receiveOreVal = 0;
    var receiveWoodVal = 0;
    var receiveBrickVal = 0;
    var receiveSheepVal = 0;
    var receiveOre = document.createElement('button');
    var receiveWood = document.createElement('button');
    var receiveSheep = document.createElement('button');
    var receiveBrick = document.createElement('button');
    //receiveWood.style.display = 'block';

    receiveSheep.style.display = 'inline';
    receiveWheat.style.display = 'inline';
    receiveOre.style.display = 'inline';
    receiveWood.style.clear = 'both';
    receiveBrick.style.float = 'left';
    receiveSheep.style.float = 'left'
    receiveWheat.style.float = 'left';
    receiveOre.style.float = 'left';
    receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
    receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
    receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
    receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
    receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    var clear = document.createElement('button');
    clear.style.marginLeft = '20px';
    clear.innerHTML = 'Clear';
    clear.style.float = 'left';
    clear.onclick = function() {
      giveWoodVal = 0;
      giveBrickVal = 0;
      giveSheepVal = 0;
      giveWheatVal = 0;
      giveOreVal = 0;
      receiveOreVal = 0;
      receiveWoodVal = 0;
      receiveBrickVal = 0;
      receiveSheepVal = 0;
      receiveWheatVal = 0;
      giveWood.innerHTML = 'Give Wood: ' + giveWoodVal;
      giveBrick.innerHTML = 'Give Brick: ' + giveBrickVal;
      giveSheep.innerHTML = 'Give Sheep: ' + giveSheepVal;
      giveWheat.innerHTML = 'Give Wheat: ' + giveWheatVal;
      giveOre.innerHTML = 'Give Ore: ' + giveOreVal;
      receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
      receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
      receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
      receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
      receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    }
    receiveWood.onclick = function() {
      receiveWoodVal++;
      receiveWood.innerHTML = 'Receive Wood: ' + receiveWoodVal;
    }
    receiveBrick.onclick = function() {
      receiveBrickVal++;
      receiveBrick.innerHTML = 'Receive Brick: ' + receiveBrickVal;
    }
    receiveSheep.onclick = function() {
      receiveSheepVal++;
      receiveSheep.innerHTML = 'Receive Sheep: ' + receiveSheepVal;
    }
    receiveWheat.onclick = function() {
      receiveWheatVal++;
      receiveWheat.innerHTML = 'Receive Wheat: ' + receiveWheatVal;
    }
    receiveOre.onclick = function() {
      receiveOreVal++;
      receiveOre.innerHTML = 'Receive Ore: ' + receiveOreVal;
    }
    receiveBrick.style.float = 'left';
    receiveBrick.style.marginLeft = '10px';
    tradeBox.appendChild(clear);
    tradeBox.appendChild(receiveWood);
    tradeBox.appendChild(receiveBrick);
    tradeBox.appendChild(receiveSheep);
    tradeBox.appendChild(receiveWheat);
    tradeBox.appendChild(receiveOre);

    var trade = document.createElement('button');
    trade.innerHTML = 'Trade these Resoures';
    trade.onclick = function() {
      this.disabled = true;
      bankTrade.disabled = false;
      var receiveTotal = receiveWoodVal + receiveBrickVal + receiveSheepVal + receiveWheaValt + receiveOreVal;
      if (recieveTotal == (giveWoodVal/(woodRatio) + (giveBrickVal/brickRatio) +
      (giveSheepVal/sheepRatio) + (giveWheatVal/wheatRatio) + (giveOreVal/oreRatio))) {
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'wood', val: receiveWoodVal - giveWoodVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'brick', val: receiveBrickVal - giveBrickVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'sheep', val: receiveSheepVal - giveSheepVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'wheat', val: receiveheatdVal - giveWheatVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'ore', val: receiveOreVal - giveOreVal});
        tradeBox.remove();
        return;
      }
      else {
        alert('Not valid trade');
        this.disabled = false;
      }
    }
    tradeBox.appendChild(trade);
    var quit = document.createElement('butto');
    quit.innerHTML = 'Cancel';
    quit.onclick = function() {
      bankTrade.disabled = false;
      tradeBox.remove();
    }
    tradeBox.appendChild(quit);
  }

  tradeProposal(data) {
    var box = document.createElement('div');
    box.classList.add('resourcesBox');
    this.board.appendChild(box);
    var header = document.createElement('H1');
    header.style.marginTop = '-20px';
    header.innerHTML = 'Accept Trade?';
    var wood = data.wood;
    var brick = data.brick;
    var sheep = data.sheep;
    var wheat = data.wheat;
    var ore = data.ore;
    if (data.wood > 0) {
      wood = '+' + data.wood
    }
    if (data.brick > 0) {
      brick = '+' + data.brick;
    }
    if (data.sheep > 0) {
      sheep = '+' + data.sheep;
    }
    if (data.wheat > 0) {
      wheat = '+' + data.wheat;
    }
    if (data.ore > 0) {
      ore = '+' + data.ore;
    }
    box.innerHTML = 'Wood: ' + wood + ' Brick: ' + brick + ' Sheep: '+ sheep + ' Wheat: ' + wheat + ' Ore: ' + ore;
    var yes = document.createElement('button')
    yes.innerHTML = 'Yes';
    var player = playerList[data.player];
    // prevents player from accepting trade if they do not have the resources sought after
    if (player.resources.wood < data.wood*-1 || player.resources.brick < data.brick*-1 ||
        player.resources.sheep < data.sheep*-1 || player.resources.wheat < data.wheat*-1 ||
        player.resources.ore < data.ore*-1) {
          yes.disabled = true;
    }
    console.log(data.current);

    yes.onclick = function() {
      socket.emit('tradeResource', {player: data.player, wood: data.wood, brick: data.brick, sheep: data.sheep, wheat: data.wheat, ore: data.ore});
      socket.emit('tradeResource', {player: data.current, wood: data.wood*-1, brick:data.brick*-1, sheep: data.sheep*-1, wheat: data.wheat*-1, ore: data.ore*-1});
      box.remove();
      return;
    }
    var no = document.createElement('button');
    no.innerHTML = 'No';
    no.onclick = function() {
      box.remove();
      return;
    }
    box.appendChild(yes);
    box.appendChild(no);
  }

  tradeResources(data) {
    console.log(data.player);
    console.log(data.wood);
    playerList[data.player].updateResources('wood', data.wood);
    playerList[data.player].updateResources('brick', data.brick);
    playerList[data.player].updateResources('sheep', data.sheep);
    playerList[data.player].updateResources('wheat', data.wheat);
    playerList[data.player].updateResources('ore', data.ore);
    this.displayResources();
  }

  yearOfPlenty(currentPlayer) {
    var box = document.createElement('div');
    var header = document.createElement('H1');
    header.innerHTML = 'Choose 2 Resoures';
    var wood = document.createElement('button');
    var brick = document.createElement('button');
    var sheep = document.createElement('button');
    var wheat = document.createElement('button');
    var ore = document.createElement('button');

    var woodVal = 0;
    var brickVal = 0;
    var sheepVal = 0;
    var wheatVal = 0;
    var oreVal = 0;

    wood.innerHTML = 'Wood: ' + woodVal;
    brick.innerHTML = 'Brick: ' + brickVal;
    sheep.innerHTML = 'Sheep: ' + sheepVal;
    wheat.innerHTML = 'Wheat: ' + wheatVal;
    ore.innerHTML = 'Ore: ' + oreVal;

    wood.onclick = function() {
      if (woodVal + brickVal + sheepVal + wheatVal + oreVal < 2) {
        woodVal++;
      }
      wood.innerHTML = 'Wood: ' + woodVal;
    }
    brick.onclick = function() {
        if (woodVal + brickVal + sheepVal + wheatVal + oreVal < 2) {
          brickVal++;
        }
        brick.innerHTML = 'Brick: ' + brickVal;
    }
    sheep.onclick = function() {
      if (woodVal + brickVal + sheepVal + wheatVal + oreVal < 2) {
        sheepVal++;
      }
        sheep.innerHTML = 'Sheep: ' + sheepVal;
    }
    wheat.onclick = function() {
      if (woodVal + brickVal + sheepVal + wheatVal + oreVal < 2) {
        wheat++;
      }
        wheat.innerHTML = 'Wheat: ' + wheatVal;
    }
    ore.onclick = function() {
      if (woodVal + brickVal + sheepVal + wheatVal + oreVal < 2) {
        oreVal++;
      }
      ore.innerHTML = 'Ore: ' + oreVal;
    }
    box.appendChild(wood);
    box.appendChild(brick);
    box.appendChild(sheep, wheat, ore);

    var confirm = document.createElement('div');
    confirm.innerHTML = 'Select these Resources';
    confirm.onclick = function() {
      this.disabled = true;
      if (woodVal + brickVal + sheepVal + wheatVal + oreVal == 2) {
        box.remove();
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'wood', val: woodVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'brick', val: brickVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'sheep', val: sheepVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'wheat', val: wheatVal});
        socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                    resource: 'ore', val: oreVal});
        return;

      }
      else {
        alert('Choose 2 Resources');
        this.disabled = false;
        }
      }
    }
    monopoly(currentPlayer) {
      var box = document.createElement('div');
      var header = document.createElement('div');
      header.innerHTML = 'Choose a Resource to Steal';
      box.appendChild(header);
      var wood = document.createElement('button');
      var brick = document.createElement('button');
      var sheep = document.createElement('button');
      var wheat = document.createElement('button');
      var ore = document.createElement('button');


      wood.innerHTML = 'Wood';
      brick.innerHTML = 'Brick';
      sheep.innerHTML = 'Sheep';
      wheat.innerHTML = 'Wheat';
      ore.innerHTML = 'Ore';

      wood.onclick = function() {
        wood.disabled = true;
        brick.disabled = true;
        sheep.disabled = true;
        wheat.disabled = true;
        ore.disabled = true;

        var changeResource = document.createElement('button');
        changeResource.innerHTML = 'Change Resource to Steal';
        changeResourcce.onclick = function() {
          wood.disabled = false;
          brick.disabled = false;
          sheep.disabled = false;
          wheat.disabled = false;
          ore.disabled = false;
          changeResource.remove();
          confirm.remove();
        }
        var confirm = document.createElement('button');
        confirm.innerHTML = 'Steal This Resource';
        confirm.onclick = function() {
          box.remove();
          for (var i = 0; i< numPlayers; i++) {
            if (playerList[i] != currentPlayer) {
              socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                resource: 'wood', val: playerList[i].resources.wood});
              socket.emit('updateResource', {player: i,
                resource: 'wood', val: player.playerList[i].resources.wood* -1});
            }
          }
        }


      }
      brick.onclick = function() {
        wood.disabled = true;
        brick.disabled = true;
        sheep.disabled = true;
        wheat.disabled = true;
        ore.disabled = true;

        var changeResource = document.createElement('button');
        changeResource.innerHTML = 'Change Resource to Steal';
        changeResourcce.onclick = function() {
          wood.disabled = false;
          brick.disabled = false;
          sheep.disabled = false;
          wheat.disabled = false;
          ore.disabled = false;
          changeResource.remove();
          confirm.remove();
        }
        var confirm = document.createElement('button');
        confirm.innerHTML = 'Steal This Resource';
        confirm.onclick = function() {
          box.remove();
          for (var i = 0; i< numPlayers; i++) {
            if (playerList[i] != currentPlayer) {
              socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                resource: 'brick', val: playerList[i].resources.brick});
              socket.emit('updateResource', {player: i,
                resource: 'brick', val: player.playerList[i].resources.brick* -1});
            }
          }
        }
      }
      sheep.onclick = function() {
        wood.disabled = true;
        brick.disabled = true;
        sheep.disabled = true;
        wheat.disabled = true;
        ore.disabled = true;

        var changeResource = document.createElement('button');
        changeResource.innerHTML = 'Change Resource to Steal';
        changeResourcce.onclick = function() {
          wood.disabled = false;
          brick.disabled = false;
          sheep.disabled = false;
          wheat.disabled = false;
          ore.disabled = false;
          changeResource.remove();
          confirm.remove();
        }
        var confirm = document.createElement('button');
        confirm.innerHTML = 'Steal This Resource';
        confirm.onclick = function() {
          box.remove();
          for (var i = 0; i< numPlayers; i++) {
            if (playerList[i] != currentPlayer) {
              socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                resource: 'sheep', val: playerList[i].resources.sheep});
              socket.emit('updateResource', {player: i,
                resource: 'sheep', val: player.playerList[i].resources.sheep* -1});
            }
          }
        }
      }
      wheat.onclick = function() {
        wood.disabled = true;
        brick.disabled = true;
        sheep.disabled = true;
        wheat.disabled = true;
        ore.disabled = true;

        var changeResource = document.createElement('button');
        changeResource.innerHTML = 'Change Resource to Steal';
        changeResourcce.onclick = function() {
          wood.disabled = false;
          brick.disabled = false;
          sheep.disabled = false;
          wheat.disabled = false;
          ore.disabled = false;
          changeResource.remove();
          confirm.remove();
        }
        var confirm = document.createElement('button');
        confirm.innerHTML = 'Steal This Resource';
        confirm.onclick = function() {
          box.remove();
          for (var i = 0; i< numPlayers; i++) {
            if (playerList[i] != currentPlayer) {
              socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                resource: 'wheat', val: playerList[i].resources.wheat});
              socket.emit('updateResource', {player: i,
                resource: 'wheat', val: player.playerList[i].resources.wheat* -1});
            }
          }
        }
      }
      ore.onclick = function() {
        wood.disabled = true;
        brick.disabled = true;
        sheep.disabled = true;
        wheat.disabled = true;
        ore.disabled = true;

        var changeResource = document.createElement('button');
        changeResource.innerHTML = 'Change Resource to Steal';
        changeResourcce.onclick = function() {
          wood.disabled = false;
          brick.disabled = false;
          sheep.disabled = false;
          wheat.disabled = false;
          ore.disabled = false;
          changeResource.remove();
          confirm.remove();
        }
        var confirm = document.createElement('button');
        confirm.innerHTML = 'Steal This Resource';
        confirm.onclick = function() {
          box.remove();
          for (var i = 0; i< numPlayers; i++) {
            if (playerList[i] != currentPlayer) {
              socket.emit('updateResource', {player: playerList.indexOf(currentPlayer),
                resource: 'ore', val: playerList[i].resources.ore});
              socket.emit('updateResource', {player: i,
                resource: 'ore', val: player.playerList[i].resources.ore* -1});
            }
          }
        }
      }
      box.appendChild(wood);
      box.appendChild(brick);
      box.appendChild(sheep, wheat, ore);


    }
  }

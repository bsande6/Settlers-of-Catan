class CamConn {
    constructor(params) {
      this.sessioId = params.sessioId;
      this.name = params.name;
      this.playerPosn = params.playerPosn;
      this.peerPosn = params.peerPosn;
      //this.gameData = params.gameData;
      this.peerConn = null;
      //this.sendSocketMessage = params.sendMessage;
      //this.handleAddStream = params.handleAddStream;
      //this.handleConnected = params.handleConnected;
      this.mediaStream = null;
      this.connecting = false;
      this.connected = false;
      this.needsOffer = false;
      this.socketId = params.socketId;
        var pc;
    }

    createAndSendOffer() {
        if ((this.mediaStream != null) &&
            (this.peerConn != null) &&
            (!this.connecting) &&
            (!this.connected))
        {
            this.connecting = true;
            this.createOffer();
        }
    }
  //  createOffer = async () => {
  //      console.log(`CamConn[${this.name}]: createOffer`);
  /////      try {
    //        let offerDescription = await this.peerConn.createOffer();
    //        this.createdOffer(offerDescription);
    ///    } catch (error) {
  //          console.log(`CamConn[${this.name}] cant create offer: ${error.message}`);
  //      }
  //  }

    createdOffer = async (offerDesc) => {
        console.log(`CamConn[${this.name}]: createdOffer`);
        try {
            await this.peerConn.setLocalDescription(offerDesc);
            console.log(`CamConn[${this.name}] set local description success`);
            await this.sendOffer(offerDesc);
        } catch (error) {
            console.log(`Cam[${this.name}] cant set local description: ${error.message}`);
        }
    }

    sendOffer = async (offerDesc) => {
        console.log(`CamConn[${this.name}] sendOffer`);
        try {
            let message = new SocketMsg(this.sessionId);
            message.msg = {
                msgType: 'offer',
                offer: offerDesc,
            };
            this.sendMessage(message);
        } catch (error) {
            console.log(`Cam[${this.name}] cant send offer: ${error.message}`);
        }
    }

    offerRcvd = async (message) => {
        this.connecting = true;
        let offer = message.msg.offer;
        console.log(`CamConn: offer received from ${message.fromPlayerPosn}`);
        try {
            if (this.peerConn == null) {
                this.initPeerConnection(null);
            }
            await this.peerConn.setRemoteDescription(new RTCSessionDescription(offer));
            let answer = await this.peerConn.createAnswer();
            this.sendAnswer(answer);
        } catch (error) {
            console.log(`CamConn[${this.name}] cant set remote description: ${error.message}`);
        }
    }

    sendAnswer = (answer) => {
        console.log(`CamConn[${this.name}] sending answer`);
        let message = new SocketMsg(this.sessionId);
        message.msg = {
            msgType: 'answer',
            answer: answer,
        };
        this.sendMessage(message);
        this.peerConn.setLocalDescription(answer);
    }

    addTracks = () => {
        if (this.mediaStream != null) {
            console.log(`CamConn[${this.name}]: adding tracks`);
            for (const track of this.mediaStream.getTracks()) {
                this.peerConn.addTrack(track, this.mediaStream);
            }
        } else {
            console.log(`CamConn[${this.name}]: mediaStream is null, not adding stream`);
        }
    }

    answerRcvd = async (message) => {
        let answer = message.msg.answer;
        console.log(`CamConn: answer received from ${message.fromPlayerPosn}`);
        try {
            await this.peerConn.setRemoteDescription(new RTCSessionDescription(answer));
            console.log(`CamConn[${this.name}]: Successfully setRemoteDescription`);
            this.connected = true;
            this.connecting = false;
        } catch (error) {
            console.log(`CamConn[${this.name}] cant set remote description: ${error.message}`);
        }
    }

    onIceCandidate = async (event) => {
        if (this.peerConn) {
            console.log(`CamConn[${this.name}] onIceCandidate`);
            const iceCandidate = event.candidate;
            if (iceCandidate) {
                this.sendIceCandidate(iceCandidate);
            }
        }
    }

    sendIceCandidate = async (iceCandidate) => {
        if (this.peerConn) {
            console.log(`CamConn[${this.name}] sending ice candidate`);
            let message = new SocketMsg(this.sessionId);
            message.msg = {
                msgType: 'icecandidate',
                candidate: iceCandidate,
            };
            this.sendMessage(message);
        }
    }

    iceCandidateRcvd = async (message) => {
        if (this.peerConn) {
            let candidate = message.msg.candidate;
            console.log(`CamConn[${this.name}]: candidate received from ${message.fromPlayerPosn}`);
            try {
                await this.peerConn.addIceCandidate(candidate);
                console.log(`CamConn: added ice candidate success`);
            } catch (error) {
                console.log(`CamConn[${this.name}] cant set remote description: ${error.message}`);
            }
        }
    }

    handleConnectionChange = (event) => {
        if (this.peerConn) {
            console.log(`CamConn[${this.name}] handleConnectionChange: connection state =  ${this.peerConn.connectionState}`);
            if (this.peerConn.connectionState.toLowerCase() === "connected") {
                this.connected = true;
                this.connecting = false;
                this.handleConnected(this.name);
            }
        }
    }

    handleIceStateChange = (event) => {
        if (this.peerConn) {
            console.log(`CamConn[${this.name}] handleIceStateChange: state =  ${this.peerConn.iceConnectionState}`);
        }
    }
    async handleMsg(message) {
        //console.log(`CamConn[${this.name}]: Received message: ${JSON.stringify(message)}`);
        let msg = message.msg;
        let msgType = msg.msgType;
        switch (msgType) {
            case "offer": {
                await this.offerRcvd(message);
                break;
            }
            case "answer": {
                await this.answerRcvd(message);
                break;
            }
            case "icecandidate": {
                await this.iceCandidateRcvd(message);
                break;
            }
            default: {
                console.log(`CamConn rcvd msg of type: ${msgType}`);
            }
        }
    }

    streamIsReady(mediaStream) {
        console.log(`CamConn[${this.name}]: streamIsReady`);
        this.mediaStream = mediaStream;
        this.initPeerConnection(mediaStream);
    }



    initPeerConnection = (mediaStream) => {
        console.log(`CamConn[${this.name}]: initPeerConnection`);
        const rtcPeerConnCfg = {
            'iceServers': [{
                'urls': 'stun:stun.l.google.com:19302'
            }]
         };

        this.peerConn = new RTCPeerConnection(rtcPeerConnCfg);
        this.peerConn.onicecandidate = this.onIceCandidate;
        this.peerConn.onconnectionstatechange = this.handleConnectionChange;
        this.peerConn.oniceconnectionstatechange = this.handleIceStateChange;
        this.peerConn.ontrack = this.onAddTrack;

        this.addTracks();
    }

    sendMessage = (message) => {
        message.source = 'camera';
        message.toPlayerPosn = this.peerPosn;
        this.sendSocketMessage(message);
    }

    onAddTrack = (event) => {
        console.log(`CamConn[${this.name}]: onAddTrack called`);
        this.handleAddStream(this.peerPosn, event.streams[0]);
    }

    close = () => {
        if (this.peerConn != null) {
            this.peerConn.close();
        }
        this.peerConn = null;
        this.connected = false;
        this.connecting = false;
    }

    sendClose = () => {
        console.log(`CamConn[${this.name}] sendClose`);
        try {
            let message = new SocketMsg(this.sessionId);
            message.msgId = 'camConnClosed';
            this.sendMessage(message);
        } catch (error) {
            console.log(`Cam[${this.name}] cant send close: ${error.message}`);
        }
    }

//  pc = new RTCPeerConnection({
//      iceServers: [{
//          url: "stun:stun.services.mozilla.com",
//          username: "somename",
//          credential: "somecredentials"
//      }]
//  });
}
//  pc.onaddstream = function (obj) {
  //    console.log('vid');
    //  var vid = document.createElement('video');
  //    vid.setAttribute('class', 'video-small');
    //  vid.setAttribute('autoplay', 'autoplay');
  //    vid.setAttribute('id', 'video-small');
  //    document.body.appendChild(vid);
  //    vid.srcObject = obj.stream;
  //}
  //var stream;
  //navigator.getUserMedia({video: true, audio: true}, function (stream) {
  //    var video = document.querySelector('video');
  //    video.srcObject = stream;
  //    pc.addStream(stream);
  //}, error);

/*  socket.on('add-users', function (data) {
    var answersFrom = [], offer;


      console.log(data.users[0]);
      console.log(data.users[1]);
    //  const peers = [];

      for (var i = 0; i < data.users.length; i++) {
          console.log(data.users.length);
        //   peer = createPeer(data.users[i], socket.id, stream);
        //   peers.push(peer);
          // setPeers(peers);
        //  var array = data.users[0];
          var el = document.createElement('div'),
              id = data.users[i];

          el.setAttribute('id', id);
          console.log(el.id);
          el.innerHTML = id;
          createOffer(id);
          document.getElementById('users').appendChild(el);
      }
  });
  socket.on('remove-user', function (id) {
      var div = document.getElementById(id);
      document.getElementById('users').removeChild(div);
  });


  socket.on('offer-made', function (data) {
      console.log('made');
      offer = data.offer;

      pc.setRemoteDescription(new RTCSessionDescription(data.offer), function () {
          pc.createAnswer(function (answer) {
              pc.setLocalDescription(new RTCSessionDescription(answer), function () {
                console.log('make');
                console.log(data.socket);
                  socket.emit('make-answer', {
                      answer: answer,
                      to: data.socke
                  });
              }, error);
          }, error);
      }, error);

  });

//    connections = {remotePeerId: RTCPeerConnection, ...};
  socket.on('answer-made', function (data) {
    console.log('answer');
    console.log(data.answer);
      pc.setRemoteDescription(new RTCSessionDescription(data.answer), function () {
          console.log(data.socket);
          console.log(answersFrom);
          document.getElementById(data.socket).setAttribute('class', 'active');
          if (!answersFrom[data.socket]) {
              console.log('not');
              createOffer(data.socket);
              answersFrom[data.socket] = true;
          }
      }, error);
  });
*/
 createOffer(id) {
    console.log('offer');
      pc.createOffer(function (offer) {
          pc.setLocalDescription(new RTCSessionDescription(offer), function () {
              socket.emit('make-offer', {
                  offer: offer,
                  to: id
              });
          }, error);
      }, error);
  }

  function error(err) {
      console.warn('Error', err);
  }

/*  constructor(params) {
        this.sessionId = params.sessionId;
        this.name = params.name;
        this.playerPosn = params.playerPosn;
        this.peerPosn = params.peerPosn;
        this.gameData = params.gameData;
        this.peerConn = null;
        this.sendSocketMessage = params.sendMessage;
        this.handleAddStream = params.handleAddStream;
        this.handleConnected = params.handleConnected;
        this.mediaStream = null;
        this.connecting = false;
        this.connected = false;
        this.needsOffer = false;
    }

    /*
     *   EXTERNAL INTERFACE





}

export default CamConn;
}
*/

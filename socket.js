
const socket = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');

const use = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const result = [];

const algorithm = (e) => {
    let result = ""
    for (i = 0; i < e.length; i++) {
      // console.log(use[25 - use.indexOf(e[i])]);
        if (use[25 - use.indexOf(e[i])] == undefined) {
          result += e[i];
        } else {
          result += use[25 - use.indexOf(e[i])];
        }
    }
    return result
}
  socket.addEventListener('open', function (event) {
    // console.log(event);
 
  });
  let message =  {}
  socket.addEventListener('message', function (event) {
      // console.log('Message from server: ', JSON.parse(event.data));
      let parsedMessage = JSON.parse(event.data).message;
      let encryptedText = algorithm(parsedMessage);
      console.log(algorithm(encryptedText));
      let splittedEncryptedText = encryptedText.split(":");
      let key = splittedEncryptedText[splittedEncryptedText.length-1].trim();

      message = {
        "type": "REGISTER",
        "name": "Berkant",
        "surname": "Usta",
        "email": "berkantusta12@gmail.com",
        "registrationKey":key,
        };

        // console.log(message);


      // console.log('WebSocket connected!');
      
      if (JSON.parse(event.data).type !== 'CONGRATULATIONS') {
        socket.send(JSON.stringify(message));
      }
      
      
    });

    socket.addEventListener('onclose', function (event) {
      console.log(event);
   
    });







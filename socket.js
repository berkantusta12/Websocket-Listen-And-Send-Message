// const socket = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');

// socket.addEventListener('open', (event) => {
//   console.log('WebSocket connection opened');
// });

// socket.addEventListener('message', (event) => {
//   // console.log("Received message:", JSON.parse(event.data));
//   // console.log(JSON.parse(event.data).message);
//   let parsedMessage = JSON.parse(event.data).message;
//   let encryptedText = algorithm(parsedMessage);
//   console.log(encryptedText);
//   let splittedMessage = parsedMessage.split(" : ");
//   console.log("key ==>", splittedMessage[splittedMessage.length-1]);
// });

// // socket.addEventListener('close', (event) => {
// //   console.log('WebSocket connection closed');
// // });

// socket.addEventListener('error', (event) => {
//   console.error('WebSocket error:', event);
// });




// algorithm("Kvvk orhgvmrmt mvd nvhhztv uli gzhp xlmgvmg! Ylfi ivtrhgizgrlmKvb");
// console.log(result);

// {
//   type: "REGISTER",
//   name; "Berkant",
//   surname; "Usta",
//   email; "berkantusta12@gmail.com",
//   registrationKey; "2x037wxy189726067077v61364u5v7w3721yxy699688938644x8zw42yy94158z"
  
// }
// socket.emit('message', 'New Register');

// const socket = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');

// const ws = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');
// socket.addEventListener('open', (event) => {
//   console.log('WebSocket connection opened');
// });

// socket.addEventListener('message', (event) => {
//   console.log(`Received message: ${(event.data)}`);
// });

// // socket.addEventListener('close', (event) => {
// //   console.log('WebSocket connection closed');
// // });

// socket.addEventListener('error', (event) => {
//   console.error('WebSocket error:', event);
// });



// const message = {
//   type: "REGISTER",
//   name: "Berkant",
//   surname: "Usta",
//   email: "berkantusta12@gmail.com",
//   registrationKey: "2x037wxy189726067077v61364u5v7w3721yxy699688938644x8zw42yy94158z",
//   };
  
//   const socket = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');
  


  
//   socket.addEventListener('open', function (event) {
//   console.log('WebSocket connected!');
//   socket.send(JSON.stringify(message));
//   });
  
//   socket.addEventListener('message', function (event) {
//   console.log('Message from server: ', event.data);
//   });



// console.log('Message is sent...');
// ws.onopen = function() {
//   const message = {
//     Type: "REGISTER",
//     Name: "Berkant",
//     Surname: "Usta",
//     Email: "berkantusta12@gmail.com",
//     RegistrationKey: "2x037wxy189726067077v61364u5v7w3721yxy699688938644x8zw42yy94158z"
//   };
  
//   ws.send(JSON.stringify(message));
//   console.log('Message is sent...');

// };








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







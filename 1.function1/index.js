function reverseString(message){
    var messageArray = new Array();
    for(var i = message.length - 1; i >= 0 ; i--) {
        messageArray.push(message.charAt(i));
    }
   console.log(messageArray.join(''))
  }
  reverseString('hello'); // should return 'olleh'
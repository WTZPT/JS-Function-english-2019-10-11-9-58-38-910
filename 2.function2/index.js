function palindrome(message){
    // wirte your code here
    var len = message.length;
    var ans = true;
    for(var i = 0;  i <= len/5;i++) {
        if(message.charAt(i) != message.charAt(len - 1 - i)) {
            ans = false;
            break;
        }
    }
    console.log(ans);

  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
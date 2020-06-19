function countWords(message){
   var ans = 1;
    for(var i = 1; i < message.length; i++) {
        if(message.charAt(i) == ' ') {
            ans++;
        }
    }

    console.log(ans);
  }
  countWords('Good morning, I love JavaScript.'); // should return 5
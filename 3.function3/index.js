function alphabetSort(message){
    // wirte your code here
    var alphArray = new Array();
    for(var i = 0 ; i < message.length; i++) {
        alphArray.push(message.charAt(i));
    }

    for(var i = 0;  i < message.length; i++) {
        for(var j = i+1; j < message.length; j++) {
            if(alphArray[i] > alphArray[j]) {
                var t =  alphArray[i];
                alphArray[i] = alphArray[j];
                alphArray[j] = t;
            }
        }
    }
    console.log(alphArray.join(''));
}
  alphabetSort('hello'); // should return 'ehllo'


function shiftFirst(sentence){
    // write your code here
    let mySentence = [];
    let wordArr = [];
    let secondWordArr = [];
    let firstArr = sentence.split(" ");
    for(let a=0;a<firstArr.length-1;a++){
        if(a===0){
            wordArr = firstArr[0].split('');    
            secondWordArr = firstArr[firstArr.length-1].split('');
            wordArr.shift();
            wordArr.unshift(secondWordArr[0]);
            mySentence.push(wordArr);
            wordArr = firstArr[0].split('');
            secondWordArr = firstArr[1].split('');
            secondWordArr.shift();
            secondWordArr.unshift(wordArr[0]);
            mySentence.push(secondWordArr);
        }else if(a!==0){
            wordArr = firstArr[a].split('');
            secondWordArr = firstArr[a+1].split('');
            secondWordArr.shift();
            secondWordArr.unshift(wordArr[0]);
            mySentence.push(secondWordArr);

        }
        
    }
    return mySentence;

}


console.log(shiftFirst("Today is Sunday")); // "Soday Ts iunday"
console.log(shiftFirst("The Sun rises in the East")); // "Ehe Tun Sises rn ihe tast"
/**
 * i is increment 
 * d is decrement
 * s is square
 * o is output
 */

function parse(str){
    // write your code here
    const OutputArr = [];
    let number = 0;
    let myArr = str.split('');
    for(let a=0;a<myArr.length;a++){
        switch (myArr[a]) {
            case 'i':
                number+=1;
                break;
            case 'd':
                number-=1;
                break;
            case 'o':
                OutputArr.push(number);
                break;
            case 's':
                number*=number;
                break;
            default:
                break;
        };
    }
    return OutputArr;
}


console.log(parse("iiisdoso"));// should return [8,64]
console.log(parse("oiiosodso"));// should return [0,2,4,9]
console.log(parse("iaiosodstoo"));// should return [2,4,9,9]
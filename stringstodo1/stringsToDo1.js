
//Strings To Do 1

const removeBlanks = (str) => {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newString += str[i];
        }
    }
    return newString;
}
const play = "Pl ayTha tF u nkyM usi c ";
console.log(removeBlanks(play));


//Get Digits

const getDigits = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {

        if (!isNaN(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;
}
const dig = "abc8c0d1ngd0j0!8";
console.log(getDigits(dig));

// acronym

const acronym = (str) => {
    let newString = '';
   for  (let i = 0; i < str.length; i++) {


        if (i === 0) {
            newString += str[i].toUpperCase();
        }
        else if (str[i-1] === ' ') {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}

//Count Non-Spaces

const count = (str) => {
    let counter = 0 ;
    for (let i = 0; i < str.length; i++){
           
            if (str[i]!== ' ') {
                counter ++
            }
    }
    return counter;
}

const charrr = "Hello world !";
console.log(count(charrr));


// Remove Shorter Strings

const removeShorterStrings = (arr , n) =>{
    let newArr =[];
    for (i=0; i< arr.length;i++){
        if (arr[i].length>= n){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


const array1 = ['There', 'is', 'a', 'bug', 'in', 'the', 'system'];
console.log(removeShorterStrings(array1, 3));


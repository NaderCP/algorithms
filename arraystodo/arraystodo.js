// Push Front

const pushFront = (array, vari) =>{
    for (let i = array.length; i >= 0; i--){
        array[i] = array[i-1];
    }
    array[0] = vari;
    return array;
}


// Pop Front

const popFront = (array) =>{
    temp = array[0];
    for ( let i =0 ; i < array.length ; i++){
        array [i]= array [i+1];
        
    }
    array.pop();
    console.log(array)
    return temp;

}

console.log(popFront([0,5,10,15]) );

// Insert At

const insertAt = ( arr , pos , val) =>{
    let arr1 = [];
    for ( let i=0 ; i < pos ; i++){
       arr1.push(arr[i]);
      
    }
    arr1.push(val);
    for ( let i = pos ; i < arr.length  ; i++){
        arr1.push(arr[i]);
    }
    return arr1;
}

console.log(insertAt([100,200,5], 2, 311))

// Remove At

const removeAt = (arr, pos)=>{
    let temp = arr[pos];
    let arr1 = [];
    
    for ( let i =0 ; i < pos ; i++ ) {
        arr1.push(arr[i]);

    }
    for ( let i = pos+1 ; i < arr.length ; i++ ) {
        arr1.push(arr[i]);
    }
    console.log(arr1);
    return temp;
}

console.log(removeAt([1000,3,204,77], 1)) ;

// swap pair 

const swapPairs =(arr) =>{
    if (arr.length % 2 == 0){
        for ( let i = 0 ; i < arr.length ; i+=2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else {
        for ( let i = 0 ; i < arr.length -1 ; i+=2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;

}

console.log(swapPairs([1,2,3,4]))
console.log(swapPairs(["Brendan",true,42]))


//Remove Duplicates

const removeDupes = (arr) =>{
    let arr1 = [];
    for ( let i = 0 ; i < arr.length ; i++){
        if (arr[i] != arr[i+1]){
            arr1.push(arr[i]);
        }else {
            removeAt(arr, i+1)
        }
    }
    return arr1;
}

console.log(removeDupes([-2,-2,3.14,5,5,10]))

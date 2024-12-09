const element=["Nan", 44, 5, 'Rasel', -5, null];

function deleteInvalids(array){
    let newArray=[];
    for (let number of array){
        if(typeof number ==="number"){
            newArray.push(number);
        }
    }
    return newArray;
}

const result=deleteInvalids(element);
console.log(result);
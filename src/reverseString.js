
function reverseString(input){

    let output = '';
    for (let i = input.length -1 ; i >= 0 ; i -- ){
        output = output +  input[i];
    }

    return output;
}

export {reverseString};
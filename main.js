const numKey = {0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4:'Four', 5:'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9:'Nine'};

function convertToPhonetic(array){
    let phonetic = []
    let tempNumber = []

    // iterate through array
    for(let i = 0; i < array.length; i++){

        //convert each number to a string so that each digit can be accessed 

        let numString = array[i].toString();

        //iterate through the digits in each number in the array
        for(let j = 0; j < numString.length; j++){

            //use current digit as the key, push the corresponding value to the tempNumber array
            tempNumber.push(numKey[numString.charAt(j)])
        }

        //join the separate, converted digits together and push those to the final phonetic array
        phonetic.push(tempNumber.join(""))

        //reset the tempnumber 
        tempNumber = []
    }

    //return the final array joined to match the expected format
    return phonetic.join()
};

console.log(convertToPhonetic([3, 25, 209]));
console.log(convertToPhonetic( [10, 300, 5]));
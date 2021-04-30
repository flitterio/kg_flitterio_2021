const numKey = {0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4:'Four', 5:'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9:'Nine'};

function convertToPhonetic(array){
    let phonetic = []
    let tempNumber = []
    for(let i = 0; i < array.length; i++){
        let numString = array[i].toString();
        for(let j = 0; j < numString.length; j++){
            tempNumber.push(numKey[numString.charAt(j)])
            console.log('temp', tempNumber)
        }
        phonetic.push(tempNumber.join(""))
        tempNumber = []
    }
    return phonetic
};

console.log(convertToPhonetic([3, 25, 209]));
console.log(convertToPhonetic( [10, 300, 5]));
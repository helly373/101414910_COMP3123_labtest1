const lowerCaseWords = (mixedArray) => {
    return new Promise((res, rej) =>{
        if(!Array.isArray(mixedArray)){
            return rej("Input is Invalid");
        }

        const stringArray = mixedArray.filter(item => typeof item === 'string').map(word => word.toLowerCase());

        stringArray.length > 0 ? res(stringArray) : rej("No strings found in the array");
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then(result => console.log(result)).catch(error => console.log(error));
const addToZero = arr =>{
    for(let i =0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let x = arr[i]
            let y = arr[j]
            if (x + y === 0){
                return true
            }

        }
    }
    return false
}

// The run tie of this code is 
// time coplexity - o(n^2)
// space complexity - o(n)


console.log(addToZero([1,2,3]))
console.log(addToZero([1,2,3,-2]))


const hasUniqueChars = (str) =>{
    for(let i =0; i < str.length; i++){
        for(let j = i+1 ;j < str.length; j++ ){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// The run tie of this code is 
// time coplexity - o(n^2)
// space complexity - o(n)

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))

const isPangram = (str) =>{
    let strArr= str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i =0; i < alphabet.length; i++){
        if (strArr.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    return true 
}

// The run tie of this code is 
// time coplexity - o(n)
// space complexity - o(n)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))


const findLongestWord= (str) =>{
    var strSplit = str.split(' ');
    var longestWord = 0;

    for(let i =0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length
        }
    }
    return longestWord
}

// The run tie of this code is 
// time coplexity - o(n)
// space complexity - o(n)

console.log(findLongestWord('The longest word it the second one'))

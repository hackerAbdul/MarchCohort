//function manipulation

function split(param){
    const split = param.toString().split('')

    console.log(split)

    return split
}

function reverse(param){

    const splitItem = split(param)

    const reverse = splitItem.reverse()

    console.log(reverse)

    return reverse

}


function join(param){

    const reversed = reverse(param)

    const join = reversed.join('')

    console.log(join)

    return join
}


function checkPalindrome(param){

    const reversedWord = join(param)

    if (reversedWord === param){
        console.log(`${param} is a palindrome, because ${param} is equal to ${reversedWord}`)
    }else{
        console.log(`${param} is NOT a palindrome, because ${param} is NOT equal to ${reversedWord}`)
    }

}

checkPalindrome("abdulkadir")
split("hello world")
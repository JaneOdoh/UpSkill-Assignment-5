
// Question 1 - Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelcius(fahrenheitValue){
    let celsiusValue=((fahrenheitValue-32)*5)/9;
    console.log(celsiusValue)
}
// fahrenheitToCelcius(145)


// Question 2 - Create a function that will calculate the average of numbers in an array.

function calculateAverage(input){
    let inputArray = JSON.parse(input)
    let sum = 0;
    for (let i=0; i<inputArray.length; i++){
        sum+=inputArray[i]
    }
    average = sum/inputArray.length;
    console.log(average)
}
// calculateAverage('[34,56,97,12,3,0,13]')


// Question 3 - Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function divisible(n,x,y){
    var check;
    if (n%x==0 & n%y==0){
        check=true
    }else{
        check=false
    }
    console.log(check)
}
// divisible(180,5,4)


// Question 4 - Create a function that will output the first 100 prime numbers.

function primeNumbers(){
    const number_list = [2]
    let i=3
    while(number_list.length<100){
        let flag=true;
        for(let j=2; j<i; j++){
            if(i%j===0){
                flag&=false
                break
            }
        }
        if(flag){
            number_list.push(i)
        }
        i++;
    }
    console.log(number_list)
}
// primeNumbers()


// Question 5 - Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(input){
    let flag=true
    for(let j=2; j<input; j++){
        if(input%j===0){
            flag=false
            break
        }
    }
    console.log(flag)
}
// isPrime(211)
// isPrime(45)


// Question 6 - Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

function arrayFilter(input1){
    input = JSON.parse(input1);
    array = [] ;
    for(let i=0; i<input.length; i++){
        num = input[i]
        if (num>=0){
            array.push(num)
        }
    }
    console.log(array)
}
// arrayFilter('[245, -24,98,-13,-134,75]')


// Question 7 -  Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function fizzBuzz(){
    for(let count=1; count<=100; count++){
        if(count%3===0 && count%5===0){
            console.log('FizzBuzz')
        }else if(count%3===0){
            console.log('Fizz')
        }else if(count%5===0){
            console.log('Buzz')
        }else{
            console.log(count)
        }
    }
}
// fizzBuzz()



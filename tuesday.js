/*number from 1 to 135*/
/*const calcDevidedBy3And5 = (maxNumber) => {*/

/*FizzBuzz Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]*/
let numA = [];

for (let i = 1; i <= 135; i++) 
{
    if (i % 5 === 0 && i % 3 === 0) 
    {
        numA[i] = "FizzBuzz";
    } 
    else {
            if (i % 5 === 0) 
            {
                numA[i] = "Buzz";
            } 
            else 
            {
                if (i % 3 === 0) 
                {
                    numA[i] = "Fizz";
                } 
                else {
                    numA[i] = i;
                }
            }
        }
}
console.log(numA);

/*let sum = 0;
 
for (let i = 1; i <= 7; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
    else if(i % 3 ===0 || i % 5 === 0){
        sum !=i;
    }
}
 
return sum;
}

console.log(calcDevidedBy3And5(0));*/


/*Massive array */
/*var mAr = [2,1,6,4,-7];
console.log('Original Array',mAr)
mAr.reverse();
console.log('Reversed Array',mAr)*/


/*fibbonacci*/
/*var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 1000000; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);*/
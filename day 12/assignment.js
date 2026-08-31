//1 to 10 using for loops

for(let i=1;i<=10;i++){
    console.log(i);
}

//1 to using while loop

while(i<=10){
    console.log(i);
    i++;
}

// odd number using while and for loop
for(let i=1;i<=30;i++){
    console.log(2*i+1);
}

while(i<=30){
    console.log(2*i+1);
    i++;
}

//table of 7

for(let i=1;i<=10;i++){
    console.log("7xi"=7*i,i);
}

//sum of numbers

let n=Number(prompt("enter a number"));
let sum=n*(n+1)/2;
console.log("the sum is:",sum)


//stop looop if it is divisble by 7

let i=1;
while(i%7!=0){
    console.log(i);
    i++;
}

//skip even no

let n =Number(prompt("enter a number"));
for(let i=1;i<=n;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}
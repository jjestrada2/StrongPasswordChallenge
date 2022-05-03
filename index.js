function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
const numbers = "0123456789"
const lower_case = "abcdefghijklmnopqrstuvwxyz"
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_characters = "!@#$%^&*()-+"
var counter=[];
var result=0;
var arrayPassword=[...password]

for(let i of arrayPassword){
        if(numbers.includes(i))counter[0]=1
        if(lower_case.includes(i)) counter[1]=1
        if(upper_case.includes(i)) counter[2]=1
        if(special_characters.includes(i))counter[3]=1   
}
counter=counter.reduce((accumulator,current)=>accumulator+current)
console.log(counter)

if(arrayPassword.length>6){
    result= 4-counter;
}else{
    result= (4-counter)+n<6 ? 6-n : 4-counter;
}
    return(result);
    
    
    

}

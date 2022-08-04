// for(i=105;i>=7;i-7){
//     console.log(i)
// }

// let num=require("readline-sync");
// let a=num.questionInt("enter the num");
// for(i=1;i<=a;i++){
//     let p=i*a;
// for(j=1;j<=10;i++){
//     console.log(p)
    
  

// }
// }
// ``
let a=1655678439;
let b=Array.from(String(a),Number);
let max=0;
let length=b.length
for(i=1;i<length;i++){
    if (b[i]>max){
        max=b[i]
        
    }        
}
console.log(max)

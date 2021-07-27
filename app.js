var  para = document.querySelector("#headerpara");
var  txtamount = document.querySelector("#txtamount");
var  nextbtn = document.querySelector("#next-btn");
var  txtcash = document.querySelector("#txtcash");
var  lasttb =document.querySelectorAll(".lasttb");
var  currencyArray = [2000,500,200,100,50,20,10,5,2,1];
let returnArray =[0,0,0,0,0,0,0]

nextbtn.addEventListener("click", clickfunction);
 
function clickfunction(){
 var result = txtcash.value-txtamount.value;
 

 
 if(result<0){
     return "Invalid Amount";
 } else if(result>0){
     var remainingamount = result;
    for(var i=0;i<currencyArray.length;i++){
     returnArray[i]= Math.floor(remainingamount/currencyArray[i]);
     remainingamount-=returnArray[i]*currencyArray[i];
     lasttb[i].innerText=returnArray[i];

 }
}
}
 
 
    

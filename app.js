



var  para = document.querySelector("#headerpara");
var  mainsection = document.querySelector("#main-container")
var  billcontainer = document.querySelector("#billcontainer");
var  txtamount = document.querySelector("#txtamount");
var  nextbtn = document.querySelector("#next-btn");
var  cashcontainer = document.querySelector("#cashcontainer");
var  txtcash = document.querySelector("#txtcash");
var  secondarycontainer = document.querySelector("#secondary-container");
var  maintable = document.querySelector("#maintable");
var  lasttb = document.querySelectorAll(".lasttb");
var  currencyArray = [2000,500,200,100,50,20,10,5,2,1];
let returnArray =[0,0,0,0,0,0,0];

secondarycontainer.style.visibility="hidden";
cashcontainer.style.visibility="hidden";




nextbtn.addEventListener("click", clickfunction);
// txtcash.style.visibility="hidden";

 
function clickfunction(){
var result = txtcash.value-txtamount.value;
console.log(txtcash.value);
  
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


    

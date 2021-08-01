var  para = document.querySelector("#headerpara");
var  mainsection = document.querySelector("#main-container")
var  billcontainer = document.querySelector("#billcontainer");
var  txtamount = document.querySelector("#txtamount");
var  nextbtn = document.querySelector("#next-btn");
var  cashcontainer = document.querySelector("#cashcontainer");
var  txtcash = document.querySelector("#txtcash");
var  textfield =document.querySelector("#textfield")
var  secondarycontainer = document.querySelector("#secondary-container");
var  maintable = document.querySelector("#maintable");
var  lasttb = document.querySelectorAll(".lasttb");
var  todaytotal = document.querySelector("#todaytotal")
var  currencyArray = [2000,500,200,100,50,20,10,5,2,1];
let returnArray =[0,0,0,0,0,0,0];
var totalBill = 0;



//  Hide the box and table
cashcontainer.style.visibility="hidden";
secondarycontainer.style.visibility="hidden";



//  click button function
nextbtn.addEventListener("click", clickfunction);

// main function
function clickfunction(){

if(nextbtn.innerText==="Next"){
     if(txtamount.value > 0 && txtamount.value <100000){
     cashcontainer.style.visibility="visible";
     nextbtn.innerText="Submit";

     }else{
       textfield.innerText="Error: Enter Valid Bill Amount!";
       secondarycontainer.style.visibility="hidden";
    } 
}else if(nextbtn.innerText==="Submit") {

    if((txtamount.value>0 && txtamount.value <100000) && (txtcash.value > 0 && txtcash.value <=102000)){

       totalBill+=parseInt(txtamount.value);
       todaytotal.innerText= `Session Earnings:Rs${totalBill}`;
      
       var CashToReturn  = txtcash.value-txtamount.value;
       

         if(CashToReturn === 0 ){
             textfield.innerText = "There Is Nothing To Return!";
             secondarycontainer.style.visibility="hidden";

         } else if (CashToReturn>0){
             secondarycontainer.style.visibility="visible";
               for(var i=0;i<currencyArray.length;i++) {
                     returnArray[i]= Math.floor(CashToReturn/currencyArray[i]);
                     CashToReturn-=returnArray[i]*currencyArray[i];
                     lasttb[i].innerText=returnArray[i];
                     textfield.innerText="";
                    
             } 
        
            
        } else {
              textfield.innerText = `Cash Given By Customer Is Rs${-CashToReturn} less!`
              secondarycontainer.style.visibility="hidden";
         }
    } else{
        textfield.innerText="The cash entered is invalid! "
        secondarycontainer.style.visibility="hidden";
        
      }
}else {
    textfield.innerText="Invalid Characteristics";
    secondarycontainer.style.visibility="hidden";

  }
  
}




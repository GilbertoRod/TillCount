
/*
//Removed due to confusion
function handleOverShortKeyDown(event){
  if(event.key==='Enter'){
    calculate();
    
  }
}
*/

function reset(){
  var inputs = document.querySelectorAll(".input-num");
  inputs.forEach(function(element) {
    element.value = "";
  });
  document.querySelector(".total-number-value").innerHTML=0;
  document.querySelector(".over-under").innerHTML="";

}


function addToTotal(event){
  if(event.key!=='Enter'){
    total=calculate("display sum");
    document.querySelector(".total-number-value").innerHTML=total;
    document.querySelector(".over-under").innerHTML=``;
  }
}

function calculate(action=""){
  let sum=0;
  let hundredBill=document.getElementById("hundred-bill").value;
  hundredBill=parseInt(hundredBill)*100||0;
  sum+=hundredBill;
  let fiftyBill=document.getElementById("fifty-bill").value;
  fiftyBill=parseInt(fiftyBill)*50||0;
  sum+=fiftyBill;
  let twentyBill=document.getElementById("twenty-bill").value;
  twentyBill=parseInt(twentyBill)*20||0;
  sum+=twentyBill;
  let tenBill=document.getElementById("ten-bill").value;
  tenBill=parseInt(tenBill)*10||0;
  sum+=tenBill;
  let fiveBill=document.getElementById("five-bill").value;
  fiveBill=parseInt(fiveBill)*5||0;
  sum+=fiveBill;
  let twoBill=document.getElementById("two-bill").value;
  twoBill=parseInt(twoBill)*2||0;
  sum+=twoBill;
  let oneBill=document.getElementById("one-bill").value;
  oneBill=parseInt(oneBill)*1||0;
  sum+=oneBill;


  let fiftyCent=document.getElementById("fifty-cent").value;
  fiftyCent=parseInt(fiftyCent)*.50||0;
  sum+=fiftyCent;
  let twentyFiveCent=document.getElementById("twentyfive-cent").value;
  twentyFiveCent=parseInt(twentyFiveCent)*.25||0;
  sum+=twentyFiveCent;
  let tenCent=document.getElementById("ten-cent").value;
  tenCent=parseInt(tenCent)*.10||0;
  sum+=tenCent;
  let fiveCent=document.getElementById("five-cent").value;
  fiveCent=parseInt(fiveCent)*.05||0;
  sum+=fiveCent;
  let oneCent=document.getElementById("one-cent").value;
  oneCent=parseInt(oneCent)*.01||0;
  sum+=oneCent;


  let quarterRoll=document.getElementById("quarter-roll").value;
  quarterRoll=parseInt(quarterRoll)*10||0;
  sum+=quarterRoll;
  let dimeRoll=document.getElementById("dime-roll").value;
  dimeRoll=parseInt(dimeRoll)*5||0;
  sum+=dimeRoll;
  let nickelRoll=document.getElementById("nickel-roll").value;
  nickelRoll=parseInt(nickelRoll)*2||0;
  sum+=nickelRoll;
  let pennyRoll=document.getElementById("penny-roll").value;
  pennyRoll=parseInt(pennyRoll)*.50||0;
  sum+=pennyRoll;

  if (action==="display sum"){
    return sum.toFixed(2);
  }


  let target=document.getElementById("target").value||0;
  target=parseFloat(target);
  
  let diff=target-sum;
  diff = Math.abs(diff);

  if(sum<target){
    document.querySelector(".over-under").innerHTML=`Short: -$${diff.toFixed(2)}`;
  }else if(sum>target){
    document.querySelector(".over-under").innerHTML=`Over: +$${diff.toFixed(2)}`;
  }else if(sum===target){
    document.querySelector(".over-under").innerHTML=`Over/Short: $0.00`;
  }else{
    return;
  }
}
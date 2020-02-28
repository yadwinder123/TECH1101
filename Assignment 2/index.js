const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const amount = document.querySelector("#max");

const tax = document.querySelector("#go");
const rate1 = document.querySelector("#rate");
const Earnings1 = document.querySelector("#Earnings");
const err = document.querySelector("#error");

function calctaxes(){
    const res = amount.value;
   let x;
   let y;
     if (res <= 48535){
        x=(res*.15).toFixed(2);
        tax.textContent='$'+x;
        rate1.textContent=(x/res*100).toFixed(2);
        y=(res-x).toFixed(2);
         Earnings1.textContent='$'+y;
    }
     else if(res>=48535 && res<97069){
        x = ((res-48535) * .205 + 7280).toFixed(2);
       tax.textContent='$'+x;
       rate1.textContent=(x/res*100).toFixed(2);
       y= (res-x).toFixed(2);
       Earnings1.textContent='$'+y;
     }
  else if(res>=97069 && res<150473){
        x = ((res-97069) * .26 + 17230).toFixed(2);
        tax.textContent='$'+x;
        rate1.textContent=(x/res*100).toFixed(2);
        y=(res-x).toFixed(2);
        Earnings1.textContent='$'+y;
      }
  else if(res>=150473 && res<214368){
      x= ((res-150473) * .29 + 31115).toFixed(2);
      tax.textContent='$'+x;
      rate1.textContent=(x/res*100).toFixed(2);
      y=(res-x).toFixed(2);
      Earnings1.textContent='$'+y;
     }
  else if(res>='a' || res>='A'){
    err.textContent="Error : Enter a number";
    }
  else{
      x = ((res-214368) * .33 + 49645).toFixed(2);
     tax.textContent='$'+x;
     rate1.textContent=(x/res*100).toFixed(2);
      y=(res-x).toFixed(2);
      Earnings1.textContent='$'+y;
      }
    }
function clearFn() {
    amount.value = null;
    tax.textContent = null;
    rate1.textContent = null;
    Earnings1.textContent = null;
    err.textContent = null;
}

submit.addEventListener("click", calctaxes);


clear.addEventListener("click", clearFn);

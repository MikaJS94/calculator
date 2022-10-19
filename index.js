const dzialanie = document.querySelector(".aktualne_dzialanie");
const liczba = document.querySelectorAll(".liczba");
const operatory = document.querySelectorAll(".operator");
const usun = document.querySelector(".usun");
const poprzednie = document.querySelector(".poprzednie_dzialanie");
var wpis = "";
let operator = "";
let a = "";
let b = "";


function wypisz (wpisz)
{
   
   if(wpisz == ".")
   {
   if(!(a.includes(wpisz)))
   {
      a = a.toString() + wpisz.toString() ;
   }
   }
   else a = a.toString() + wpisz.toString() ;
   
   dzialanie.innerText = a;
   
   
   console.log(a);
   console.log(b);
   
 
}

function popdzial (wpisz)
   {
      b = b.toString()+a;
      a="";
      b = b.toString() + wpisz.toString() ;
      
      poprzednie.innerText = b;
      
      dzialanie.innerText = "";
      
   }

usun.addEventListener("click",()=> {dzialanie.innerText = ""; a="";poprzednie.innerText = ""});

liczba.forEach((element)=> {element.addEventListener("click",()=> 
{wpis = element.innerText;
   wypisz (wpis);
}
)});

operatory.forEach((element)=>{
   element.addEventListener("click",()=>
   {
      
      
      operator = element.innerText;
      popdzial(operator);
      dzialanie.innerText = "";
      
   }
   )
});


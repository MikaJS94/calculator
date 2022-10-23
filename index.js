const aktualne_dzialanie = document.querySelector(".aktualne_dzialanie");
const liczba = document.querySelectorAll(".liczba");
const operatory = document.querySelectorAll(".operator");
const usun = document.querySelector(".usun");
const poprzednie_dzialanie = document.querySelector(".poprzednie_dzialanie");
let liczby = "";
let operator = undefined;
let akt_liczba = "";
let pop_liczba = "";
let pop;
let akt;
let akt_operator;


// function wypisz (wpisz)
// {
   
//    if(wpisz == ".")
//    {
//    if(!(a.includes(wpisz)))
//    {
//       a = a.toString() + wpisz.toString() ;
//    }
//    }
//    else a = a.toString() + wpisz.toString() ;
   
//    dzialanie.innerText = a;
   
   
//    console.log(a);
//    console.log(b);
   
 
// }

// function popdzial (wpisz)
//    {
//       b = b.toString()+a;
//       a="";
//       b = b.toString() + wpisz.toString() ;
      
//       poprzednie.innerText = b;
      
//       dzialanie.innerText = "";
      
//    }


liczba.forEach((element)=> {element.addEventListener("click",()=> 
{
   liczby = element.innerText;
   akt_liczba = akt_liczba + liczby;
   aktualne_dzialanie.innerText = akt_liczba;
   
   
}
)});

function oblicz()
{
   
   pop = parseFloat(pop_liczba);
   akt = parseFloat(akt_liczba);
   console.log(operator);
   console.log(pop);
   console.log(akt);
   if(isNaN(pop) || isNaN(akt)) {
      return
    }
    
   switch(operator)
   {
      case "+":
         pop = pop +akt;   
         break;
      case "-":
         pop = pop -akt;   
         break;
      case "/":
         pop = pop /akt;   
         break;
      case '×':
         pop = pop *akt;   
         break;
   }
   akt_liczba = pop.toString();
   
   console.log("dupa");
   

}

//usun.addEventListener("click",()=> {dzialanie.innerText = ""; a="";poprzednie.innerText = ""});

function aktulizuj(operator)
{
   poprzednie_dzialanie.innerText = akt_liczba.toString()+ operator;
   


      pop_liczba = akt_liczba.toString();
      akt_liczba = "";
      aktualne_dzialanie.innerText = "";
      akt_liczba = "";
}
function wybierzOperacje (operacja)
{
   oblicz();
   operator = operacja;
}
 

operatory.forEach((element)=>{
   element.addEventListener("click",()=>
   {  
      
      
      wybierzOperacje(element.innerText);  
      aktulizuj(element.innerText);   
      
   }
)});
   

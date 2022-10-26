const aktualne_dzialanie = document.querySelector(".aktualne_dzialanie");
const liczba = document.querySelectorAll(".liczba");
const operatory = document.querySelectorAll(".operator");
const usun = document.querySelector(".usun");
const wyczysc = document.querySelector(".wyczysc");
const poprzednie_dzialanie = document.querySelector(".poprzednie_dzialanie");
const rownosc= document.querySelector(".rownosc");
const special = document.querySelectorAll(".special");
let liczby = "";
let operator = undefined;
let akt_liczba = "";
let pop_liczba = "";
let pop;
let akt;
let akt_operator;




liczba.forEach((element)=> {element.addEventListener("click",()=> 
{

   
   if(element.innerText === '.' && akt_liczba.includes('.'))
      {
            return     
      }
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
   operator = undefined;

}

wyczysc.addEventListener("click",()=> {poprzednie_dzialanie.innerText = ""; akt_liczba=""; pop_liczba="";aktualne_dzialanie.innerText = ""; operator=undefined; });
usun.addEventListener("click",()=>{akt_liczba = akt_liczba.slice(0,-1);  aktualne_dzialanie.innerText = akt_liczba;});
rownosc.addEventListener("click",()=> {
   oblicz();
   akt_liczba = pop.toString();
   aktualne_dzialanie.innerText = akt_liczba;
   pop_liczba = undefined;
   poprzednie_dzialanie.innerText = "";
   console.log(pop);

});

function aktulizuj(operator)
{
      if(akt_liczba != "")
      {

         poprzednie_dzialanie.innerText = akt_liczba.toString()+ operator;
         pop_liczba = akt_liczba.toString();
         akt_liczba = "";
         aktualne_dzialanie.innerText = "";
         akt_liczba = "";
      }
      else {
         poprzednie_dzialanie.innerText = pop_liczba.toString()+ operator;
      }
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

special.forEach((element)=>{
   element.addEventListener("click",()=>
   {
      const spec_operator = element.innerText;
      if(aktualne_dzialanie.innerText !="" ){
      
      switch(spec_operator)
      {
         case "√":
         poprzednie_dzialanie.innerText = poprzednie_dzialanie.innerText + `√${aktualne_dzialanie.innerText}`;
         akt_liczba = Math.sqrt(parseFloat(akt_liczba)).toString();
         break;
         case "^":
            poprzednie_dzialanie.innerText = poprzednie_dzialanie.innerText + `sqrt(${aktualne_dzialanie.innerText})`;
            akt_liczba = Math.pow(parseFloat(akt_liczba),2).toString();
            break;


      }
      aktualne_dzialanie.innerText = "";
      }
        
   }
   
   
   )

});



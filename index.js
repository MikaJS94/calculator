const dzialanie = document.querySelector(".aktualne_dzialanie");
const liczba = document.querySelectorAll(".liczba");

var wpis = "";
let a = "";

liczba.forEach((element)=> {element.addEventListener("click",()=> 
{wpis = element.innerText;
   a = a.toString() + wpis.toString() ;
dzialanie.innerText = a;
console.log(a);

}
    


)});


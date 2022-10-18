const dzialanie = document.querySelector(".aktualne_dzialanie");
const liczba = document.querySelectorAll(".liczba");

var wpis = "";

liczba.forEach((element)=> {element.addEventListener("click",()=> 
{wpis = element.innerText;
dzialanie.innerText = wpis;
console.log(wpis);

}
    


)});


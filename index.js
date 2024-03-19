import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {
let txt=`<table>`;
for (let index=0; index<lista.length; index++){
    txt+=`
        <tr>
            <td class = "gyumolcs">${lista[index].nev}</td>
            <td>${lista[index].tomeg}</td>
            <td>${lista[index].ar}</td>
        </tr>
        `;
}
txt+=`</table>`;
return txt;
}
const TABLA = document.getElementById("feladat_1");
TABLA.innerHTML=letrehozTablazat(GYUMOLCSOK);
// 2. feladat
function osszesitAr(lista) {
    let osszAr=0;
    for(let index=0;index<lista.length;index++){
        osszAr+=lista[index].ar;
    }
    return osszAr;
}
function osszesitTomeg(lista){
    let osszTomeg=0;
    for(let index=0;index<lista.length;index++){
        osszTomeg+=lista[index].tomeg;
    }
    return osszTomeg;
}
const osszesit=document.getElementById("feladat_2");
osszesit.innerHTML=`A gyümölcsök súlya összesen:${osszesitTomeg(GYUMOLCSOK)}g<br>A gyümölcsök ára összesen:${osszesitAr(GYUMOLCSOK)}ft`;

// 3. feladat
const VASAROL=document.getElementById("feladat_3");
const GYUMOLCSELEM=document.querySelectorAll(".gyumolcs");

function vasarol(GYUMOLCSOK) {
    for (let index=0; index<GYUMOLCSELEM.length;index++){
        GYUMOLCSELEM[index].addEventListener("click",kattintas);
    }
function kattintas(event){
    if(!vasarolt.includes(event.target.innerHTML)){
        vasarolt.push(event.target.innerHTML);
        VASAROL.innerHTML=`${vasarolt}`;
        torolEsemeny.classList.add("hide");
    }
}

}
vasarol();

// 4. feladat
const TORLESGOMB=document.getElementById("feladat_4");
TORLESGOMB.innerHTML+="<input type='button' value='törlés'>";
TORLESGOMB.addEventListener("click",torolEsemeny);
const TORLES=document.getElementById("torles");
console.log(TORLES)

function torolEsemeny() {
    for(let index=0;index<=vasarolt.length;index++){
        vasarolt.pop();
    }
    vasarolt.pop();
    VASAROL.innerHTML=`${vasarolt}`;
    TORLES.classList.remove("hide");

}
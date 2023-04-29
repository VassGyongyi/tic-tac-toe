import Szemely from "./Szemely.js"
$(function(){
const szuloElem = $(".tarolo")
const szemely1 =new Szemely("Béla", 1968, szuloElem)
const szemely2 =new Szemely("Jolán", 1969, szuloElem)
//console.log(szemely1.nev)
szemely1.nev="Kálmán"
//console.log(szemely1.nev)
szemely1.masikNev="Géza"
//console.log(szemely1.masikNev)
//console.log(szemely1.getszulNev())

})
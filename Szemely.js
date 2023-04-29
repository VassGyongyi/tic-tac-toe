class Szemely {
  #szulNev;
  constructor(nev, szulDatum, szuloElem) {
    this.nev = nev;
    this.szulDatum = szulDatum;
    this.#szulNev = nev;
    this.setszulNev(nev);
    szuloElem.append(`<div class="szemely">
                    <h3>${this.nev}</h3>
                    <p>${this.kor()} éves</p>
                    </div>`)

    this.szemelyElem=$(".szemely:last-child") //csak az utolsó div elemet teszi bele
    console.log(this.szemelyElem)     
    this.szemelyElem.on("click", ()=>
    {
        console.log(this.nev)
    })               
  }

  getszulNev() {
    return this.#szulNev;
  }

  /*vagy:
get Szilnev(){
    return this.#szulNev}*/

setszulNev(ertek){
        return this.#szulNev=ertek;
    }

 kor()  {
    const d = new Date();
    let year = d.getFullYear();
    let kor = year - this.szulDatum;
    return kor;
 }
}

export default Szemely;

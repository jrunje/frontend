
//Funkcija za prikaz korisnika

const Profil = () => {

    const Korisnik = {
        //JavaScript objekat se sastoji od parova ključ-vrijednost
        "ime": "Jelena",
        "prezime": "Runje",
        "godine": 38,
        "vozacka": true,
        "vjestine": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"],
        "adresa": {
            "ulica": "Koludrovac 8",
            "grad": "Kaštel Štafilić",
            "pbroj": 21217,

        }
    }

    //Ova komponenta vraća informacije o korisniku
    return (

        <div className ="container">
            {console.log(Korisnik)};

            <h1>Profil korisnika</h1>
            <p>Ime: {Korisnik.ime}</p>
            <p>Prezime: {Korisnik.prezime}</p>
            <p>Godine: {Korisnik.godine}</p>
            <p>Vozacka dozvola: {Korisnik.vozacka}</p>
            <div>Vještine:
                <ul>
    
                    {
                //Map koristimo za prolazak kroz niz (i ispisivanje vrijenosti u ovom slučaju)
                    Korisnik.vjestine.map(
                    (vjestina, index) => (
                       <li>{index+1}. {vjestina}</li>
                    ))
                    }

                 </ul>   


            </div>
            <p>Ulica: {Korisnik.adresa.ulica}</p>
            <p>Grad: {Korisnik.adresa.grad}</p>
            <p>Postanski broj: {Korisnik.adresa.pbroj}</p>
        </div>
    )
}

export default Profil;
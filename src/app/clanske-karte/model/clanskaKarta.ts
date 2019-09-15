import { Trening } from "app/treninzi/model/trening";
import { Korisnik } from "app/korisnici/model/korisnik";

export class ClanskaKarta {
    clanskaKartaID: number;
    datumUplate: Date;
    datumVazenja: Date;
    status: string;
    brojIskoriscenihTermina: number;
    trening: Trening;
    korisnik: Korisnik;
    termini: Termin[];
}

export class Termin {
    terminID: TerminID;
    datumOdrzavanja: Date;
    vremeOdrzavanja: string;
}

export class TerminID {
    clanskaKartaID: number;
    redniBroj: number;
}
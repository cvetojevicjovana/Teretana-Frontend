export class Korisnik {
  korisnikID: number;
  imePrezime: string;
  email: string;
  telefon: string;
  radnik: Radnik;
}

export class Radnik {
  radnikID: number;
  imePrezime: string;
  username: string;
  password: string;
  telefon: string;
}
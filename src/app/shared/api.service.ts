import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik, Radnik } from 'app/korisnici/model/korisnik';
import { Trening } from 'app/treninzi/model/trening';
import { ClanskaKarta } from 'app/clanske-karte/model/clanskaKarta';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private GET_KORISNICI = 'http://localhost:9001/korisnik/all';
    private SAVE_KORISNIK = 'http://localhost:9001/korisnik/new';
    private SEARCH_KORISNIK = 'http://localhost:9001/korisnik/search?';
    private PUT_KORISNIK = 'http://localhost:9001/korisnik/update';
    private GET_TRENINZI = 'http://localhost:9001/trening/all';
    private SEARCH_TRENING = 'http://localhost:9001/trening/search?';
    private PUT_TRENING = 'http://localhost:9001/trening/update';
    private SAVE_TRENING = 'http://localhost:9001/trening/new';
    private GET_CLANSKE_KARTE = 'http://localhost:9001/clanskaKarta/all';
    private SEARCH_CLANSKE_KARTE = 'http://localhost:9001/clanskaKarta/search?';
    private SAVE_CLANSKA_KARTA = 'http://localhost:9001/clanskaKarta/new';
    private PUT_CLANSKA_KARTA = 'http://localhost:9001/clanskaKarta/update/';
    private FIND_KORISNIK = 'http://localhost:9001/korisnik/';
    private FIND_TRENING = 'http://localhost:9001/trening/';
    private FIND_RADNIK = 'http://localhost:9001/radnik/username=';
    private LOGIN = 'http://localhost:9001/radnik/login?'

    constructor(private http: HttpClient) { }

    getKorisnici(): Observable<Korisnik[]> {
        return this.http.get<Korisnik[]>(this.GET_KORISNICI);
    }

    saveKorisnik(korisnik: Korisnik): Observable<Korisnik> {
        return this.http.post<Korisnik>(this.SAVE_KORISNIK, korisnik);
    }

    serachKorisnik(id: number, imePrezime: string, radnik: string): Observable<Korisnik[]> {
        var url_nastavak = '';
        if (id != undefined) { url_nastavak = url_nastavak + '&id=' + id; }
        if (imePrezime != undefined) { url_nastavak = url_nastavak + '&imePrezime=' + imePrezime; }
        if (radnik != undefined) { url_nastavak = url_nastavak + '&radnik=' + radnik; }
        return this.http.get<Korisnik[]>(this.SEARCH_KORISNIK + url_nastavak);
    }

    putKorisnik(korisnik: Korisnik): Observable<Korisnik> {
        return this.http.put<Korisnik>(this.PUT_KORISNIK, korisnik);
    }

    getTreninzi(): Observable<Trening[]> {
        return this.http.get<Trening[]>(this.GET_TRENINZI);
    }

    serachTreninzi(id: number, naziv: string, opis: string, cena: number): Observable<Trening[]> {
        var url_nastavak = '';
        if (id != undefined) { url_nastavak = url_nastavak + '&id=' + id; }
        if (naziv != undefined) { url_nastavak = url_nastavak + '&naziv=' + naziv; }
        if (opis != undefined) { url_nastavak = url_nastavak + '&opis=' + opis; }
        if (cena != undefined) { url_nastavak = url_nastavak + '&cena=' + cena; }
        return this.http.get<Trening[]>(this.SEARCH_TRENING + url_nastavak);
    }

    putTrening(trening: Trening): Observable<Trening> {
        return this.http.put<Trening>(this.PUT_TRENING, trening);
    }

    saveTrening(trening: Trening): Observable<Trening> {
        return this.http.post<Trening>(this.SAVE_TRENING, trening);
    }

    getClanskeKarte(): Observable<ClanskaKarta[]> {
        return this.http.get<ClanskaKarta[]>(this.GET_CLANSKE_KARTE);
    }

    searchClanskeKarte(korisnik: string, trening: string, status: string): Observable<ClanskaKarta[]> {
        var url_nastavak = '';
        if (korisnik != undefined) { url_nastavak = url_nastavak + '&korisnik=' + korisnik; }
        if (trening != undefined) { url_nastavak = url_nastavak + '&trening=' + trening; }
        if (status != undefined) { url_nastavak = url_nastavak + '&status=' + status; }
        return this.http.get<ClanskaKarta[]>(this.SEARCH_CLANSKE_KARTE + url_nastavak);
    }

    saveClanskaKarta(clanskaKarta: ClanskaKarta): Observable<ClanskaKarta> {
        return this.http.post<ClanskaKarta>(this.SAVE_CLANSKA_KARTA, clanskaKarta);
    }

    putClanskaKarta(clanskaKarta: ClanskaKarta): Observable<ClanskaKarta> {
        return this.http.put<ClanskaKarta>(this.PUT_CLANSKA_KARTA + clanskaKarta.clanskaKartaID, clanskaKarta);
    }

    findKorisnik(id: number): Observable<Korisnik> {
        return this.http.get<Korisnik>(this.FIND_KORISNIK + id);
    }

    findTrening(id: number): Observable<Trening> {
        return this.http.get<Trening>(this.FIND_TRENING + id);
    }

    findRadnik(username: string): Observable<Radnik> {
        return this.http.get<Radnik>(this.FIND_RADNIK + username);
    }

    loginRadnik(username: string, password: string): Observable<Radnik> {
        return this.http.get<Radnik>(this.LOGIN + 'username=' + username + '&password=' + password);
    }
}
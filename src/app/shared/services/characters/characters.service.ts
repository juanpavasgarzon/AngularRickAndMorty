import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterResponseInterface} from "@interfaces/characters/character-response.interface";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http: HttpClient = inject(HttpClient);

  getCharacters(route: string): Observable<CharacterResponseInterface> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "*/*",
    });

    return this.http.get<CharacterResponseInterface>(route, {headers: headers});
  }
}

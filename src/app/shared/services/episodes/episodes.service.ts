import {inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EpisodeResponseInterface} from "@interfaces/episodes/episode-response.interface"
import {ENDPOINTS_PROVIDER} from "@constants/endpoints.constants";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private http: HttpClient = inject(HttpClient);
  private endpoints = inject(ENDPOINTS_PROVIDER);

  getEpisodes(): Observable<EpisodeResponseInterface> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "*/*",
    });

    return this.http.get<EpisodeResponseInterface>(this.endpoints.episodes, {headers: headers})
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocationResponseInterface} from "@interfaces/locations/location-response.interface";
import {ENDPOINTS_PROVIDER} from "@constants/endpoints.constants";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private http: HttpClient = inject(HttpClient);
  private endpoints = inject(ENDPOINTS_PROVIDER);

  getLocations(): Observable<LocationResponseInterface> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "*/*",
    });

    return this.http.get<LocationResponseInterface>(this.endpoints.locations, {headers: headers})
  }
}

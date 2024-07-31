import {InjectionToken} from "@angular/core";

export interface IEndpoints {
  characters: string;
  locations: string;
  episodes: string;
}

export const ENDPOINTS_PROVIDER: InjectionToken<IEndpoints> = new InjectionToken<IEndpoints>(
  'endpoints'
);

export const endpoints: IEndpoints = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

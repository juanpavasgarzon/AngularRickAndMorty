import {OriginInterface} from "./origin.interface";
import {LocationInterface} from "./location.interface";

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginInterface;
  location: LocationInterface;
  image: string;
  episode: string[]
}

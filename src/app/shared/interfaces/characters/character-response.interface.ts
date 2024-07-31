import {InfoInterface} from "./info.interface";
import {CharacterInterface} from "./character.interface";

export interface CharacterResponseInterface {
  info: InfoInterface,
  results: CharacterInterface[]
}

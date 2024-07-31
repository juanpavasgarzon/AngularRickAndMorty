import {InfoInterface} from "./info.interface";
import {LocationInterface} from "./location.interface";

export interface LocationResponseInterface {
  info: InfoInterface;
  results: LocationInterface[]
}

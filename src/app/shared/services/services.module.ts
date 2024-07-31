import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConstantsModule} from "@constants/constants.module";
import {CharactersService} from "@services/characters/characters.service";
import {EpisodesService} from "@services/episodes/episodes.service";
import {LocationsService} from "@services/locations/locations.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConstantsModule,
  ],
  providers: [
    CharactersService,
    EpisodesService,
    LocationsService
  ]
})
export class ServicesModule {
}

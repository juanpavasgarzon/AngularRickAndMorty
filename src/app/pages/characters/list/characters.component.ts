import {Component, inject, OnInit} from '@angular/core';
import {CharacterInterface} from "@interfaces/characters/character.interface";
import {InfoInterface} from "@interfaces/characters/info.interface";
import {CharactersService} from '@services/characters/characters.service';
import {ServicesModule} from "@services/services.module";
import {MatCardContent} from "@angular/material/card";
import {CardComponent} from "@components/card/card.component";
import {CommonModule} from "@angular/common";
import {ConstantsModule} from "@constants/constants.module";
import {ENDPOINTS_PROVIDER, IEndpoints} from "@constants/endpoints.constants";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CharacterResponseInterface} from "@interfaces/characters/character-response.interface";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    ServicesModule,
    MatCardContent,
    CardComponent,
    ConstantsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export default class CharactersComponent implements OnInit {
  public characters: CharacterInterface[] = [];
  public info: InfoInterface = {count: 0, pages: 0}
  public isLoading: boolean = true;
  public page?: string;

  private endPoints: IEndpoints = inject(ENDPOINTS_PROVIDER)
  private charactersService: CharactersService = inject(CharactersService);

  private OnFetch(route: string): void {
    this.charactersService.getCharacters(route)
      .subscribe((response: CharacterResponseInterface): void => {
        const url: URL = new URL(route)
        this.page = url.searchParams.get('page') ?? '1';
        this.characters = response.results;
        this.info = response.info;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.OnFetch(this.endPoints.characters);
  }

  onNextPage(): void {
    if (this.info.next) {
      this.isLoading = true;
      this.OnFetch(this.info.next);
    }
  }

  onPreviousPage(): void {
    if (this.info.prev) {
      this.isLoading = true;
      this.OnFetch(this.info.prev);
    }
  }

  protected readonly window = window;
}

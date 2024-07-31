import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) image!: string;
  @Input({required: true}) name!: string;
}

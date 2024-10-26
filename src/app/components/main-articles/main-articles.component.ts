import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediumCardComponent } from '../cards/medium-card/medium-card.component';

@Component({
  selector: 'app-main-articles',
  standalone: true,
  imports: [CommonModule, MediumCardComponent],
  templateUrl: './main-articles.component.html',
  styleUrl: './main-articles.component.scss'
})
export class MainArticlesComponent {
  articles = Array(6)
}

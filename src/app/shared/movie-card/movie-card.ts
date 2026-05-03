import { Component, input, output } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DurationPipe } from '../../pipes/duration-pipe';

@Component({
  selector: 'app-movie-card',
  imports: [DurationPipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  movie = input.required<Movie>();

  cardClicked = output<Movie>();
  favoriteToggled = output<Movie>();

  onCardClick(): void {
    this.cardClicked.emit(this.movie());
  }

  onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.movie());
  }
}

import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { Router } from '@angular/router';
import { MovieCard } from '../../shared/movie-card/movie-card';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, AutofocusDirective, MovieCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private movieService = inject(MovieService);
  private router = inject(Router);

  movies = this.movieService.movies;
  selectedGenre = signal<string>('All');
  searchQuery = signal<string>('');

  filteredMovies = computed(() => {
    const genre = this.selectedGenre();
    const query = this.searchQuery().toLowerCase().trim();
    let movies = this.movies();

    if (genre !== 'All') {
      movies = movies.filter((m) => m.genre === genre);
    }

    if (query) {
      movies = movies.filter((m) => m.title.toLowerCase().includes(query));
    }

    return movies;
  });

  uniqueGenres = computed(() => {
    const genres = this.movies().map((m) => m.genre);
    return ['All', ...new Set(genres)];
  });

  onCardClicked(movie: Movie): void {
    this.router.navigate(['/movies', movie.id]);
  }

  onFavoriteToggled(movie: Movie): void {
    this.movieService.toggleFavorite(movie);
  }

  filterByGenre(genre: string): void {
    this.selectedGenre.set(genre);
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }
}

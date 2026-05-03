import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES_DATA } from '../data/movies.data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly _movies = signal<Movie[]>(MOVIES_DATA);
  movies = this._movies.asReadonly();
  favorites = computed(() => this._movies().filter((m) => m.isFavorite));

  getById(id: number): Movie | undefined {
    return this._movies().find((m) => m.id === id);
  }

  toggleFavorite(movie: Movie): void {
    this._movies.update((movies) =>
      movies.map((m) => (m.id === movie.id ? { ...m, isFavorite: !m.isFavorite } : m)),
    );
  }
}

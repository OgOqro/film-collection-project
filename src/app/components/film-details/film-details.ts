import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { DurationPipe } from '../../pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [CommonModule, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private movieService = inject(MovieService);

  movieId = signal<number | null>(null);
  movie = computed(() => {
    const id = this.movieId();
    return id !== null ? (this.movieService.getById(id) ?? null) : null;
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieId.set(id);
  }

  toggleFavorite(): void {
    const m = this.movie();
    if (m) {
      this.movieService.toggleFavorite(m);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

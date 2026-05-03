import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { filter } from 'rxjs';

interface Breadcrumbs {
  text: string;
  url: string | null;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  private router = inject(Router);
  private movieService = inject(MovieService);

  private navigationEnd = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
  );

  breadcrumbs = computed((): Breadcrumbs[] => {
    this.navigationEnd(); // track route changes
    const url = this.router.url;

    if (url.startsWith('/movies/')) {
      const id = Number(url.split('/movies/')[1]);
      const movie = this.movieService.getById(id);
      return [
        { text: 'Home', url: '/home' },
        { text: movie?.title ?? 'Film Not Found', url: null },
      ];
    }

    if (url.startsWith('/about')) {
      return [
        { text: 'Home', url: '/home' },
        { text: 'About', url: null },
      ];
    }

    return [{ text: 'Home', url: null }];
  });
}

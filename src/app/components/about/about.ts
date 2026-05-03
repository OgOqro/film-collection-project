import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private router = inject(Router);
  concepts = [
    {
      title: 'Signals & Computed',
      description:
        'Reactive state management using Angular Signals. All UI updates are driven by signal() and computed() — no manual change detection needed.',
    },
    {
      title: 'Standalone Components',
      description:
        'Every component is standalone with its own imports array, removing the need for NgModules entirely.',
    },
    {
      title: 'input() & output()',
      description:
        'Modern signal-based input() and output() APIs replace the traditional @Input() and @Output() decorators for cleaner component communication.',
    },
    {
      title: 'Control Flow Syntax',
      description:
        'Built-in @if, @for, and @else template syntax replaces *ngIf and *ngFor structural directives for more readable templates.',
    },
    {
      title: 'Angular Router',
      description:
        'Client-side routing with paramMap for dynamic film detail pages, RouterLink for navigation, and RouterLinkActive for active link styling.',
    },
    {
      title: 'Dependency Injection',
      description:
        'Services are registered globally with providedIn: root, acting as a singleton store shared across all components.',
    },
    {
      title: 'Custom Directive',
      description:
        'A custom autofocus directive using AfterViewInit automatically focuses the search input when the home page loads.',
    },
    {
      title: 'Custom Pipe',
      description:
        'A reusable custom pipe which turns number of minutes into human-readable duration format.',
    },
  ];

  goHome(): void {
    this.router.navigate(['/home']);
  }
}


# 🎬 Film Collection

Film Collection is a single-page application built with Angular 20. It lets you browse a collection of films, filter them by genre, search by title, view detailed information for each film, and manage your personal favorites — Created entirely by Angular's modern reactive primitives.

---

##  Features

-  **Live search** — filter films by title as you type, with auto-focus on page load
-  **Genre filtering** — filter the collection by genre with active state indicators
-  **Favorites** — toggle favorite status from both the card list and the detail page
-  **Film detail page** — full film info with poster, metadata, description, and favorite toggle
-  **Breadcrumb navigation** — always shows the user's current location in the app
-  **Not found page** — handles invalid film URLs and unknown routes gracefully
-  **Responsive** — works on mobile, tablet, and desktop

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — v18 or higher
- [npm](https://www.npmjs.com/) — comes with Node.js
- [Angular CLI](https://angular.io/cli) — v18 or higher

```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/OgOqro/film-collection.git
cd film-collection
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
ng serve
```

4. **Open in browser**

```
http://localhost:4200
```

---

##  Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/               # Sticky navigation header
│   │   ├── footer/               # App footer with GitHub link
│   │   ├── breadcrumb/           # Reactive breadcrumb navigation
│   │   └── movie-card/           # Standalone film card component
│   ├── pages/
│   │   ├── home-page/            # Film grid with search and filters
│   │   ├── film-detail/          # Individual film detail view
│   │   └── about/                # About page with concepts overview
│   ├── services/
│   │   └── movie.service.ts      # Global singleton film state
│   ├── models/
│   │   └── movie.model.ts        # Movie interface
│   ├── directives/
│   │   └── autofocus.directive.ts # Custom autofocus directive
│   ├── data/
│   │   └── movies.data.ts        # Static mock film data
│   └── app.routes.ts             # Application routes
```

---

##  Angular Concepts Used

| Concept | Usage |
|---|---|
| **Signals** (`signal()`) | Reactive state for film list, search query, selected genre |
| **Computed signals** (`computed()`) | Derived filtered/searched film list, breadcrumbs, favorites |
| **`input()` / `output()`** | Signal-based component communication in `MovieCardComponent` |
| **Standalone components** | All components use `standalone: true` with their own `imports` |
| **`@if` / `@for`** | Built-in control flow syntax throughout all templates |
| **Custom directive** | `AutofocusDirective` focuses search input on page load |
| **Angular Router** | Dynamic routes (`/movies/:id`), `RouterLink`, `RouterLinkActive` |
| **`inject()`** | Functional dependency injection in `BreadcrumbComponent` |
| **`asReadonly()`** | Service exposes read-only signal to prevent external mutation |

---

##  Routes

| Path | Component | Description |
|---|---|---|
| `/home` | `HomePage` | Film grid with search and genre filters |
| `/movies/:id` | `FilmDetailComponent` | Individual film detail page |
| `/about` | `AboutComponent` | About page |
| `**` | redirect | Redirects unknown routes to `/home` |

---

##  Author

**Okropir Gudavadze**

- GitHub: [@OgOqro](https://github.com/OgOqro)

---


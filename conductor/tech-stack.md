# Technology Stack

## Core Technologies
-   **Frontend Framework:** Vue.js 2
    -   Chosen for its reactive data binding and robust ecosystem.
-   **UI Library:** Vuetify 2
    -   Provides a clean, Material Design-inspired component library for a modern look and feel.
-   **State Management:** Vuex
    -   Used to manage global game state, user preferences, and historical data.

## Integration & Infrastructure
-   **Map & Imagery Provider:** Mapillary
    -   Utilizes Mapillary JS for rendering street-level imagery and navigation.
    -   Provides an open-source alternative to Google Street View.
-   **Hosting & Deployment:** Railway.com
    -   Automated deployments and seamless infrastructure management.
    -   Configured via `Dockerfile` and Railway-specific environment variables.
-   **Backend Services:** Firebase
    -   Utilized for multiplayer room management, real-time synchronization, and data persistence.

## Development & Testing
-   **Testing Frameworks:**
    -   **Unit Testing:** Jest (used for component and utility testing).
    -   **E2E Testing:** Cypress (used for validating full game flows).
    -   **Mutation Testing:** Stryker (used to ensure high-quality test coverage).
-   **Linting & Formatting:** ESLint & Prettier
    -   Ensures code consistency and follows project style guidelines.
-   **Build Tools:** Vue CLI 5
    -   Handles asset bundling, transpilation, and development server management.

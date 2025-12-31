# Product Guidelines

## Brand Voice & Tone
-   **Adventurous & Curious:** The language should evoke the excitement of travel and discovery. Use phrases like "Explore," "Discover," and "Where to next?" to engage users.
-   **Encouraging & Accessible:** The game is challenging, so the tone should be supportive. "Nice guess!" or "You were close!" helps keep casual players engaged.
-   **Clear & Concise:** Instructions and UI elements should be straightforward, avoiding technical jargon related to GIS or mapping unless necessary for advanced features.

## Visual Identity
-   **Clean & Immersive:** The UI should be minimal to maximize the screen real estate for the Mapillary street view imagery.
-   **Vibrant & Global:** Use a color palette that reflects the diversity of the world (e.g., earth tones mixed with vibrant accents for markers and scores).
-   **Iconography:** Use recognized mapping and travel icons (pins, globes, compasses) that are consistent with the new Mapillary integration.

## Design Principles
-   **Mobile-First:** Ensure the game is fully playable and responsive on mobile devices, as many users will play on the go.
-   **Performance-Oriented:** Mapillary imagery can be heavy; prioritize loading states and smooth transitions to maintain immersion.
-   **Accessibility:** Adhere to WCAG standards to ensure the game is playable by users with different abilities (e.g., keyboard navigation for guessing).

## Coding Conventions (Frontend)
-   **Component Structure:** Follow Vue.js best practices, keeping components small and focused.
-   **Styling:** Continue using SCSS/Sass or Vuetify's system, but ensure styles are scoped or organized to avoid conflicts with new Mapillary styles.
-   **State Management:** Use Vuex for managing game state (round number, score, location data) clearly and predictably.

# Product Guide

## Vision
GeoGuess is an open-source geography game that challenges players to guess random locations around the world. This evolution of the project aims to transition from Google Maps StreetView to Mapillary to provide a cost-effective, open-access alternative, while modernizing the hosting infrastructure by deploying to Railway.com.

## Target Users
-   **Casual Gamers:** Individuals looking for a fun, accessible geography challenge.
-   **Geography Enthusiasts:** Players who enjoy exploring the world through immersive street-level imagery.
-   **Open Source Advocates:** Users who prefer open-data platforms like Mapillary over proprietary solutions.

## Key Features & Changes
-   **Mapillary Integration:**
    -   Replace Google Maps API and `gmap-vue` with Mapillary JS.
    -   Adapt game logic to consume Mapillary's image format, sequences, and navigation controls.
    -   Ensure accurate coordinate handling for guessing game mechanics using Mapillary data.
-   **Railway.com Deployment:**
    -   Containerize the application (optimize `Dockerfile` if needed) for Railway.
    -   Configure `railway.toml` or environment variables for seamless deployment.
    -   Ensure backend services (if any) and frontend assets are correctly served in the Railway environment.
-   **Core Gameplay Preservation:**
    -   Maintain the existing round-based guessing mechanics.
    -   Keep the scoring system based on distance accuracy.
    -   Preserve multiplayer capabilities (if feasible with new architecture).

## Tech Stack Transition
-   **Frontend:** Vue.js (Existing) -> Migrating map component to Mapillary JS.
-   **Hosting:** Netlify/Vercel (Old) -> Railway.com (New).
-   **Data Provider:** Google Maps API (Old) -> Mapillary API (New).

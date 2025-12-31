# Specification: Mapillary Integration & Railway Deployment

## Goal
Replace the Google Maps Street View integration with Mapillary JS for street-level imagery and configure the project for deployment on Railway.com.

## Core Features
1.  **Mapillary JS Component:**
    -   Create a new Vue component (`MapillaryView.vue`) that wraps the `mapillary-js` library.
    -   Ensure the component accepts coordinates (lat, lon) and initializes the viewer.
    -   Implement navigation controls (move, zoom) within the Mapillary viewer.
    -   Handle events for when the user moves to a new location (to update game state).
2.  **Railway Deployment Configuration:**
    -   Create a `Dockerfile` optimized for production (multi-stage build if possible).
    -   Create a `railway.toml` file to define build and start commands (if specific Railway config is needed beyond Docker).
    -   Document necessary environment variables (e.g., Mapillary Client ID).

## Tech Stack
-   **Frontend:** Vue.js 2
-   **Mapping:** `mapillary-js` (v4.x)
-   **Infrastructure:** Docker, Railway.com

## Constraints
-   Must maintain compatibility with Vue 2.
-   Mapillary Client ID must be secured via environment variables.
-   The existing game logic for distance calculation relies on coordinates; ensure Mapillary's returned coordinates are compatible.

## User Stories
-   As a player, I want to see street-level imagery from Mapillary so that I can guess my location.
-   As a developer, I want to deploy the application to Railway.com with a simple git push.

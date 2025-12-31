# Plan: Mapillary Integration & Railway Deployment

## Phase 1: Railway Configuration [checkpoint: e3a9619]
- [x] Task: Create Dockerfile for Production 22d988e
    - [ ] Subtask: Write a multi-stage `Dockerfile` (build stage with Node, production stage with Nginx or lightweight Node server).
    - [ ] Subtask: Test the Docker build locally to ensure it runs.
- [x] Task: Create Railway Configuration 6adb937
    - [ ] Subtask: Create `railway.toml` (optional, but good for specifying build commands).
    - [ ] Subtask: Document required environment variables (e.g., `VUE_APP_MAPILLARY_CLIENT_ID`) in a `.env.example`.
- [x] Task: Conductor - User Manual Verification 'Railway Configuration' (Protocol in workflow.md)

## Phase 2: Mapillary Component Implementation [checkpoint: 633fc54]
- [x] Task: Install Mapillary JS c8ebe9d
    - [ ] Subtask: Run `npm install mapillary-js`.
    - [ ] Subtask: Add the Mapillary CSS to the project (e.g., in `main.js` or `App.vue`).
- [x] Task: Create Mapillary Wrapper Component c081d5a
    - [ ] Subtask: Create `src/components/MapillaryView.vue`.
    - [ ] Subtask: Implement the `mounted` hook to initialize `Mapillary.Viewer`.
    - [ ] Subtask: Add props for `lat` and `lng`.
    - [ ] Subtask: Write a basic unit test to verify the component mounts.
- [x] Task: Integrate Component into Game Page 4d5ad3c
    - [ ] Subtask: Replace `StreetView` component usage in `src/pages/StreetView.vue` (or equivalent) with `MapillaryView`.
    - [ ] Subtask: Pass test coordinates to verify the viewer loads an image.
- [x] Task: Conductor - User Manual Verification 'Mapillary Component Implementation' (Protocol in workflow.md)

## Phase 3: Game Logic Adaptation [checkpoint: aa6b3d4]
- [x] Task: Handle Navigation Events a97e5fd
    - [ ] Subtask: Listen for the `image` event (or equivalent movement event) from Mapillary.
    - [ ] Subtask: Emit an event to the parent component with the new coordinates when the user moves.
- [x] Task: Verify Game Flow c92baa9
    - [ ] Subtask: Ensure the "Guess" functionality works with the current Mapillary location.
    - [ ] Subtask: Run E2E tests (Cypress) to check the basic game loop (load, move, guess).
- [x] Task: Conductor - User Manual Verification 'Game Logic Adaptation' (Protocol in workflow.md)

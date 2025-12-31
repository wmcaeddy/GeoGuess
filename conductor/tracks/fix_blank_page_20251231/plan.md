# Plan: Fix Blank Page and Asset Paths

## Phase 1: Asset Path & API Key Fixes
- [x] Task: Update Public Path Logic ba7dc39
    - [ ] Subtask: Modify `entrypoint.sh` to use an empty string default for `VUE_APP_PUBLIC_PATH`.
- [ ] Task: Add Runtime Safety Checks
    - [ ] Subtask: Update `MapillaryView.vue` to only initialize if a valid `accessToken` is provided.
    - [ ] Subtask: Add console logging to `StreetView.vue` to track lifecycle events.
- [ ] Task: Update Unit Tests
    - [ ] Subtask: Update `tests/unit/infra.spec.js` to verify new path logic.
- [ ] Task: Conductor - User Manual Verification 'Asset Path & API Key Fixes' (Protocol in workflow.md)

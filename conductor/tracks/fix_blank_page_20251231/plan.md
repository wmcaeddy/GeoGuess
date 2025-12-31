# Plan: Fix Blank Page and Asset Paths

## Phase 1: Asset Path & API Key Fixes [checkpoint: 3148601]
- [x] Task: Update Public Path Logic ba7dc39
    - [ ] Subtask: Modify `entrypoint.sh` to use an empty string default for `VUE_APP_PUBLIC_PATH`.
- [x] Task: Add Runtime Safety Checks 678c48f
    - [ ] Subtask: Update `MapillaryView.vue` to only initialize if a valid `accessToken` is provided.
    - [ ] Subtask: Add console logging to `StreetView.vue` to track lifecycle events.
- [x] Task: Update Unit Tests ba7dc39
    - [ ] Subtask: Update `tests/unit/infra.spec.js` to verify new path logic.
- [ ] Task: Conductor - User Manual Verification 'Asset Path & API Key Fixes' (Protocol in workflow.md)

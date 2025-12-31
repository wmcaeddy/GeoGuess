# Plan: Fix Railway Deployment Healthcheck

## Phase 1: Configuration & Entrypoint Fixes
- [x] Task: Update Nginx Config 4ff2d9c
    - [ ] Subtask: Add `listen [::]:PORT_HOLDER;` for IPv6 support.
    - [ ] Subtask: Ensure `PORT_HOLDER` is used correctly.
- [ ] Task: Harden Entrypoint Script
    - [ ] Subtask: Add `set -e` to fail on errors.
    - [ ] Subtask: Improve `sed` command for port replacement (use double quotes).
    - [ ] Subtask: Add debug logging (e.g., `echo "Listening on port ${PORT:-80}"`).
- [ ] Task: Update Unit Tests
    - [ ] Subtask: Update `tests/unit/infra.spec.js` to match new config.
    - [ ] Subtask: Verify port replacement logic with tests.
- [ ] Task: Conductor - User Manual Verification 'Configuration & Entrypoint Fixes' (Protocol in workflow.md)

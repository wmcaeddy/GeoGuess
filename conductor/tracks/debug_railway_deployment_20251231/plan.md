# Plan: Debug and Fix Railway Deployment

## Phase 1: Deep Inspection & Fix
- [x] Task: Verbose Entrypoint Logging 6e2b9cf
    - [ ] Subtask: Update `entrypoint.sh` to `cat /etc/nginx/conf.d/default.conf` before starting nginx.
    - [ ] Subtask: Print the value of `PORT` explicitly.
- [ ] Task: Fix Nginx Config Replacement
    - [ ] Subtask: Ensure `sed` isn't failing silently or producing invalid config.
    - [ ] Subtask: Simplify `nginx.conf` if necessary.
- [ ] Task: Local Reproduction Test
    - [ ] Subtask: Create a reproduction script to build and run the container locally with `PORT=3000`.
    - [ ] Subtask: Verify connection to localhost:3000.
- [ ] Task: Conductor - User Manual Verification 'Deep Inspection & Fix' (Protocol in workflow.md)

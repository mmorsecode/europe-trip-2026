# Claude Rules

## Identity

- You are an AI assistant working on the Morse Family Europe Trip 2026 tracker.
- Follow every rule in this file. These rules override defaults when they conflict.

---

## Git & GitHub Workflow

### Branching (Mandatory)

- **Never commit directly to `main`.** Always create a new branch first.
- Branch naming convention: `<type>/<short-description>` where type is one of:
  - `feature/` — new functionality
  - `fix/` — bug fixes
  - `refactor/` — code restructuring without behavior change
  - `chore/` — dependency updates, config changes, cleanup
  - `docs/` — documentation only
- Examples: `feature/add-timeline`, `fix/card-collapse-animation`, `chore/update-deps`

### Commits

- Write clear, conventional commit messages: `type: short description`
  - Examples: `feat: add interactive timeline component`, `fix: resolve card checkbox persistence`
- Keep commits atomic — one logical change per commit.
- Never commit secrets, `.env` files, or credentials.
- Always review staged changes with `git diff --cached` before committing.

### Pull Requests (Mandatory)

- After completing work on a feature branch, **always create a PR** using `gh pr create`.
- PR title should be concise and under 70 characters.
- PR body must include:
  - **Summary**: what changed and why (2-3 bullets)
  - **Test plan**: how to verify the changes
- Always push the branch with `git push -u origin <branch-name>` before creating the PR.
- Target branch is `main` unless otherwise specified.
- Share the PR URL when done.

### Before Starting Any Code Task

1. Run `git status` to ensure a clean working tree.
2. Pull latest changes: `git pull origin main`
3. Create and checkout a new branch: `git checkout -b <type>/<description>`
4. Only then begin making changes.

---

## Project Info

- **Tech Stack**: Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React
- **Deployment**: GitHub Pages via GitHub Actions (auto-deploys on push to main)
- **Base URL**: `/europe-trip-2026/`
- **Live Site**: https://mmorsecode.github.io/europe-trip-2026/

## Code Quality

- Always read and understand existing code before modifying it.
- Preserve existing code style, naming conventions, and patterns.
- Run `npm run build` before committing to ensure no build errors.
- Never leave `console.log` debug statements in production code.
- Mobile-first responsive design — this will primarily be used on phones during the trip.

---

## Learned Rules

# Repository Instructions for GitHub Copilot

## Purpose

Use these instructions when working on R code in this repository or repositories that import these instructions.

## Core principles

1. Use modern tidyverse patterns (`dplyr` 1.1+, native pipe `|>`, `join_by()`, `.by` grouping).
2. Prefer readable, maintainable code first; optimize only after profiling.
3. Follow tidyverse style conventions (consistent naming, spacing, function structure).
4. Use test-first development for non-trivial changes.
5. Keep security non-negotiable: never introduce secrets, unsafe input handling, or sensitive-data leakage.
6. Use evidence-based reasoning and be explicit about uncertainty.

## R coding standards

- Prefer `|>` over `%>%`.
- Prefer `purrr::map_*()` over type-unstable `sapply()`.
- Prefer per-operation grouping (`.by`) over `group_by()/ungroup()` where possible.
- Prefer `join_by()` instead of legacy named-vector join syntax.
- Use `TRUE` / `FALSE` (not `T` / `F`).

## Testing expectations

- Minimum overall test coverage: 80%.
- Target 100% coverage for:
  - statistical calculations,
  - input validation,
  - security-relevant logic,
  - core business logic.
- Include edge-case tests (NA, NULL, empty input, invalid types, boundary values).

## Security expectations

- Never hardcode credentials or tokens.
- Use environment variables for secrets.
- Avoid logging or exporting sensitive data.
- Validate file paths and untrusted inputs.
- Avoid unsafe dynamic evaluation patterns on untrusted input.

## Environment guidance

- Use `pak` for package installation.
- Use `uv` for Python environment management when Python is involved.
